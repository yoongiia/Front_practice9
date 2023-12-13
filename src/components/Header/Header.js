import React from 'react';
import './header.css';
import Logo from './Logo/Logo';
import DateTime from './DateTime/DateTime';


const Header = (props) => {
  return (
    <header className="header">
      <Logo/>
      <p>{props.title}</p>
      <DateTime/>
    </header>
  );
};

export default Header;