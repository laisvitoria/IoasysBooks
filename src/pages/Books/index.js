import React, { useEffect, useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import imageBackground from '../../assets/LogoBlack.png';

import Card from '../../components/Card';

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
    Button,
    PageBottom,
    PageCounter
} from './styles'

import { AuthContext } from '../../hooks/AuthContext';
import { BooksContext } from '../../hooks/BooksContext';

export default function Books(){
    const { listBooks, bookDetails, booksList, page, totalPages} = useContext(BooksContext);
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
                    <Button>
                        <FiLogOut size={15} />
                    </Button>
                </WelcomeContent>
            </HeaderContainer>
            <ContentBooks>
                {booksList.map((book) => (
                    <Card
                        bookTitle={book.title}
                        imageUrl={book.imageUrl}
                        pageCount={book.pageCount}
                        published={book.published}
                        publisher={book.publisher}
                        authors={book.authors}
                    ></Card>
                ))}
            </ContentBooks>
            <PageBottom>
                <PageCounter>Página {page} de {Math.round(totalPages)}</PageCounter>
                <Button style={{marginRight: 0}}>
                    <MdKeyboardArrowLeft size={15}/>
                </Button>
                <Button>
                    <MdKeyboardArrowRight size={15}/>
                </Button>
            </PageBottom>
        </ContainerBooks>
    )
}