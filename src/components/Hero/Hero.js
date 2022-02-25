import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
  Hello there, <br />
  I'm Desiree Mendes
     </SectionTitle>
     <SectionText>
       <strong>a full-stack web developer</strong>
     </SectionText>
     <Button onClick={() => window.location = "https://resume.creddle.io/resume/5hkgkm2gbtc"}>My Resume</Button>
   </LeftSection>
 </Section>
);

export default Hero;