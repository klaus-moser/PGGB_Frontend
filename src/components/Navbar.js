import {useNavigate, useLovation} from 'react-router-dom'
import {ReactComponent as ProfileIcon} from '../assets/svg/egghead-002.svg'
import {ReactComponent as GallerieIcon} from '../assets/svg/art-gallery-15.svg'


function Navbar() {
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem'>
            <ProfileIcon fill='#2c2c2c' width='36px' height='36px'/>
            <p>Profile</p>
          </li>
          <li className='navbarListItem'>
            <GallerieIcon fill='#2c2c2c' width='36px' height='36px'/>
            <p>Gallerie</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar