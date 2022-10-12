import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm an an Industrial Engenieer with +10 years of experience in the software industry 
      </SectionText>
      <Button onClick={()=> window.location = 'https://www.linkedin.com/in/francisco-vergara-cruz-48425743/'}>Let's connect</Button>
    </LeftSection>
  </Section>
);

export default Hero;