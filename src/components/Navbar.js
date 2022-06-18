import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../assets/svg/egghead-002.svg";
import { ReactComponent as GallerieIcon } from "../assets/svg/art-gallery-15.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <ProfileIcon
              fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <GallerieIcon
              fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Gallerie
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
