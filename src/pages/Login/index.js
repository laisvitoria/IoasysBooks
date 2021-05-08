import React from 'react';

import {
    ContainerLogin,
    Content,
    ContainerTitle,
    LogoIoasys,
    Title
} from './styles';

import logo from '../../assets/LogoWhite.png'
import InputForm from '../../components/Input';
import ButtonSubmit from '../../components/ButtonSubmit';

export default function Login(){
    return(
        <ContainerLogin>
            <Content>
                <ContainerTitle>
                    <LogoIoasys src={logo}/>
                    <Title>Books</Title>
                </ContainerTitle>
                <InputForm label="E-mail" type="email"/>
                <InputForm label="Senha" type="password">
                    <ButtonSubmit/>
                </InputForm>
            </Content>
        </ContainerLogin>
    )
}