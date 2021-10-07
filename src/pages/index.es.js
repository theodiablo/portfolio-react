import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <>
          <div className="masthead">
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
                    ¡El desarrollo informático puede ser verde también!
                  </h1>
                  <hr className="divider my-4" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 font-weight-light mb-5">
                    Podemos reconstruir un mundo mejor, con las herramientas de
                    hoy. No hace falta volver a vivir cómo hace 100 años para
                    volver a ser sostenibles, podemos crear nuevas formas de
                    vivir!
                  </p>
                  <a
                    className="btn btn-primary btn-xl js-scroll-trigger"
                    href="#about"
                  >
                    Descubrir más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </main>
  );
};

export default IndexPage;
