import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import GameCard from '../components/GameCard';

const PageContainer = styled.div`
  background-color: #282c34; /* Темний фон */
  min-height: 100vh;
`;

const ContentGrid = styled.div`
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const PageTitle = styled.h2`
    color: white;
    text-align: center;
    padding: 20px 0;
`;

// Дані-заглушки (замініть imageUrl на реальні шляхи з папки assets)
const games = [
    { id: 1, title: 'Epic Adventure 2077', price: 999, imageUrl: '' },
    { id: 2, title: 'Galactic Warfare', price: 599, imageUrl: '' },
    { id: 3, title: 'Ancient Artifacts', price: 750, imageUrl: '' },
    { id: 4, title: 'Cyber Racer X', price: 450, imageUrl: '' },
    { id: 5, title: 'Fantasy RPG World', price: 1200, imageUrl: '' },
    { id: 6, title: 'Mystery Detective', price: 300, imageUrl: '' },
];

const Main = () => {
    return (
        <PageContainer>
            <Header />
            <PageTitle>🔥 Гарячі Пропозиції Тижня</PageTitle>
            <ContentGrid>
                {games.map(game => (
                    <GameCard
                        key={game.id}
                        title={game.title}
                        price={game.price}
                        imageUrl={game.imageUrl}
                    />
                ))}
            </ContentGrid>
            {/* Тут має бути Footer, який ви можете створити пізніше */}
        </PageContainer>
    );
};

export default Main;