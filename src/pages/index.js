import React from 'react'
import Layout from '../components/layout'
import Scroller from '../components/scroller'
import { graphql } from 'gatsby'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBullhorn,
  faChartLine,
  faCogs,
  faHandsHelping,
  faLaptopCode,
  faLeaf,
  faShoppingCart,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons'
import { Badge, Card, Col, Row } from 'react-bootstrap'

const IndexPage = () => {
  const { t } = useTranslation()

  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)

  return (
    <main>
      <Layout title={t('homePage.title')} logoVariant="primary" id="homepage">
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
                <div className="col-lg-10 g-0 align-self-end">
                  <h1 className="text-white font-weight-bold">
                    <Trans i18nKey="homePage.headerTitle">
                      <span className="text-primary">Green</span> Tech Solutions
                    </Trans>
                  </h1>
                </div>
                <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 font-weight-light mb-5">
                    <Trans i18nKey="homePage.headerDescription">
                      While the use of Information Technology is causing many
                      harm on a global level, I believe it can help us
                      rebuilding a better and more sustainable world. I am
                      focused on this misson, helping sustainable companies
                      across the globe.
                    </Trans>
                  </p>
                  <Link
                    className="btn btn-primary btn-xl js-scroll-trigger"
                    to="#services"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    <Trans i18nKey="homePage.headerButton">Find Out More</Trans>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="page-section" id="services">
            <div className="container">
              <h2 className="text-center mt-0">
                <Trans>Services</Trans>
              </h2>
              <hr className="divider my-4" />
              <Row xl="5" lg="4" md="3" sm="2" xs="1" className="gy-2 gx-1">
                {Array.from({ length: 5 }).map((_, idx) => {
                  const icons = [
                    faCogs,
                    faLaptopCode,
                    faSitemap,
                    faChartLine,
                    faShoppingCart,
                  ]
                  return (
                    <Col key={idx}>
                      <Card className="shadow mx-1 rounded-3">
                        <Card.Header className="h4">
                          <FontAwesomeIcon icon={icons[idx]} className="me-1" />
                          <Trans i18nKey={'services.title' + (idx + 1)}>
                            Back-End
                          </Trans>
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            <Trans i18nKey={'services.body' + (idx + 1)}>
                              Java, Php, GoLang, Database Administration (SQL,
                              MongoDb), RestApis... This is a wider card with
                              supporting text below as a natural lead-in to
                              additional content. This content is a little bit
                              longer.
                            </Trans>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-white text-center">
                          <p className="h6">
                            <Trans i18nKey={'services.skills'}>Skills</Trans>
                          </p>
                          {t('services.skills' + (idx + 1))
                            .split(',')
                            .map((skill, skillIndex) => {
                              return (
                                <>
                                  <Badge
                                    key={`skill${idx}-${skillIndex}`}
                                    bg="primary"
                                  >
                                    {skill.trim()}
                                  </Badge>{' '}
                                </>
                              )
                            })}
                        </Card.Footer>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
              <div className="text-center mt-5">
                <a
                  className="btn btn-dark btn-xl js-scroll-trigger"
                  href="#about"
                  onClick={Scroller.handleAnchorScroll}
                >
                  <Trans>About me</Trans>
                </a>
              </div>
            </div>
          </section>

          <section className="page-section bg-primary" id="about">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">
                    <Trans>Théo Camboulive - Full Stack Freelancer</Trans>
                  </h2>
                  <hr className="divider light my-4" />
                  <div className="d-md-flex align-items-center mb-4">
                    <div className="flex-shrink-0  col-8 col-md-3 m-auto pb-3">
                      <StaticImage
                        src="../images/profile.jpg"
                        alt="Théo Camboulive"
                        className="img-thumbnail rounded-circle"
                      />
                    </div>
                    <div
                      className="flex-grow-1 ms-md-3 text-white"
                      style={{ '--bs-text-opacity': 0.8 }}
                    >
                      <p>
                        <Trans i18nKey="about.description1">
                          After years working as a Full Stack developer for
                          several companies{' '}
                          <i>(Sopra Steria, Criteo, King - AKA Candy Crush)</i>,
                          I decided to leave this world and start working
                          exclusively for sustainable businesses.
                        </Trans>
                      </p>
                      <p>
                        <Trans i18nKey="about.description2">
                          With my life partner, we co-founded{' '}
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
                    <Trans>View my CV</Trans>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section" id="values">
            <div className="container">
              <h2 className="text-center mt-0">
                <Trans>Core values</Trans>
              </h2>
              <hr className="divider my-4" />
              <div className="row">
                <div className="col-lg-3 col-md-6 text-center value-1">
                  <div className="mt-5">
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      className="text-primary mb-4"
                      size="4x"
                    />
                    <h3 className="h4 mb-2">
                      <Trans i18nKey="values.title1">
                        Efficiency &amp; Skills
                      </Trans>
                    </h3>
                    <p className="text-muted mb-0">
                      <Trans i18nKey="values.desc1">
                        I design solutions to optimize speed, computation and
                        storage to reduce impact on the planet and cost for the
                        customers.
                      </Trans>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center value-2">
                  <div className="mt-5">
                    <FontAwesomeIcon
                      icon={faBullhorn}
                      className="text-primary mb-4"
                      size="4x"
                    />
                    <h3 className="h4 mb-2">
                      <Trans i18nKey="values.title2">
                        Communication &amp; Honesty
                      </Trans>
                    </h3>
                    <p className="text-muted mb-0">
                      <Trans i18nKey="values.desc2">
                        I say inconvenient truths early rather than keeping them
                        until it is too late. I believe that communication is
                        the most important skill to carry out a project
                        successfully.
                      </Trans>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center value-3">
                  <div className="mt-5">
                    <FontAwesomeIcon
                      icon={faHandsHelping}
                      className="text-primary mb-4"
                      size="4x"
                    />
                    <h3 className="h4 mb-2">
                      <Trans i18nKey="values.title3">Professionalism</Trans>
                    </h3>
                    <p className="text-muted mb-0">
                      <Trans i18nKey="values.desc3">
                        I treat all my customers as equals. All the work I
                        realize have the same importance and quality standards.
                        I like to see myself as part of development team of the
                        company I work for.
                      </Trans>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center value-4">
                  <div className="mt-5">
                    <FontAwesomeIcon
                      icon={faLeaf}
                      className="text-primary mb-4"
                      size="4x"
                    />
                    <h3 className="h4 mb-2">
                      <Trans i18nKey="values.title4">Ethics</Trans>
                    </h3>
                    <p className="text-muted mb-0">
                      <Trans
                        i18nKey="values.desc4"
                        components={{ italic: <em /> }}
                      >
                        My goal is to help the world to be a better place by
                        helping sustainable companies. Keeping the
                        <italic>status quo</italic> is not an option.
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="page-section bg-dark text-white">
             <div className="container text-center">
               <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
               <a
                 className="btn btn-light btn-xl"
                 href="https://startbootstrap.com/themes/creative/"
               >
                 Download Now!
               </a>
             </div>
           </section> */}
        </>
      </Layout>
    </main>
  )
}

export default IndexPage

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
`
