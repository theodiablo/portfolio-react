import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

function SEO({ description, meta, title, location }) {
  const { languages, language, originalPath, defaultLanguage } = useI18next()

  const { site, shareImage } = useStaticQuery(
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
        shareImage: file(relativePath: { eq: "share-img.jpg" }) {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const shareImg = shareImage ? shareImage.childImageSharp.resize : null

  return (
    <Helmet
      htmlAttributes={{
        language,
      }}
      titleSet = title && title.trim().length > 0
      title={titleSet ? title : site.siteMetadata.title}
      titleTemplate={titleSet ? `%s | ${site.siteMetadata.title}` : site.siteMetadata.title}
      link={languages
        .filter((lang) => lang !== language)
        .map((lang) => {
          return {
            rel: 'alternate',
            hrefLang: lang,
            href: `${site.siteMetadata.siteUrl}${
              lang === defaultLanguage ? '' : '/' + lang
            }${originalPath}`,
          }
        })}
      meta={[
        {
          name: 'title',
          content: title,
        },
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
          property: `og:url`,
          content: site.siteMetadata.siteUrl + location.pathname,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.siteUrl + shareImg.src,
        },
        {
          property: 'og:image:width',
          content: shareImg.width,
        },
        {
          property: 'og:image:height',
          content: shareImg.height,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:url`,
          content: site.siteMetadata.siteUrl + location.pathname,
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
        {
          name: `twitter:image`,
          content: site.siteMetadata.siteUrl + shareImg.src,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}



export default SEO
