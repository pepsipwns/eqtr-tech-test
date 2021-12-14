import logo from '../assets/stock-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="100px" />
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
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
      </nav>
    </>
  );
}

export default Navbar;
