import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
        <NavLink to='/' activeClassName="selectedLink">
        Startseite
        </NavLink>
        <NavLink to='/about' activeClassName="selectedLink">
            Über
          </NavLink>
          <NavLink to='/map' activeClassName="selectedLink">
            Karte
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;