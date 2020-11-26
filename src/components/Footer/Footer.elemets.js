import styled from 'styled-components/macro';
import {Link as LinkS} from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #0d0909;
`


export const FooterWrap = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;

`

export const SocialMedia= styled.section`
    max-width: 1300px;
    width: 100%;
`

export const socialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    
`

export const SocialLogo = styled(LinkS)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

`
export const SocialIconLink = styled.a`
    font-size: 24px;
    color: #fff;
` 