import React from 'react';

import {
    ContainerInput,
    Label,
    ContentInput,
    Input
} from './styles';

export default function InputForm({label, type, children, ...rest}){
    return(
        <ContainerInput>
            <ContentInput>
                <Label>{label}</Label>
                <Input type={type} {...rest}/>
            </ContentInput>
            {children}
        </ContainerInput>
    )
}