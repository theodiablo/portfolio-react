import React, { useState } from 'react'
import Layout from '../components/layout'
import Scroller from '../components/scroller'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

import PortfolioModal from '../components/portfolio/modal'
import PortfolioCarousel from '../components/portfolio/carousel'

const PortfolioPage = ({ data, location }) => {
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

  const projects = [
    {
      name: 'Go Zero Waste App',
      category: 'Mobile App',
      image: data.gzwImage.childImageSharp,
    },
    {
      name: 'Nest City Lab',
      category: 'Website',
      image: data.apocapocImage.childImageSharp,
    },
    {
      name: 'Dropand',
      category: 'E-Commerce',
      image: data.dropandImage.childImageSharp,
    },
    {
      name: 'King Games',
      category: 'Backend + Internal tools',
      image: data.kingImage.childImageSharp,
    },
  ]

  return (
    <main>
      <Layout
        title={t('portfolioPage.title')}
        logoVariant="info"
        id="portfolio"
        location={location}
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
              aspectratio={3 / 1}
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
                  {/* <Link
                    className="btn btn-info btn-xl js-scroll-trigger text-capitalize"
                    to="/portfolio/#projects"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    <Trans i18nKey="portfolioPage.headerButton">
                      See projects
                    </Trans>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          <section className="bg-info" id="projects">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {projects.map((project, idx) => {
                  return (
                    <div key={'project' + idx} className="col-lg-3 col-sm-6">
                      <a
                        className="portfolio-box"
                        href={project.image}
                        onClick={handlePortfolioClick.bind(this, idx)}
                      >
                        <GatsbyImage
                          className=""
                          image={getImage(project.image)}
                          aspectratio={16 / 9}
                          formats={['auto', 'webp', 'avif']}
                          alt={project.name}
                        />
                        <div className="portfolio-box-caption">
                          <div className="project-category text-white-50">
                            {project.category}
                          </div>
                          <div className="project-name">{project.name}</div>
                        </div>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <PortfolioModal show={modalShow} onHide={() => setModal(false, 0)}>
            <PortfolioCarousel projects={projects} current={modalCurrent} />
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

    gzwImage: file(relativePath: { eq: "portfolio/go-zero-waste-app.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.77)
      }
    }
    apocapocImage: file(relativePath: { eq: "portfolio/nest-city-lab.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.77)
      }
    }
    dropandImage: file(relativePath: { eq: "portfolio/dropand.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.77)
      }
    }
    kingImage: file(relativePath: { eq: "portfolio/king.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.77)
      }
    }
  }
`
