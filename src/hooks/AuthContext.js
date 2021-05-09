import React, { createContext, useState } from "react";
import api from '../services/api';
import history from '../history'
const Context = createContext();


function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [erroLogin, setErroLogin] = useState('');
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");

    function handleLogin(values){

        api.post('/auth/sign-in', values)
        .then( function (response) {
            setAuthenticated(true)
            setUser(response.data)
            setToken(response.headers.authorization)
            history.push("/home")
        })
        .catch (error => {
          if(error.response?.status === 401 || error.response?.status === 500){
            setErroLogin(error.response.data.errors.message);
          }else{
            setErroLogin("Erro ao efetuar o login. Tente novamente!");
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
                user, setUser, token
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider}