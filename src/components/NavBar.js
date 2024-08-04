import React from 'react';

const NavBar = ({ toggleDarkMode }) => {
  return (
    <nav>
      <h1>Mi Portafolio</h1>
      <button onClick={toggleDarkMode}>Toggle Theme</button>
    </nav>
  );
};

export default NavBar;