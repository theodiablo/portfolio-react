import React from 'react'
import Layout from '../components/layout'
import Scroller from '../components/scroller'
import { graphql } from 'gatsby'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine,
  faCogs,
  faGlobe,
  faHeart,
  faLaptopCode,
  faShoppingCart,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Row } from 'react-bootstrap'

const IndexPage = () => {
  const { t } = useTranslation()

  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)

  return (
    <main>
      <Layout title={t('homePage.title')} logoVariant="primary">
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
                    <Trans i18nKey="homePage.headerTitle">
                      <span className="text-primary">Green</span> IT Solutions
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
              <Row style={{ display: 'none' }}>
                <Col>
                  <Card className="shadow p-3 mx-1 rounded-3">
                    <Card.Body>
                      <Card.Title>
                        <Trans i18nKey="services1.title">Back-End</Trans>
                      </Card.Title>
                      <Card.Text>
                        <Trans i18nKey="services.body">
                          Java, Php, GoLang, Database Administration (SQL,
                          MongoDb), RestApis... This is a wider card with
                          supporting text below as a natural lead-in to
                          additional content. This content is a little bit
                          longer.
                        </Trans>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="shadow p-3 mx-1 rounded-3">
                    <Card.Body>
                      <Card.Title>
                        <Trans i18nKey="services2.title">Front-End</Trans>
                      </Card.Title>
                      <Card.Text>
                        <Trans i18nKey="services2.body">
                          React, Vue, Web standards... This is a wider card with
                          supporting text below as a natural lead-in to
                          additional content. This content is a little bit
                          longer.
                        </Trans>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="shadow p-3 mx-1 rounded-3">
                    <Card.Body>
                      <Card.Title>
                        <Trans i18nKey="services3.title">
                          Architecture &amp; Hosting
                        </Trans>
                      </Card.Title>
                      <Card.Text>
                        <Trans i18nKey="services3.body">
                          Microservices, Monolyth... This card has supporting
                          text below as a natural lead-in to additional content.
                        </Trans>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="shadow p-3 mx-1 rounded-3">
                    <Card.Body>
                      <Card.Title>
                        <Trans i18nKey="services4.title">
                          Analytics &amp; SEO
                        </Trans>
                      </Card.Title>
                      <Card.Text>
                        <Trans i18nKey="services4.body">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that equal
                          height action.
                        </Trans>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="shadow p-3 mx-1 rounded-3">
                    <Card.Body>
                      <Card.Title>
                        <Trans i18nKey="services5.title">
                          Ecommerce optimization
                        </Trans>
                      </Card.Title>
                      <Card.Text>
                        <Trans i18nKey="services5.body">
                          Woocommerce, Prestashop... This is a wider card with
                          supporting text below as a natural lead-in to
                          additional content. This card has even longer content
                          than the first to show that equal height action.
                        </Trans>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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
                        <Card.Body>
                          <Card.Title>
                            <FontAwesomeIcon
                              icon={icons[idx]}
                              className="me-1"
                            />
                            <Trans i18nKey={'services' + (idx + 1) + '.title'}>
                              Back-End
                            </Trans>
                          </Card.Title>
                          <Card.Text>
                            <Trans i18nKey={'services' + (idx + 1) + '.body'}>
                              Java, Php, GoLang, Database Administration (SQL,
                              MongoDb), RestApis... This is a wider card with
                              supporting text below as a natural lead-in to
                              additional content. This content is a little bit
                              longer.
                            </Trans>
                          </Card.Text>
                        </Card.Body>
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
                    <Trans>More about me</Trans>
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
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      className="text-primary mb-4"
                      size="4x"
                    />
                    <h3 className="h4 mb-2">Sturdy Themes</h3>
                    <p className="text-muted mb-0">
                      Our themes are updated regularly to keep them bug free!
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="text-primary mb-4"
                      size="4x"
                    />
                    <h3 className="h4 mb-2">Up to Date</h3>
                    <p className="text-muted mb-0">
                      All dependencies are kept current to keep things fresh.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-primary mb-4"
                      size="4x"
                    />
                    <h3 className="h4 mb-2">Ready to Publish</h3>
                    <p className="text-muted mb-0">
                      You can use this design as is, or you can make changes!
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <FontAwesomeIcon
                      icon={faCogs}
                      className="text-primary mb-4"
                      size="4x"
                    />
                    <h3 className="h4 mb-2">Made with Love</h3>
                    <p className="text-muted mb-0">
                      Is it really open source if it&apos;s not made with love?
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
