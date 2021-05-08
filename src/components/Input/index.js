import React, { Children } from 'react';

import {
    ContainerInput,
    Label,
    ContentInput,
    Input
} from './styles';

export default function InputForm({label, type, children}){
    return(
        <ContainerInput>
            <ContentInput>
                <Label>{label}</Label>
                <Input type={type}/>
            </ContentInput>
            {children}
        </ContainerInput>
    )
}