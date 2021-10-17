import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";
import "./layout.scss";

import LanguageDetector from "i18next-browser-languagedetector";
const languageDetector = new LanguageDetector();
languageDetector.init();

const getScrollNode = (element) => {
  return (
    element.ownerDocument.scrollingElement ||
    element.ownerDocument.documentElement
  );
};

const isScrolled = (element) => {
  if (element) {
    const scrollNode = getScrollNode(element);
    return scrollNode.scrollTop > 0;
  }
  return false;
};

const Layout = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const siteContainer = React.createRef();

  useEffect(() => {
    function handleScroll() {
      const element = siteContainer.current;
      setScrolled(isScrolled(element));
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    // Especifica cómo sanear este efecto:
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  if (process.env.NODE_ENV === "development") {
    let className = "site-container";
    if (props.className) className += ` ${props.className}`;
    if (scrolled) className += " navbar-scrolled";
    return (
      <>
        <Seo title={props.title} />
        <div className={className} ref={siteContainer} id="page-top">
          <Header />
          <main>{props.children}</main>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Seo title="Work in progress" />
        <div ref={siteContainer} id="page-top">
          <main>
            <h1>Page under development!</h1>
          </main>
          <Footer />
        </div>
      </>
    );
  }
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};
