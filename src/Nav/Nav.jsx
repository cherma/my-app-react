import React from 'react';
import NavItem from './NavItem';
import './Nav.style.css';

const Nav = () => {
  return (
    <div className="nav">
      <NavItem data={'home'} />
      <NavItem data={'contact'} />
      <NavItem data={'call-us'} />
    </div>
  )
}

export default Nav;