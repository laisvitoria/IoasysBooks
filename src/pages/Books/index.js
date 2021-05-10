import React, { useEffect, useContext } from 'react';

import imageBackground from '../../assets/LogoBlack.png'

import {
    HeaderContainer,
    ContainerBooks,
    ContainerTitle,
    ContentBooks,
    LogoIoasys,
    Title
} from './styles'

import { AuthContext } from '../../hooks/AuthContext';
import { BooksContext } from '../../hooks/BooksContext';

export default function Books(){
    const { listBooks, bookDetails } = useContext(BooksContext);
    const { token } = useContext(AuthContext)

    useEffect(() => {
        listBooks(token, 1);
    },[token])

    return(
        <ContainerBooks>
            <HeaderContainer>
                <ContainerTitle>
                    <LogoIoasys src={imageBackground} />
                    <Title>Books</Title>
                </ContainerTitle>
            </HeaderContainer>
            <ContentBooks>Books</ContentBooks>
        </ContainerBooks>
    )
}