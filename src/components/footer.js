import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-light py-5">
        <div className="container">
          <div className="small text-center text-muted">
            Copyright &copy; 2020-{new Date().getFullYear()} - Théo Camboulive
          </div>
        </div>
      </footer>
    );
  }
}
