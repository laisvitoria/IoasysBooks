import Styles from 'styled-components';

import background from '../../assets/BackgroundImage.png';

export const ContainerLogin = Styles.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Content = Styles.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ContainerTitle = Styles.div`
    display: flex;
    margin-bottom: 3rem;
`;

export const LogoIoasys = Styles.img`
    margin-right: 1rem;
`;

export const Title = Styles.div`
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    color: #FFFFFF;
`;