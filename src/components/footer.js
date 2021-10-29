import React from "react";
import ContactForm from "./contactForm";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-light pb-5">
        <ContactForm />
        <div className="container">
          <div className="small text-center text-muted">
            Copyright &copy; 2020-{new Date().getFullYear()} - Théo Camboulive
          </div>
        </div>
      </footer>
    );
  }
}
