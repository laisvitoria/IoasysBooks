import React, { useEffect, useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';

import imageBackground from '../../assets/LogoBlack.png';

import {
    HeaderContainer,
    ContainerBooks,
    ContainerTitle,
    ContentBooks,
    LogoIoasys,
    Title,
    WelcomeContent,
    WelcomeMessage,
    UserName,
    ButtonLogOut
} from './styles'

import { AuthContext } from '../../hooks/AuthContext';
import { BooksContext } from '../../hooks/BooksContext';

export default function Books(){
    const { listBooks, bookDetails } = useContext(BooksContext);
    const { token, user } = useContext(AuthContext)

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
                <WelcomeContent>
                    <WelcomeMessage>
                        {user?.gender === 'F' ? 'Bem-vinda,' : 'Bem-vindo,'}
                        <UserName>{user?.name}!</UserName>
                    </WelcomeMessage>
                    <ButtonLogOut>
                        <FiLogOut size={15} />
                    </ButtonLogOut>
                </WelcomeContent>
            </HeaderContainer>
            <ContentBooks>Books</ContentBooks>
        </ContainerBooks>
    )
}