import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Main from './pages/MainPage/Main.jsx';
import BasketGames from './pages/Basket/BasketGames.jsx';
import RegistUser from './pages/Registration/RegistUser.jsx';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path="/basket" element={<BasketGames />} />
                <Route path="/registration" element={<RegistUser />} />
                <Route path="/login" element={<RegistUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;