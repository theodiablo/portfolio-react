import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './scrollTop.scss'

const ScrollTop = () => {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <div id="scroll-top">
      <button
        type="button"
        className="btn btn-secondary btn-floating btn-lg"
        id="btn-back-to-top"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  )
}
export default ScrollTop
