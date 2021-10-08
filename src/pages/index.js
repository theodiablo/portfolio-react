import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

// markup
const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Layout title={t("homePage.title")}>
        <>
          <div className="masthead">
            <div className="background">
              <StaticImage
                className="w-100 h-100"
                src="../images/bg-masthead.jpg"
                alt="background"
              />
            </div>
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-10 align-self-end">
                  <h1 className="text-white font-weight-bold">
                    <Trans i18nKey="homePage.headerTitle">
                      <span className="text-primary">Green</span> IT Solutions
                    </Trans>
                  </h1>
                </div>
                <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 font-weight-light mb-5">
                    <Trans i18nKey="homePage.headerDescription">
                      While the use of Information Technology is causing many
                      harm on a global level, I believe that it can help us
                      rebuilding a better and more sustainable world. I am
                      focused on this misson, helping sustainable companies
                      across the globe.
                    </Trans>
                  </p>
                  <Link
                    className="btn btn-primary btn-xl js-scroll-trigger"
                    to="#about"
                  >
                    <Trans i18nKey="homePage.headerButton">Find Out More</Trans>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
