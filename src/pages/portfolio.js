import React, { useState } from 'react'
import Layout from '../components/layout'
import Scroller from '../components/scroller'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

import PortfolioModal from '../components/portfolio/modal'
import PortfolioCarousel from '../components/portfolio/carousel'

const PortfolioPage = ({ data }) => {
  const { t } = useTranslation()
  const [modalShow, setModalShow] = useState(false)
  const [modalCurrent, setModalCurrent] = useState(0)

  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)

  function handlePortfolioClick(index, e) {
    e.preventDefault()
    setModal(true, index)
  }

  function setModal(isShown, current) {
    setModalShow(isShown)
    setModalCurrent(current)
  }

  return (
    <main>
      <Layout
        title={t('portfolioPage.title')}
        logoVariant="info"
        id="portfolio"
      >
        <>
          <div className="portfoliohead" id="head" style={{ display: 'grid' }}>
            <StaticImage
              className="backgroundImage"
              style={{
                gridArea: '1/1',
                // You can set a maximum height for the image, if you wish.
                maxHeight: 500,
                zIndex: -1,
              }}
              layout="fullWidth"
              // You can optionally force an aspect ratio for the generated image
              aspectRatio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              src={'../images/bg-portfolio.jpg'}
              formats={['auto', 'webp', 'avif']}
            />
            <div
              className="content container"
              style={{
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: '1/1',
                position: 'relative',
                // This centers the other elements inside the hero component
                placeItems: 'center',
                display: 'grid',
              }}
            >
              <div className="row align-items-center justify-content-center text-center  py-5">
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

          <section className="bg-info" id="projects">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/1.jpg"
                    onClick={handlePortfolioClick.bind(this, 0)}
                  >
                    <GatsbyImage
                      image={
                        data.images.edges[0].node.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Project 0"
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
                    <GatsbyImage
                      image={
                        data.images.edges[1].node.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Project 1"
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
                    <GatsbyImage
                      image={
                        data.images.edges[2].node.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Project 2"
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
                    <GatsbyImage
                      image={
                        data.images.edges[3].node.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Project 3"
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
                    <GatsbyImage
                      image={
                        data.images.edges[4].node.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Project 4"
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
                    <GatsbyImage
                      image={
                        data.images.edges[5].node.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Project 5"
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
              images={data.images.edges}
              current={modalCurrent}
            />
          </PortfolioModal>
        </>
      </Layout>
    </main>
  )
}

export default PortfolioPage

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
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
