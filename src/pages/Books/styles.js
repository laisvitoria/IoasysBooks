import Styles from 'styled-components'

import background from '../../assets/BackgroundImage-2.png';

export const ContainerBooks = Styles.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const HeaderContainer = Styles.header`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;
`;

export const ContainerTitle = Styles.div`
    display: flex;
`;

export const LogoIoasys = Styles.img`
    margin-right: 1rem;
`;

export const Title = Styles.h2`
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    color: #333333;
`;

export const WelcomeContent = Styles.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const WelcomeMessage = Styles.p`
    display: flex;
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #333333;
`;

export const UserName = Styles.p`
    font-weight: bold;
    margin-left: 0.3rem;
`;

export const ButtonLogOut = Styles.button`
    border-radius: 100%;
    border: 1px solid rgb(51, 51, 51);
    padding: 0.5rem;
    background: transparent;
    outline: transparent;
    display: flex;
    margin: 0 0.5rem 0 1rem;
    cursor: pointer;
`; 

export const ContentBooks = Styles.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;