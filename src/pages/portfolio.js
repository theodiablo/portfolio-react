import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Scroller from "../components/scroller";
import { graphql } from "gatsby";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChartLine,
  faCogs,
  faGlobe,
  faHeart,
  faLaptopCode,
  faShoppingCart,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Col, Row } from "react-bootstrap";

const IndexPage = () => {
  const { t } = useTranslation();

  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);

  return (
    <main>
      <Layout title={t("homePage.title")}>
        <>
          <div className="masthead" id="head">
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
                    <Trans i18nKey="portfolio.headerTitle">
                      <span className="text-primary">Portfolio</span>
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
                    onClick={Scroller.handleAnchorScroll}
                  >
                    <Trans i18nKey="homePage.headerButton">Find Out More</Trans>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="page-section bg-primary" id="projects">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">
                    <Trans>Théo Camboulive - Full Stack Freelancer</Trans>
                  </h2>
                  <hr className="divider light my-4" />
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0 col-3">
                      <StaticImage
                        src="../images/profile.jpg"
                        alt="Théo Camboulive"
                        className="img-thumbnail rounded-circle"
                      />
                    </div>
                    <div
                      className="flex-grow-1 ms-3 text-white"
                      style={{ "--bs-text-opacity": 0.8 }}
                    >
                      <p>
                        <Trans i18nKey="about.description1">
                          After years working as a Full Stack developer for
                          several companies{" "}
                          <i>(Sopra Steria, Criteo, King - AKA Candy Crush)</i>,
                          I decided to leave this world and start working
                          exclusively for sustainable businesses.
                        </Trans>
                      </p>
                      <p>
                        <Trans i18nKey="about.description2">
                          With my life partner, we co-founded{" "}
                          <a
                            href="https://instagram.com/luffa.shop"
                            target="_blank"
                            rel="noreferrer"
                            className="link-light"
                          >
                            Luffa Shop
                          </a>
                          , an e-commerce focused on reducing trash for spanish
                          households. In 3 years we planted 3500+ trees and
                          avoided about 10 000 kg of plastic waste!
                        </Trans>
                      </p>
                      <p>
                        <Trans i18nKey="about.description3">
                          During all this time, I have acquired a wide range of
                          technical and business knowledge, which enables me to
                          work through many different business situation.
                        </Trans>
                      </p>
                    </div>
                  </div>
                  <a
                    className="btn btn-light btn-xl js-scroll-trigger"
                    href="#services"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    <Trans>Know me better</Trans>
                  </a>
                </div>
              </div>
            </div>
          </section>
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
