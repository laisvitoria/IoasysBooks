import React from 'react';

import {
    Button
} from './styles';

export default function ButtonSubmit({onClick, ...rest}){

    return(
        <Button onClick={onClick} {...rest}>
            Entrar
        </Button>
    )
}