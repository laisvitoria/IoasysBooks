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

export default function Books(){
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