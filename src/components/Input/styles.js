import Styles from 'styled-components';

export const ContainerInput = Styles.div`
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    width: 23rem;
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Label = Styles.label`
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
    opacity: 0.5;
`;

export const ContentInput = Styles.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`;

export const Input = Styles.input`
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    outline: transparent;
    background: transparent;
    border: 0;
`;