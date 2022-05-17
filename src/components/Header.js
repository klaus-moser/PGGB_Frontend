import React from 'react'
import PropTypes from 'prop-types'


function Header({ text, bgColor, textColor }) {
  
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1>{text}</h1>
        <h2>Your MEME dump!</h2>
        <p>Welcome to your Image Gallery</p>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Pan-Galactic-Gargle-Blaster',
  bgColor: '#000000',
  textColor: '#00FF00',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header