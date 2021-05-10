import React, { createContext, useState } from "react";
import api from '../services/api';

const BooksContext = createContext();


function BooksProvider({children}){
    const [loading, setLoading] = useState(false);

    async function listBooks(token, page){
        setLoading(true);

        await api.get('/books', {
            headers: {
              'Authorization': `Bearer ${token}` 
            },
            params: {
                'page': page
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
                bookDetails
            }}
        >
            {children}
        </BooksContext.Provider>
    )
}

export {BooksContext, BooksProvider}