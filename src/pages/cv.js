import React from 'react'
import Layout from '../components/layout'
import Scroller from '../components/scroller'
import { graphql } from 'gatsby'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({ location }) => {
  const { t } = useTranslation()

  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)

  return (
    <main className="bg-dark">
      <Layout
        title={t('cvPage.title')}
        logoVariant="primary"
        id="cv"
        location={location}
      >
        <>
          <div className="header noprint">
            <a id="print-btn" className="btn-big-red">
              <i className="fas fa-download"></i>
            </a>
          </div>
          <Container>
            <Row>
              <Col sm={{ order: 'last' }} className="sidebar-wrapper">
                <div className="profile-container">
                  <img
                    className="profile"
                    src="../images/cv/profile-small.jpg"
                    alt="Profile Picture"
                  />
                  <h1 className="name">Théo Camboulive</h1>
                  <h3 className="tagline">
                    <u>Full Stack Developer</u>
                    <br />
                    Barcelona, Spain
                  </h3>
                </div>
                {/* <!--//profile-container--> */}

                <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                    <li className="email">
                      <i className="fas fa-envelope"></i>
                      <a
                        href="mailto:theo.camboulive@telecomnancy.net"
                        target="_blank"
                        rel="noreferrer"
                      >
                        theo.camboulive@telecomnancy.net
                      </a>
                    </li>
                    <li className="phone">
                      <i className="fas fa-phone"></i>
                      <a
                        href="tel:+34722619616"
                        target="_blank"
                        rel="noreferrer"
                      >
                        (+34) 722 619 616
                      </a>
                    </li>
                    <li className="linkedin">
                      <i className="fab fa-linkedin"></i>
                      <a
                        href="https://www.linkedin.com/in/théo-camboulive/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Linkedin profile: /in/théo-camboulive
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--//contact-container--> */}
                <div className="education-container container-block">
                  <h2 className="container-block-title">Education</h2>
                  <div className="item">
                    <h4 className="degree">
                      Master's Degree in Computer Science
                    </h4>
                    <h5 className="meta">Telecom Nancy</h5>
                    <div className="time">2011 - 2014</div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <h4 className="degree">
                      Master's Degree in Business Administration
                    </h4>
                    <h5 className="meta">Lorraine University</h5>
                    <div className="time">2013 - 2014</div>
                  </div>
                  {/* <!--//item--> */}
                </div>
                {/* <!--//education-container--> */}

                <div className="languages-container container-block">
                  <h2 className="container-block-title">Languages</h2>
                  <ul className="list-unstyled interests-list">
                    <li>
                      French <span className="lang-desc">(Native)</span>
                    </li>
                    <li>
                      English <span className="lang-desc">(Fluent)</span>
                    </li>
                    <li>
                      Spanish <span className="lang-desc">(Fluent)</span>
                    </li>
                  </ul>
                </div>
                {/* <!--//interests--> */}

                <div className="interests-container container-block">
                  <h2 className="container-block-title">Interests</h2>
                  <ul className="list-unstyled interests-list">
                    <li>
                      <i className="fas fa-leaf"></i> Sustainability
                    </li>
                    <li>
                      <i className="fas fa-child"></i> Capoeira
                    </li>
                    <li>
                      <i className="fas fa-music"></i> Ukulele
                    </li>
                    <li>
                      <i className="fas fa-camera"></i> Photography
                    </li>
                  </ul>
                </div>
                {/* <!--//interests--> */}
              </Col>
              {/* <!--//sidebar-wrapper--> */}

              <Col sm={8} className="main-wrapper">
                <section id="update-date" className="information">
                  Last updated: March 2020
                </section>
                <section className="section summary-section">
                  <h2 className="section-title">
                    <i className="fas fa-user"></i>Career Profile
                  </h2>
                  <div className="summary">
                    <p>
                      I am currently working as a Freelance Full Stack
                      developer, based in Barcelona, but working virtually
                      everywhere! Thanks to my formation and curiosity, I have
                      acquired a wide range of technical and business knowledge,
                      which enables me to work through many different business
                      situation. I am looking for companies focused on making
                      earth great again, challenging projects where I can use my
                      skills to find out the optimal solutions.
                    </p>
                  </div>
                  {/* <!--//summary--> */}
                </section>
                {/* <!--//section--> */}

                <section className="section experiences-section">
                  <h2 className="section-title">
                    <i className="fas fa-dna"></i>Experiences
                  </h2>
                  <div className="items">
                    <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                          <h3 className="job-title">Co-Founder</h3>
                          <div className="time">March 2018 - Present</div>
                        </div>
                        {/* <!--//upper-row--> */}
                        <div className="company">
                          <a
                            href="https://www.luffashop.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <StaticImage
                              className="company-logo"
                              layout="constrained"
                              aspectratio={1 / 1}
                              alt="Luffa Shop"
                              src={'../images/cv/company-luffa.png'}
                              formats={['auto', 'webp', 'avif']}
                            />
                            Luffa Shop, Barcelona
                          </a>
                        </div>
                      </div>
                      {/* <!--//meta--> */}
                      <div className="details">
                        <p>
                          Luffa Shop is an ecommerce with the goal of removing
                          plastic waste from all Spanish households. We built it
                          from scratch with the goal to promote sustainable
                          alternatives to all the plastic packaging we are
                          generating daily.
                        </p>
                        <p>
                          <br />
                          We managed to avoid more than 15000 Kg of plastic
                          waste, planted more than 3500 trees!{' '}
                          <i className="fas fa-thumbs-up"></i>
                        </p>
                      </div>
                      {/* <!--//details--> */}
                      <div className="lower-row">
                        <h4>
                          <i className="fas fa-wrench"></i>Main skill used
                        </h4>
                        <span className="tech-used">
                          Wordpress &amp; Prestashop, PHP, HTML5 &amp; CSS3,
                          AWS, SEO, Analytics, Accounting
                        </span>
                      </div>
                      {/* <!--//lower-row--> */}
                    </div>
                    {/* <!--//item--> */}
                    <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                          <h3 className="job-title">Backend developer</h3>
                          <div className="time">August 2018 - May 2020</div>
                        </div>
                        {/* <!--//upper-row--> */}
                        <div className="company">
                          <a
                            href="https://www.king.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <StaticImage
                              className="company-logo"
                              layout="constrained"
                              aspectratio={1 / 1}
                              alt="King"
                              src={'../images/cv/company-king.svg'}
                              formats={['auto', 'webp', 'avif']}
                            />
                            King, Barcelona
                          </a>
                        </div>
                      </div>
                      {/* <!--//meta--> */}
                      <div className="details">
                        <p className="team-name">
                          Communication Channels (June 2019 - May 2020)
                        </p>
                        <p>
                          This team provides a message delivery service used all
                          King's games (Candy Crush franchises, Farm Heroes,
                          Bubble Witch...)
                        </p>
                        <p>
                          During a year, I maintained this service and developed
                          new features both in backend and client sides.
                        </p>
                      </div>
                      {/* <!--//details--> */}
                      <div className="details">
                        <p className="team-name">
                          Internal Applications Development (August 2018 - June
                          2019)
                        </p>
                        <p>
                          I developped from scratch the backend of an
                          application to manage the internal company events.
                          This included the technical analysis, architecture,
                          implementation, infrastructure and security aspects.
                        </p>
                      </div>
                      {/* <!--//details--> */}
                      <div className="lower-row">
                        <h4>
                          <i className="fas fa-wrench"></i>Main technologies
                          used
                        </h4>
                        <span className="tech-used">
                          Java, Docker, Kubernetes, MongoDB, NodeJs
                        </span>
                      </div>
                      {/* <!--//lower-row--> */}
                    </div>
                    {/* <!--//item--> */}

                    <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                          <h3 className="job-title">Full-stack developer</h3>
                          <div className="time">2017 - 2018</div>
                        </div>
                        {/* <!--//upper-row--> */}
                        <div className="company">
                          <StaticImage
                            className="company-logo"
                            layout="constrained"
                            aspectratio={1 / 1}
                            alt="Freelance"
                            src={'../images/cv/company-freelance.png'}
                            formats={['auto', 'webp', 'avif']}
                          />
                          <a>Freelance, around Asia</a>
                        </div>
                      </div>
                      {/* <!--//meta--> */}
                      <div className="details">
                        <p>
                          While living in Asia, I have been developing backend
                          and front-end web solutions for several clients. I
                          also developed several personal projects such as blogs
                          and collaborating on an indie PC game.
                        </p>
                      </div>
                      {/* <!--//details--> */}
                      <div className="lower-row">
                        <h4>
                          <i className="fas fa-wrench"></i>Main technologies
                          used
                        </h4>
                        <span className="tech-used">
                          GoHugo, HTML5 &amp; CSS3, Javascript, AWS, Java Fx
                        </span>
                      </div>
                      {/* <!--//lower-row--> */}
                    </div>
                    {/* <!--//item--> */}

                    <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                          <h3 className="job-title">Full-stack developer</h3>
                          <div className="time">2015 - 2017</div>
                        </div>
                        {/* <!--//upper-row--> */}
                        <div className="company">
                          <a
                            href="https://www.icontainers.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <StaticImage
                              className="company-logo"
                              layout="constrained"
                              aspectratio={1 / 1}
                              alt="Freelance"
                              src={'../images/cv/company-icontainers.png'}
                              formats={['auto', 'webp', 'avif']}
                            />
                            iContainers, Barcelona
                          </a>
                        </div>
                      </div>
                      {/* <!--//meta--> */}
                      <div className="details">
                        <p>
                          iContainers is trying to convert the maritime logistic
                          sector into a real e-comerce, bringing cutting-edge
                          technologies to improve the processes. I was working
                          on each step of the company’s stack in order to
                          provide the best software quality at all levels. I
                          took part in architectural decisions and system
                          developments, also improving different parts of the IT
                          department's processes: Development environment,
                          reporting tools, build process…
                        </p>
                      </div>
                      {/* <!--//details--> */}
                      <div className="lower-row">
                        <h4>
                          <i className="fas fa-wrench"></i>Main technologies
                          used
                        </h4>
                        <span className="tech-used">
                          Java, Spring, Hibernate, PostgreSQL, .Net, HTML &amp;
                          CSS, SASS, Javascript, AWS, GoLang
                        </span>
                      </div>
                      {/* <!--//lower-row--> */}
                    </div>
                    {/* <!--//item--> */}

                    <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                          <h3 className="job-title">
                            Technical Solutons Engineer
                          </h3>
                          <div className="time">2015</div>
                        </div>
                        {/* <!--//upper-row--> */}
                        <div className="company">
                          <a
                            href="https://www.criteo.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <StaticImage
                              className="company-logo"
                              layout="constrained"
                              aspectratio={1 / 1}
                              alt="Freelance"
                              src={'../images/cv/company-criteo.png'}
                              formats={['auto', 'webp', 'avif']}
                            />
                            Criteo, Barcelona
                          </a>
                        </div>
                      </div>
                      {/* <!--//meta--> */}
                      <div className="details">
                        <p>
                          In the web advertsing context, I was managing
                          integrations of new clients from end to end, advising
                          Sales teams and Account Managers to troubleshoot and
                          optmize existing accounts and making sure that the ads
                          were compliant with all the advertising rules.
                        </p>
                      </div>
                      {/* <!--//details--> */}
                      <div className="lower-row">
                        <h4>
                          <i className="fas fa-wrench"></i>Main technologies
                          used
                        </h4>
                        <span className="tech-used">
                          HTML, Javascript, Google Tag Manager, XSLT
                        </span>
                      </div>
                      {/* <!--//lower-row--> */}
                    </div>
                    {/* <!--//item--> */}

                    <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                          <h3 className="job-title">Programmer Analyst</h3>
                          <div className="time">2014 - 2015</div>
                        </div>
                        {/* <!--//upper-row--> */}
                        <div className="company">
                          <a
                            href="https://www.soprasteria.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <StaticImage
                              className="company-logo"
                              layout="constrained"
                              aspectratio={1 / 1}
                              alt="Freelance"
                              src={'../images/cv/company-sopra.png'}
                              formats={['auto', 'webp', 'avif']}
                            />
                            Sopra Group, Barcelona
                          </a>
                        </div>
                      </div>
                      {/* <!--//meta--> */}
                      <div className="details">
                        <p>
                          Developer &amp; Technical Coordinator in a project for
                          a major company in the water supply industry. The goal
                          of this project was to be able to generate a web
                          aplication defining only the database description. I
                          was involved in the following roles:
                        </p>
                        <ul>
                          <li>
                            Developer in the team responsible for creating the
                            framework which was generating all the base code,
                            reading the Database Metamodel (HTML, Java,
                            Databases Scripts)
                          </li>
                          <li>
                            Technical Coordinator, providing formation to the
                            Data Manager
                          </li>
                          <li>
                            Member of one of the teams responsible for
                            programming the additional business rules and
                            testing
                          </li>
                        </ul>
                      </div>
                      {/* <!--//details--> */}
                      <div className="lower-row">
                        <h4>
                          <i className="fas fa-wrench"></i>Main technologies
                          used
                        </h4>
                        <span className="tech-used">
                          Java, Spring, Hibernate, Database Metamodels, Angular
                        </span>
                      </div>
                      {/* <!--//lower-row--> */}
                    </div>
                    {/* <!--//item--> */}

                    <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                          <h3 className="job-title">
                            Developer &amp; Jr. Product Manager
                          </h3>
                          <div className="time">2014 (6 months internship)</div>
                        </div>
                        {/* <!--//upper-row--> */}
                        <div className="company">
                          <a
                            href="https://worldline.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <StaticImage
                              className="company-logo"
                              layout="constrained"
                              style={{
                                padding: '0.5em !important',
                              }}
                              alt="Freelance"
                              src={'../images/cv/company-worldline.jpg'}
                              formats={['auto', 'webp', 'avif']}
                            />
                            Worldline, Lille (France)
                          </a>
                        </div>
                      </div>
                      {/* <!--//meta--> */}
                      <div className="details">
                        <p>
                          <em>
                            Do you think it is this still relevant to put this?
                            I have my doubts too, thanks anyway for taking the
                            time to read until here
                          </em>
                        </p>
                        <p>
                          In the digitalization department of the company, I had
                          two main roles:
                        </p>
                        <ul>
                          <li>
                            Looking for new business oportunities and analyzing
                            the market and competitors for several ideas
                          </li>
                          <li>
                            For one oportunity found, I developed a first
                            version (a working prototype) to present to our
                            clients
                          </li>
                        </ul>
                      </div>
                      {/* <!--//details--> */}
                      <div className="lower-row">
                        <h4>
                          <i className="fas fa-wrench"></i>Main technologies
                          used
                        </h4>
                        <span className="tech-used">
                          Java, OAuth2, Cloud Storage APIs, Thymeleaf,HTML &amp;
                          CSS, Marketing Analysis
                        </span>
                      </div>
                      {/* <!--//lower-row--> */}
                    </div>
                    {/* <!--//item--> */}
                  </div>
                  {/* <!--//items--> */}
                </section>
                {/* <!--//section--> */}

                {/* <!-- POJECTS SECTION DISABLED HERE -> */}
                <section className="section projects-section">
                  <h2 className="section-title">
                    <i className="fas fa-archive"></i>Projects
                  </h2>
                  <div className="intro">
                    <p>
                      You can list your side projects or open source libraries
                      in this section. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Vestibulum et ligula in nunc bibendum
                      fringilla a eu lectus.
                    </p>
                  </div>
                  {/* <!-//intro-> */}
                  <div className="item">
                    <span className="project-title">
                      <a href="#hook">Velocity</a>
                    </span>{' '}
                    -
                    <span className="project-tagline">
                      A responsive website template designed to help startups
                      promote, market and sell their products.
                    </span>
                  </div>
                  {/* <!-//item-> */}
                </section>
                {/* <!-//section--> */}

                <section className="skills-section section">
                  <h2 className="section-title">
                    <i className="fas fa-rocket"></i>Skills &amp; Proficiency
                  </h2>
                  <div className="skillset">
                    <div className="skills-group back">
                      <span className="group-title">
                        <i className="fa fa-cogs"></i>Backend
                      </span>
                      <div className="item">
                        <h3 className="level-title">Java</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="94%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">
                          Node.js (yes, as backend!)
                        </h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="85%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">GoLang</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="75%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">Relational Databases</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="93%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">No-SQL (Mongo)</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="87%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">Docker</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="90%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">Kubernetes</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="85%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                    </div>

                    <div className="skills-group front">
                      <span className="group-title">
                        <i className="fas fa-desktop"></i>Frontend
                      </span>
                      <div className="item">
                        <h3 className="level-title">Javascript &amp; jQuery</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="95%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">HTML5 &amp; CSS3 + SCSS</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="90%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">React</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="85%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">Vue.js</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="80%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                    </div>

                    <div className="skills-group other">
                      <span className="group-title">
                        <i className="fab fa-angellist"></i>Other useful skills
                      </span>
                      <div className="item">
                        <h3 className="level-title">Amazon Web Services</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="90%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">Google Cloud Platform</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="85%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">Project Management</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="75%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">Agile methodologies</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="95%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                      <div className="item">
                        <h3 className="level-title">Interpersonal Skills</h3>
                        <div className="level-bar">
                          <div
                            className="level-bar-inner"
                            data-level="100%"
                          ></div>
                        </div>
                        {/* <!--//level-bar--> */}
                      </div>
                      {/* <!--//item--> */}
                    </div>
                  </div>
                </section>
                {/* <!--//skills-section--> */}
              </Col>
              {/* <!--//main-body--> */}
            </Row>
          </Container>
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
