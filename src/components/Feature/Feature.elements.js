import styled from 'styled-components/macro';


export const FeatureContainer = styled.div`
    background-image: url('https://a-static.besthdwallpaper.com/pizza-wallpaper-3554x1999-3207_53.jpg');
    background-position: center;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 1900;
    text-align: center;
    padding: 0 1rem;


    h1{
        font-size: clamp(3rem, 5vw, 5rem);

    }
p{
    margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
        color: black;
    }

`

export const FeatureButton  = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;


    &:hover{
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`

export const FeatureHeader = styled.div`
    margin-bottom: 50px;
    color: #000;
`