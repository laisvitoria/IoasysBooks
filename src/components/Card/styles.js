import Styles from 'styled-components';

export const CardContainer = Styles.div`
    height: 9rem;
    width: 16rem;
    padding: 1rem;
    margin: 0.5rem;
    background: #FFFFFF;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    :hover{
        box-shadow: 0px 16px 80px 0px #54105F52;
    }
`;

export const BookImage = Styles.img`
    width: 30%;
    margin-right: 1rem;
`;

export const ContentDetails = Styles.div`
    display: flex;
    flex-direction: column;
    align-items: space-start;
    justify-content: space-between;
    width: 70%;
    min-height: 88%;
    margin: auto 0;
`;

export const ContentBookName = Styles.div`
`;

export const BookName = Styles.h3`
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
`;

export const AuthorName = Styles.h4`
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #AB2680;
`;

export const BookDetails = Styles.div`

`;

export const Detail = Styles.p`
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #999999;
`;