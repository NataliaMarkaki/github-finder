import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (title = 'Github Finder', icon = 'fab fa-github') => (
  <nav className='navbar bg-primary'>
    <h1>
      <i className={icon} /> {title}
    </h1>
  </nav>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
