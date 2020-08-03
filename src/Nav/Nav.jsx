import React from 'react';
import NavItem from './NavItem';
import './Nav.style.css';

const Nav = () => {
  const navItem = ['home', 'contact', 'call-us']
  return (
    <div className="nav">
      {
        navItem.map((item) => {
          return (
            <NavItem data={item} />
          )
        })
      }
    </div>
  )
}

export default Nav;