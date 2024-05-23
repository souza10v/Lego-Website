// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #fff;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      LEGO, the LEGO logo and the Brick and Knob configurations are trademarks of the LEGO Group. ©2022 The LEGO Group.
    </FooterContainer>
  );
};

export default Footer;
