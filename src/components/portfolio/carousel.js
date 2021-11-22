import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Carousel } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import './carousel.scss'

const PortfolioCarousel = ({ projects, current }) => {
  const carouselItems = projects.map((project, index) => (
    <Carousel.Item key={index}>
      <GatsbyImage image={getImage(project.image)} alt={`Project ${index}`} />
      <div className="bottom-bar">
        <div className="name">{project.name}</div>
        <div className="category w-100 text-right">
          <Badge>{project.category}</Badge>
        </div>
      </div>
    </Carousel.Item>
  ))

  return (
    <Carousel
      interval={null}
      indicators={false}
      defaultActiveIndex={current}
      slide={false}
    >
      {carouselItems}
    </Carousel>
  )
}

PortfolioCarousel.propTypes = {
  projects: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
}

export default PortfolioCarousel
