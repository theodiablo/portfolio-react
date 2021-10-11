/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import shareImg from "../images/share-img.jpg";

function SEO({ description, meta, title }) {
  const { languages, language, originalPath, defaultLanguage } = useI18next();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        language,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={languages
        .filter((lang) => lang !== language)
        .map((lang) => {
          return {
            rel: "alternate",
            hreflang: lang,
            href: `${site.siteMetadata.siteUrl}${
              lang === defaultLanguage ? "" : "/" + lang
            }${originalPath}`,
          };
        })}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: site.siteMetadata.siteUrl + shareImg,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
