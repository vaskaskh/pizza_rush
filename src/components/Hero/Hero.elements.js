import styled from 'styled-components/macro';



export const HeroContainer = styled.div`
    background-image: url('https://images6.alphacoders.com/912/thumb-1920-912620.jpg');
    height: 110vh;
    background-position: center;
    background-size: cover;
`

export const HeroContent = styled.div`
    height: calc(100vh- 80px);
    max-height: 100%;
    width: 100%;
    padding: 0rem calc((100vw-1300px)/2);

`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media (max-width: 650px){
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 2px 5px #e9ba23;
    letter-spacing: 3px;
`
export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`
export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background:#e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`