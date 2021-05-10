import React, { useContext } from 'react';
import * as yup from 'yup';
import {ErrorMessage, Formik} from 'formik';

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

import { AuthContext } from '../../hooks/AuthContext';

export default function Login(){
    const validations = yup.object().shape({
        email: yup.string().email('Informe um e-mail!').required('Este campo é obrigatório!'),
        password: yup.string().required('Este campo é obrigatório!')
    })

    const { handleLogin } = useContext(AuthContext)

    return(
        <Formik initialValues={{ email: "", password: "" }}
            onSubmit={(values) => handleLogin(values)}
            validationSchema={validations}>
        {({ handleBlur, handleChange, handleSubmit, values}) =>(
            <ContainerLogin>
                <Content>
                    <ContainerTitle>
                        <LogoIoasys src={logo}/>
                        <Title>Books</Title>
                    </ContainerTitle>
                    <InputForm
                        label="E-mail"
                        type="email"
                        name="email"
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                    />
                    <InputForm
                        label="Senha"
                        type="password"
                        name="password"
                        onChange={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                    >
                        <ButtonSubmit type="button" onClick={handleSubmit}/>
                    </InputForm>
                </Content>
            </ContainerLogin>
        )}
        </Formik>
    )
}