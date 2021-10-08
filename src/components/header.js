import React from "react";
import Scrollspy from "react-scrollspy";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import flagGb from "../images/flag-gb.svg";
import flagEs from "../images/flag-es.svg";
import flagFr from "../images/flag-fr.svg";

i18next.use(LanguageDetector);

const languageFlagCountry = {
  en: flagGb,
  es: flagEs,
  fr: flagFr,
};

const Header = () => {
  const {
    languages: avaliableLanguages,
    language: currentLanguage,
    originalPath,
  } = useI18next();

  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
        expand="lg"
        collapseOnSelect={true}
      >
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <Trans>Théo Camboulive Solutions</Trans>
          </a>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="navbar-nav ms-auto my-2 my-lg-0">
              <Scrollspy
                className="navbar-nav"
                items={["about", "services", "portfolio", "contact"]}
                currentClassName="active"
                rootEl={"#mainNav"}
                offset={-75}
              >
                <li className="nav-item">
                  <Nav.Link className={"js-scroll-trigger"} href="#about">
                    About
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className={"js-scroll-trigger"} href="#services">
                    Services
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className={"js-scroll-trigger"} href="#portfolio">
                    Portfolio
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className={"js-scroll-trigger"} href="#contact">
                    Contact
                  </Nav.Link>
                </li>

                <li className="nav-item dropdown language-selector">
                  <Dropdown>
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
                    <Dropdown.Menu variant="dark">
                      {avaliableLanguages.map(
                        (lang) =>
                          lang !== currentLanguage && (
                            <Dropdown.Item
                              eventKey={lang}
                              key={lang}
                              className="nav-item"
                            >
                              <Link
                                className="nav-link p-0"
                                to={originalPath}
                                language={lang}
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
  );
};

export default Header;
