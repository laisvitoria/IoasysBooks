import React, { createContext, useState } from "react";
import api from '../services/api';

const BooksContext = createContext();


function BooksProvider({children}){
    const [loading, setLoading] = useState(false);
    const [booksList, setBooksList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(0);

    async function listBooks(token, page){
        setLoading(true);

        await api.get('/books', {
            headers: {
              'Authorization': `Bearer ${token}` 
            },
            params: {
                'page': page,
                'amount': 12
            }
        })
        .then( function (response) {
            console.log(response.data.data)
            setBooksList(response.data.data)
            setTotalPages(response.data.totalPages)
            setPage(response.data.page)
        })
        .catch (error => {
          console.log(error.response)
        })
        .finally(setLoading(false));
    }

    async function bookDetails(token, id){
        await api.get(`/books/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        })
        .then( function (response) {
            console.log(response)
        })
        .catch (error => {
          console.log(error.response)
        })
        .finally(setLoading(false));
    }

    return(
        <BooksContext.Provider
            value={{
                listBooks, loading,
                bookDetails, booksList,
                page, totalPages
            }}
        >
            {children}
        </BooksContext.Provider>
    )
}

export {BooksContext, BooksProvider}