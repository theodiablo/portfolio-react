import React from "react";
import Scrollspy from "react-scrollspy";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import Scroller from "../components/scroller";

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

  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);

  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
        expand="lg"
        collapseOnSelect={true}
      >
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand js-scroll-trigger" to="/">
            <Trans>Théo Camboulive Solutions</Trans>
          </Link>
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
                  <Link
                    to="/#about"
                    className="js-scroll-trigger nav-link"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="js-scroll-trigger nav-link"
                    to="/#services"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    className="js-scroll-trigger nav-link"
                    href="#contact"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    <Trans>Contact</Trans>
                  </Nav.Link>
                </li>

                <li className="nav-item dropdown language-selector">
                  <Dropdown className="">
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
                              className="nav-item"
                            >
                              <Link
                                className="nav-link p-0 text-white"
                                to={originalPath}
                                language={lang}
                                style={{ "--bs-text-opacity": 0.8 }}
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
