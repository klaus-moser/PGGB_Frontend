import React from 'react'
import PropTypes from 'prop-types'


function Header({ text }) {
  
  return (
    <header>
      <div>
        <h1>{text}</h1>
        <h2>Your MEME dump!</h2>
        <p>May the meme be with you!</p>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Pan-Galactic-Gargle-Blaster',
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header