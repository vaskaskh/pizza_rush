import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, socialMediaWrap } from './Footer.elemets'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <socialMediaWrap>
                            <SocialIcons>

                                <SocialIconLink href='https://github.com/vaskaskh' target='_blank' aria-label='Github'>
                                    <FaGithub/>
                                </SocialIconLink>

                                <SocialIconLink href='https://www.instagram.com/vaska_skhirtladze/' target='_blank' aria-label='Github'>
                                    <FaInstagram/>
                                </SocialIconLink>

                            </SocialIcons>
                        </socialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>   
        </>
    )
}

export default Footer
