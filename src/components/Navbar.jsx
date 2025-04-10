import { Link } from 'react-router-dom';
import '../styles/theme.css';

const Navbar = () => {
  return (
    <nav className="navbar airport-theme">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i className="fas fa-plane"></i> Airport System
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/passenger" className="nav-link">Passenger</Link>
          </li>
          <li className="nav-item">
            <Link to="/staff" className="nav-link">Staff</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;