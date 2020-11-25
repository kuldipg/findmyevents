import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto flex-row">
            <li className="nav-item mr-4">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/event/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
