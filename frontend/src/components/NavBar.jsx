import React, { useState } from 'react';
import styled from 'styled-components';
import legoLogo from '../assets/images/logo.png';
import menu from '../assets/images/menu.png';
import contactIcon from '../assets/images/contact.png';
import requestIcon from '../assets/images/request.png';
import searchIcon from '../assets/images/search.png';

import { Link } from 'react-scroll';
import OverlayMenu from './OverlayMenu';

const NavBarContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; 
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
`;

const NavGroup3 = styled.div`
  display: flex;
  align-items: center;
  padding-right: 60px;
`;

const NavItem = styled.div`
  margin: 0 15px; 
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px; 
`;

const NavText = styled.span`
  font-size: 14px;
`;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavBarContainer>
      <NavGroup>
        <NavItem>
          <NavIcon src={legoLogo} alt="LEGO" />
        </NavItem>
        <NavItem onClick={toggleMenu}>
          <NavIcon src={menu} alt="Categories" />
          <NavText>Categories</NavText>
        </NavItem>
      </NavGroup>
      <NavGroup>
        <Link to="GIFTING" smooth={true} duration={500}>
          <NavItem>
            <NavText>Gifting</NavText>
          </NavItem>
        </Link>
        <Link to="TRAVEL" smooth={true} duration={500}>
          <NavItem>
            <NavText>Travel</NavText>
          </NavItem>
        </Link>
        <Link to="ADULTS" smooth={true} duration={500}>
          <NavItem>
            <NavText>Adults Welcome</NavText>
          </NavItem>
        </Link>
        <Link to="ART" smooth={true} duration={500}>
          <NavItem>
            <NavText>Art & Home Décor</NavText>
          </NavItem>
        </Link>
        <Link to="SPACE" smooth={true} duration={500}>
          <NavItem>
            <NavText>Space</NavText>
          </NavItem>
        </Link>
        <Link to="POP" smooth={true} duration={500}>
          <NavItem>
            <NavText>Pop Culture</NavText>
          </NavItem>
        </Link>
        <Link to="TODDLERS" smooth={true} duration={500}>
          <NavItem>
            <NavText>Toddlers</NavText>
          </NavItem>
        </Link>
        <Link to="REAL" smooth={true} duration={500}>
          <NavItem>
            <NavText>Real World Role Playing</NavText>
          </NavItem>
        </Link>
      </NavGroup>
      <NavGroup3>
        <NavItem>
          <NavIcon src={contactIcon} alt="Contact us" />
          <NavText>Contact us</NavText>
        </NavItem>
        <NavItem>
          <NavIcon src={requestIcon} alt="Request" />
          <NavText>Request</NavText>
        </NavItem>
        <NavItem>
          <NavIcon src={searchIcon} alt="Search" />
          <NavText>Search</NavText>
        </NavItem>
      </NavGroup3>
      {isMenuOpen && <OverlayMenu toggleMenu={toggleMenu} />}
    </NavBarContainer>
  );
};

export default NavBar;
