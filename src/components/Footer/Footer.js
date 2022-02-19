import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href="mailto:contact@desireemendes@icloud.com">desireemendes@icloud.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
     <SocialIcons href="https://github.com/desireemendes">
<AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://linkedin.com/in/desireemendes">
<AiFillLinkedin size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://instagram.com/desireethedev">
<AiFillInstagram size="3rem" />
     </SocialIcons>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
