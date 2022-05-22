import React from 'react'
import PropTypes from 'prop-types'


function Header({ text }) {
  
  return (
    <header>
      <div className='row'>
        <div className='col-8'>
          <h1>{text}</h1>
          <h5>May the MEME be with you!</h5>
        </div>
        <div className='col-4'>
          <button type="button" class="btn btn-primary">Login</button>
          <button type="button" class="btn btn-secondary">Register</button>
        </div>
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