import React from 'react';

import {
    CardContainer,
    AuthorName,
    BookImage,
    BookName,
    BookDetails,
    ContentDetails,
    Detail,
    ContentBookName
} from './styles';

import imageBook from '../../assets/book.png'

export default function Card({bookTitle, authors, imageUrl, pageCount, published, publisher, ...rest}){
    return(
        <CardContainer {...rest}>
            {imageUrl ?
                <BookImage src={imageUrl}/>
                :
                <BookImage src={imageBook}/>
            }
            <ContentDetails>
                <ContentBookName>
                    <BookName>{bookTitle}</BookName>
                    {authors.map(author =>(
                        <AuthorName>{author}</AuthorName>
                    ))}
                </ContentBookName>
                <BookDetails>
                    <Detail>{pageCount} páginas</Detail>
                    <Detail>Editora {publisher}</Detail>
                    <Detail>Publicado em {published}</Detail>
                </BookDetails>
            </ContentDetails>
        </CardContainer>
    )
}