import { navigate } from "gatsby";

export default class Scroller {
  static handleAnchorScroll(e) {
    e.preventDefault();
    let element = e.target;
    let id = element.getAttribute("href");

    if (id.lastIndexOf("/") >= 0) {
      const destinationPath = id.substring(0, id.lastIndexOf("/") + 1);
      if (destinationPath !== window.location.pathname) {
        navigate(id);
        return;
      } else {
        id = id.substring(id.lastIndexOf("/") + 1);
      }
    }

    const document =
      element.ownerDocument.scrollingElement ||
      element.ownerDocument.documentElement;
    const scrollNode = document.querySelector(id);

    if (!!scrollNode) {
      const top = scrollNode.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset || document.scrollTop;
      const fixedHeight = 72;
      const scrollTo = top + scrollTop - fixedHeight;
      if (document.scrollTo) {
        document.scrollTo({
          top: scrollTo,
          left: 0,
          behavior: "smooth",
        });
      } else {
        document.scrollTop = scrollTo;
      }
    }
  }
}
