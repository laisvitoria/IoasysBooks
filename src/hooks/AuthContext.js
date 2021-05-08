import React, { createContext, useState, useEffect } from "react";
import api from '../services/api';
const Context = createContext();


function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [erroLogin, setErroLogin] = useState('');
    const [name, setName] = useState('');

    function handleLogin(values){
        let loginSenha = JSON.stringify(values);
        let emailPassword = JSON.parse(loginSenha);

        api.post('/login', emailPassword)
        .then( function (response) {
            setAuthenticated(true)
            setName(response.data.user.name)
            window.location.href = "/";
        })
        .catch (error => {
          if(error.response.status === 404 || error.response.status === 409){
            setErroLogin(error.response.data.error)
          }else{
            console.log(error);
            setErroLogin("Erro ao efetuar o login. Tente novamente!")
          }
        })
        .finally(setLoading(false));
      }
    return(
        <Context.Provider
            value={{
                authenticated, setAuthenticated,
                loading, setLoading,
                erroLogin, setErroLogin, handleLogin,
                name, setName,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider}