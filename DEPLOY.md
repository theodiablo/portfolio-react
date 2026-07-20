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

## 3. Add the `/cv` → PDF redirect (CloudFront Function)

`/cv/theo-camboulive-cv.pdf` ships in the build; this makes the bare `/cv` URL resolve to it.
Create a viewer-request CloudFront Function and attach it to dist `E2JKARQJ6N6ORJ`.

`cv-redirect.js`:
```js
function handler(event) {
  var req = event.request;
  if (req.uri === '/cv' || req.uri === '/cv/') {
    return {
      statusCode: 302,
      statusDescription: 'Found',
      headers: { location: { value: '/cv/theo-camboulive-cv.pdf' } }
    };
  }
  return req;
}
```

```bash
aws cloudfront create-function \
  --name cv-redirect \
  --function-config Comment="/cv -> PDF",Runtime="cloudfront-js-2.0" \
  --function-code fileb://cv-redirect.js

# grab the ETag from the output, then:
aws cloudfront publish-function --name cv-redirect --if-match <ETag>
```

Then in the CloudFront console attach `cv-redirect` to the default cache behavior of
`E2JKARQJ6N6ORJ` as the **Viewer request** function (or update the distribution config via CLI).

## 4. First deploy

Pushing to `main` (step 1) triggers the workflow once secrets exist. If you pushed before
setting secrets, re-run it from the Actions tab or `git commit --allow-empty -m "deploy" && git push`.
Confirm https://theo.camboulive.solutions serves the new site and https://theo.camboulive.solutions/cv
redirects to the PDF.
