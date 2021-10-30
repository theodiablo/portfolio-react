import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next'
import Scroller from '../components/scroller'

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import flagGb from '../images/flag-gb.svg'
import flagEs from '../images/flag-es.svg'
import flagFr from '../images/flag-fr.svg'

i18next.use(LanguageDetector)

const languageFlagCountry = {
  en: flagGb,
  es: flagEs,
  fr: flagFr,
}

const Header = () => {
  const {
    languages: avaliableLanguages,
    language: currentLanguage,
    originalPath,
  } = useI18next()
  const [expanded, setExpanded] = useState(false)

  const handleClickOnMenuItem = function (target) {
    setExpanded(false)
    Scroller.handleAnchorScroll(target)
  }

  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
        expand="lg"
        expanded={expanded}
      >
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand js-scroll-trigger" to="/">
            Théo Camboulive <span className="text-primary">Solutions</span>
          </Link>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : 'expanded')}
          />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="navbar-nav ms-auto my-2 my-lg-0">
              <Scrollspy
                className="navbar-nav"
                items={[
                  'about',
                  'services',
                  'portfolio',
                  'contact',
                  'projects',
                ]}
                currentClassName="active"
                rootEl={'#mainNav'}
                offset={-75}
              >
                <li className="nav-item">
                  <Link
                    className="js-scroll-trigger nav-link"
                    to="/#services"
                    onClick={handleClickOnMenuItem}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/#about"
                    className="js-scroll-trigger nav-link"
                    onClick={handleClickOnMenuItem}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/portfolio/"
                    onClick={() => setExpanded(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    className="js-scroll-trigger nav-link"
                    href="#contact"
                    onClick={handleClickOnMenuItem}
                  >
                    <Trans>Contact</Trans>
                  </Nav.Link>
                </li>

                <li className="dropdown language-selector">
                  <Dropdown className="" align="end">
                    <Dropdown.Toggle
                      variant="dark"
                      id="dropdown-basic"
                      size="sm"
                    >
                      <span className="flag-icon current-language">
                        <img
                          alt={`language.${currentLanguage}`}
                          src={languageFlagCountry[currentLanguage]}
                        />
                      </span>
                      <Trans>language.{currentLanguage}</Trans>
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark" className="position-absolute">
                      {avaliableLanguages.map(
                        (lang) =>
                          lang !== currentLanguage && (
                            <Dropdown.Item
                              eventKey={lang}
                              key={lang}
                              className="nav-item p-0"
                              as="div"
                            >
                              <Link
                                className="nav-link p-0 text-white px-3 py-1"
                                to={originalPath}
                                language={lang}
                                style={{ '--bs-text-opacity': 0.8 }}
                              >
                                <span className="flag-icon">
                                  <img
                                    alt={`language.${lang}`}
                                    src={languageFlagCountry[lang]}
                                  />
                                </span>
                                <Trans>language.{lang}</Trans>
                              </Link>
                            </Dropdown.Item>
                          )
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default Header
