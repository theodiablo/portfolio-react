# Deploy runbook — theo.camboulive.solutions

Phase 1 is committed locally. The GitHub Actions workflow (`.github/workflows/deploy-s3.yml`)
is ready and deploys on every push to `main`:
build → `aws s3 sync dist/` → CloudFront invalidation on dist `E2JKARQJ6N6ORJ`.

The steps below need **your** GitHub + AWS credentials, so they run on your machine — I
can't create repo secrets or touch the AWS account from here (no credentials in this session,
and I won't enter secrets on your behalf).

## 1. Create the GitHub repo and push

```bash
cd C:\Users\theod\Work\portfolio
# public — the site is itself a portfolio piece
gh repo create theo-camboulive/portfolio --public --source=. --remote=origin --push
```

(Or create the repo in the GitHub UI, then `git remote add origin … && git push -u origin main`.)

## 2. Set the deploy secrets

The workflow reads `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` — reuse the same IAM
user the old repo used.

```bash
gh secret set AWS_ACCESS_KEY_ID   --repo theo-camboulive/portfolio
gh secret set AWS_SECRET_ACCESS_KEY --repo theo-camboulive/portfolio
# gh prompts for each value — nothing is echoed or stored in shell history
```

## 3. `/cv` → PDF redirect + `/running-coach` rewrite (CloudFront Function) — ✅ done 2026-07-22

The distribution already had a viewer-request function
(`theo-camboulive-solutions-s3-directory-index`, the directory-index rewriter), and
CloudFront allows only one function per event type — so instead of a new `cv-redirect`
function, the redirect was merged into the existing one and republished:

```js
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Redirect the bare /cv URL to the CV PDF.
    if (uri === '/cv' || uri === '/cv/') {
        return {
            statusCode: 302,
            statusDescription: 'Found',
            headers: { location: { value: '/cv/theo-camboulive-cv.pdf' } }
        };
    }

    // The running-coach page is a root-level HTML file, not a directory index.
    if (uri === '/running-coach' || uri === '/running-coach/') {
        request.uri = '/running-coach.html';
        return request;
    }

    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }
    // Check whether the URI is missing a file extension.
    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }

    return request;
};
```

Verified live: `/cv` returns 302 → `/cv/theo-camboulive-cv.pdf` (200, application/pdf).
No distribution config change was needed — the function was already attached to the
default cache behavior of `E2JKARQJ6N6ORJ`.

## 4. First deploy

Pushing to `main` (step 1) triggers the workflow once secrets exist. If you pushed before
setting secrets, re-run it from the Actions tab or `git commit --allow-empty -m "deploy" && git push`.
Confirm https://theo.camboulive.solutions serves the new site and https://theo.camboulive.solutions/cv
redirects to the PDF.
