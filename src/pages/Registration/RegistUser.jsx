import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../services/api';

const RegPageContainer = styled.div`
    min-height: 80vh;
    color: white;
    padding: 40px;
`;

const RegForm = styled.form`
    background-color: #1e1e1e;
    padding: 30px;
    border-radius: 8px;
    max-width: 400px;
    margin: 50px auto 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const FormTitle = styled.h2`
    text-align: center;
    color: #00ff00;
    margin-bottom: 25px;
`;

const InputGroup = styled.div`
    margin-bottom: 20px;

    & label {
        display: block;
        margin-bottom: 5px;
    }

    & input {
        width: 100%;
        padding: 10px;
        border: 1px solid #555;
        border-radius: 4px;
        background-color: #333;
        color: white;
        font-size: 1em;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1em;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            navigate('/success');
        },
        onError: (error) => {
            alert(`Помилка реєстрації: ${error.message}`);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mutation.isPending) return;

        mutation.mutate({ email, password });
    };

    return (
        <RegPageContainer>
            <Header />
            <RegForm onSubmit={handleSubmit}>
                <FormTitle>Створити Обліковий Запис</FormTitle>
                {mutation.isPending && <p style={{color: '#00ff00', textAlign: 'center'}}>Реєстрація...</p>}

                <InputGroup>
                    <label htmlFor="email">Електронна пошта</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </InputGroup>

                <SubmitButton type="submit" as="button" disabled={mutation.isPending}>
                    {mutation.isPending ? 'Надсилання...' : 'Зареєструватися'}
                </SubmitButton>
            </RegForm>
        </RegPageContainer>
    );
};

export default Registration;
