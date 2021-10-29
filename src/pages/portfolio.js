import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Layout from "../components/layout";
import Scroller from "../components/scroller";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

import PortfolioModal from "../components/portfolio/modal";
import PortfolioCarousel from "../components/portfolio/carousel";

const PortfolioPage = (props) => {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [modalCurrent, setModalCurrent] = useState(0);

  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);

  function handlePortfolioClick(index, e) {
    e.preventDefault();
    setModal(true, index);
  }

  function setModal(isShown, current) {
    setModalShow(isShown);
    setModalCurrent(current);
  }

  return (
    <main>
      <Layout title={t("portfolioPage.title")}>
        <>
          <div className="portfoliohead" id="head">
            <div className="background">
              <StaticImage
                className="w-100 h-100"
                src="../images/bg-portfolio.jpg"
                alt="background"
              />
            </div>
            <div className="container py-5">
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-10 align-self-end">
                  <h1 className="text-white font-weight-bold">
                    <Trans i18nKey="portfolioPage.headerTitle">
                      <span className="text-info">Projects</span> I worked on
                    </Trans>
                  </h1>
                </div>
                <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 font-weight-light mb-5">
                    <Trans i18nKey="portfolioPage.headerDescription">
                      Here, you can find a list of projects I have been working
                      on during the last years. I have started to focus on
                      sustainablity not long ago, this is why you can find all
                      kind of experiences here.
                    </Trans>
                  </p>
                  <Link
                    className="btn btn-info btn-xl js-scroll-trigger text-capitalize"
                    to="/portfolio/#projects"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    <Trans i18nKey="portfolioPage.headerButton">
                      See projects
                    </Trans>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-primary" id="projects">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/1.jpg"
                    onClick={handlePortfolioClick.bind(this, 0)}
                  >
                    <Img
                      fluid={
                        props.data.images.edges[0].node.childImageSharp.fluid
                      }
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/2.jpg"
                    onClick={handlePortfolioClick.bind(this, 1)}
                  >
                    <Img
                      fluid={
                        props.data.images.edges[1].node.childImageSharp.fluid
                      }
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/3.jpg"
                    onClick={handlePortfolioClick.bind(this, 2)}
                  >
                    <Img
                      fluid={
                        props.data.images.edges[2].node.childImageSharp.fluid
                      }
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="images/portfolio/fullsize/4.jpg"
                    onClick={handlePortfolioClick.bind(this, 3)}
                  >
                    <Img
                      fluid={
                        props.data.images.edges[3].node.childImageSharp.fluid
                      }
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/5.jpg"
                    onClick={handlePortfolioClick.bind(this, 4)}
                  >
                    <Img
                      fluid={
                        props.data.images.edges[4].node.childImageSharp.fluid
                      }
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/6.jpg"
                    onClick={handlePortfolioClick.bind(this, 5)}
                  >
                    <Img
                      fluid={
                        props.data.images.edges[5].node.childImageSharp.fluid
                      }
                    />
                    <div className="portfolio-box-caption p-3">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <PortfolioModal show={modalShow} onHide={() => setModal(false, 0)}>
            <PortfolioCarousel
              images={props.data.images.edges}
              current={modalCurrent}
            />
          </PortfolioModal>
        </>
      </Layout>
    </main>
  );
};

export default PortfolioPage;

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
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
