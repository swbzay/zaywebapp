import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href="tel:678-280-6571">678-280-6571</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href="mailto:contact@xavionmcdaniels.com">Contact@XavionMcDaniels.com</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan> “You get what you give. What you put into things is what you get out of them.” </Slogan>
            </CompanyContainer>
            <SocialContainer>
            <SocialIcons href="https://github.com">
                <AiFillGithub size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://linkedin.com">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://instagram.com">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
                <SocialIcons href="https://YouTube.com">
                    <AiFillYoutube size="3rem" />
                </SocialIcons>

            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
