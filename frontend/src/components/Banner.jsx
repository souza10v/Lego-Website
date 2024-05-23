// src/components/Banner.js
import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  height: 1080px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BannerText = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Banner = () => {
  return (
    <BannerContainer id="banner">
      <BannerText>Welcome to the Play Matters Interactive Lookbook</BannerText>
    </BannerContainer>
  );
};

export default Banner;
