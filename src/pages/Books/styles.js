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

export const ContentBooks = Styles.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;