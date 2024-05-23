import React from 'react';
import styled from 'styled-components';
import legoLogo from '../assets/images/logo.png';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

const MenuContainer = styled.div`
  background-color: white;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: red;
  cursor: pointer;
`;

const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MenuItem = styled.div`
  flex: 1 1 30%;
  font-size: 18px;
  cursor: pointer;
  background: #f0f0f0;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 150px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const NavIcon = styled.img`
  width: 50px;
`;

function OverlayMenu({ toggleMenu }) {
  return (
    <Overlay>
      <MenuContainer>
        <LogoContainer>
          <NavIcon src={legoLogo} alt="LEGO" />
          <CloseButton onClick={ toggleMenu }>X</CloseButton>
        </LogoContainer>
        <MenuItems>
          <MenuItem>Architecture</MenuItem>
          <MenuItem>City</MenuItem>
          <MenuItem>Creator</MenuItem>
          <MenuItem>Dots</MenuItem>
          <MenuItem>Duplo</MenuItem>
          <MenuItem>Friends</MenuItem>
          <MenuItem>Ideas</MenuItem>
          <MenuItem>Minifigures</MenuItem>
          <MenuItem>Technic</MenuItem>
        </MenuItems>
      </MenuContainer>
    </Overlay>
  );
}

export default OverlayMenu;
