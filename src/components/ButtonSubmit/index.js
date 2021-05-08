import React, {useContext} from 'react';

import {
    Button
} from './styles';

import {Context} from '../../hooks/AuthContext';

export default function ButtonSubmit(){

    const { handleLogin } = useContext(Context)

    return(
        <Button onClick={handleLogin}>
            Entrar
        </Button>
    )
}