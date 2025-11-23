import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavHeader = styled.header`
    background-color: #121212;
    color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #00ff00; 
`;

const Logo = styled.h1`
  font-size: 1.8em;
  color: #00ff00;
  cursor: pointer;
`;


const NavLinks = styled.nav`
    & a { 
        color: white;
        text-decoration: none;
        margin-left: 20px;
        font-size: 1.1em;
        transition: color 0.2s;

        &:hover {
            color: #00cc00;
        }
    }
`;

const Header = () => {
    return (
        <NavHeader>
            <Logo>GameShop 🎮</Logo>
            <NavLinks>

                <Link to="/main">Головна</Link>
                <Link to="/basket">Кошик</Link>
                <Link to="/registration">Реєстрація</Link>
                <Link to="/login">Вхід</Link>
            </NavLinks>
        </NavHeader>
    );
};

export default Header;