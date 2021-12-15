import logo from '../assets/stock-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <nav className="navbar-absolute">
        <div className="nav-container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="100px" />
          </a>
          <div className="nav-items-container">
            <ul className="list-inline ms-auto justify-content-evenly">
              <li className="me-5 d-none d-sm-inline">
                <a className="btn btn-transparent" aria-current="page" href="/">
                  Book a meeting
                </a>
              </li>
              <li className="me-5">
                <a>
                  <FontAwesomeIcon icon={faBars} className="bars" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
