import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link, Element } from 'react-scroll';

import adults01 from '../assets/images/homepage/adults01.png';
import art01 from '../assets/images/homepage/art01.png';
import gifting01 from '../assets/images/homepage/gifting01.png';
import gifting02 from '../assets/images/homepage/gifting02.png';
import pop01 from '../assets/images/homepage/pop01.png';
import realworld01 from '../assets/images/homepage/realworld01.png';
import realworld02 from '../assets/images/homepage/realworld02.png';
import space01 from '../assets/images/homepage/space01.png';
import toddlers01 from '../assets/images/homepage/toddlers01.png';
import toddlers02 from '../assets/images/homepage/toddlers02.png';
import travel01 from '../assets/images/homepage/travel01.png';
import travel02 from '../assets/images/homepage/travel02.png';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  border-top: ${(props) => (props.hasBorderTop ? '2px solid #000' : 'none')};
  border-bottom: ${(props) => (props.hasBorderBottom ? '2px solid #000' : 'none')};
  margin: 0 auto;
  margin-bottom: ${(props) => (props.hasGap ? '100px' : '0')};
  box-sizing: border-box;
  padding: 0 40px;
`;

const SectionBlockText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.alignRight ? 'flex-end' : 'flex-start')};
  width: 938px;
  height: 528px;
  text-align: ${(props) => (props.alignRight ? 'right' : 'left')};
  margin: 0 20px;
`;

const SectionBlockImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 938px;
  height: 528px;
  text-align: left;
`;

const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
  padding-left: 550px;
  display: flex;
`;

const SectionText = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: left;
`;

const SectionSubtitleRight = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  text-align: left;
`;

const SectionSubtitleLeft = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  text-align: left;
`;

const SectionDescriptionRight = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: right;
  max-width: 80%;
`;

const SectionDescriptionLeft = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: left;
  max-width: 80%;
`;

const ViewDetailsButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #000;
  background: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 20px;

  &:hover {
    background: #f0f0f0;
  }

  &::after {
    content: '→';
    margin-left: 10px;
  }
`;

const PinkLineSection = styled.div`
  display: flex;
  border-top: 2px solid #ffc0cb;
  border-bottom: 2px solid #ffc0cb;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 40px;
`;

const Sections = React.forwardRef((props, ref) => {
  return (
    <SectionContainer ref={ref}>

      {/* Gifting Section*/}
      <Element name="GIFTING">
        <SectionTitle>GIFTING</SectionTitle>
        <Section hasGap hasBorderTop>
          <SectionBlockText>
            <SectionSubtitleLeft>Toys perfect for birthday gift-giving season in Spring</SectionSubtitleLeft>
            <SectionDescriptionLeft>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionLeft>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
          <SectionBlockImage>
            <SectionImage src={gifting01} alt="Gift 01" />
          </SectionBlockImage>
        </Section>
        <Section hasGap hasBorderBottom>
          <SectionBlockImage>
            <SectionImage src={gifting02} alt="Gift 02" />
          </SectionBlockImage>
          <SectionBlockText alignRight>
            <SectionSubtitleRight>Gifts for Mom</SectionSubtitleRight>
            <SectionDescriptionRight>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionRight>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
        </Section>
      </Element>

      {/* Travel Section */}
      <Element name="TRAVEL">
        <SectionTitle>TRAVEL</SectionTitle>
        <Section hasGap hasBorderTop>
          <SectionBlockText>
            <SectionSubtitleLeft>Travel the world no matter where you are. No Passport needed.</SectionSubtitleLeft>
            <SectionDescriptionLeft>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionLeft>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
          <SectionBlockImage>
            <SectionImage src={travel01} alt="Travel 01" />
          </SectionBlockImage>
        </Section>
        <Section hasGap hasBorderBottom>
          <SectionBlockImage>
            <SectionImage src={travel02} alt="Travel 02" />
          </SectionBlockImage>
          <SectionBlockText alignRight>
            <SectionSubtitleRight>Fun accessories to take with you on your travels or keep kids entertained</SectionSubtitleRight>
            <SectionDescriptionRight>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionRight>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
        </Section>
      </Element>

      {/* Adults Section */}
      <Element name="ADULTS">
        <SectionTitle>ADULTS WELCOME</SectionTitle>
        <Section hasGap hasBorderTop hasBorderBottom>
          <SectionBlockText>
            <SectionSubtitleLeft>For the Kids at Heart who love to unplug, unbox and unwind</SectionSubtitleLeft>
            <SectionDescriptionLeft>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionLeft>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
          <SectionBlockImage>
            <SectionImage src={adults01} alt="Adults Welcome" />
          </SectionBlockImage>
        </Section>
      </Element>

      {/* Art & Home Decor */}
      <Element name="ART">
        <SectionTitle>ART & HOME DÉCOR</SectionTitle>
        <Section hasGap hasBorderTop hasBorderBottom>
          <PinkLineSection>
            <SectionBlockImage>
              <SectionImage src={art01} alt="Art & Home Décor" />
            </SectionBlockImage>
            <SectionBlockText alignRight>
              <SectionSubtitleRight>Playful ideas for refreshing your space while tapping into your more creative side</SectionSubtitleRight>
              <SectionDescriptionRight>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
              </SectionDescriptionRight>
              <ViewDetailsButton>View details</ViewDetailsButton>
            </SectionBlockText>
          </PinkLineSection>
        </Section>
      </Element>

      {/* Space Section */}
      <Element name="SPACE">
        <SectionTitle>SPACE</SectionTitle>
        <Section hasGap hasBorderTop hasBorderBottom>
          <SectionBlockText>
            <SectionSubtitleLeft>Capture the wonders of space and exploration</SectionSubtitleLeft>
            <SectionDescriptionLeft>
              In the last 30 years, nothing has taken us deeper into space – or better shaped the way we see
              In the last 30 years, nothing has taken us deeper into space – or better shaped the way we see the universe – than the Hubble Space Telescope.
            </SectionDescriptionLeft>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
          <SectionBlockImage>
            <SectionImage src={space01} alt="Space" />
          </SectionBlockImage>
        </Section>
      </Element>

      {/* Pop Culture Section */}
      <Element name="POP">
        <SectionTitle>POP CULTURE</SectionTitle>
        <Section hasGap hasBorderTop hasBorderBottom>
          <PinkLineSection>
            <SectionBlockImage>
              <SectionImage src={pop01} alt="Pop Culture" />
            </SectionBlockImage>
            <SectionBlockText alignRight>
              <SectionSubtitleRight>Recreate scenes from your favorite movies and TV series</SectionSubtitleRight>
              <SectionDescriptionRight>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
              </SectionDescriptionRight>
              <ViewDetailsButton>View details</ViewDetailsButton>
            </SectionBlockText>
          </PinkLineSection>
        </Section>
        </Element>

      {/* Toddlers Section */}
      <Element name="TODDLERS">
        <SectionTitle>TODDLERS</SectionTitle>
        <Section hasGap hasBorderTop>
          <SectionBlockText>
            <SectionSubtitleLeft>Waterproof toys for toddlers and beyond</SectionSubtitleLeft>
            <SectionDescriptionLeft>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionLeft>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
          <SectionBlockImage>
            <SectionImage src={toddlers01} alt="Toddlers01" />
          </SectionBlockImage>
        </Section>
        <Section hasGap hasBorderBottom>
          <SectionBlockImage>
            <SectionImage src={toddlers02} alt="Toddlers02" />
          </SectionBlockImage>
          <SectionBlockText alignRight>
            <SectionSubtitleRight>xxxxx TBD</SectionSubtitleRight>
            <SectionDescriptionRight>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionRight>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
        </Section>
      </Element>

      {/* Real World Section */}
      <Element name="REAL">
        <SectionTitle>REAL WORLD ROLE PLAYING</SectionTitle>
        <Section hasGap hasBorderTop>
          <SectionBlockText>
            <SectionSubtitleLeft>Celebrating the everyday heroes</SectionSubtitleLeft>
            <SectionDescriptionLeft>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionLeft>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
          <SectionBlockImage>
            <SectionImage src={realworld01} alt="Real World 01" />
          </SectionBlockImage>
        </Section>
        <Section hasBorderBottom>
          <SectionBlockImage>
            <SectionImage src={realworld02} alt="Real World 02" />
          </SectionBlockImage>
          <SectionBlockText alignRight>
            <SectionSubtitleRight>Recreate scenes from your favorite movies and TV series</SectionSubtitleRight>
            <SectionDescriptionRight>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.
            </SectionDescriptionRight>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </SectionBlockText>
        </Section>
        </Element>
    </SectionContainer>
  );
});

export default Sections;
