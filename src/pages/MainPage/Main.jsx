import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/Header';
import GameCard from '../../components/GameCard';
import { fetchGames } from '../../services/api';


import game1Img from '../../assets/images/game1.jpg';
import game2Img from '../../assets/images/game2.jpg';
import game3Img from '../../assets/images/game3.jpg';
import game4Img from '../../assets/images/game4.jpg';
import game5Img from '../../assets/images/game5.jpg';
import game6Img from '../../assets/images/game6.jpg';

const staticImagesMap = {
    'game1.jpg': game1Img,
    'game2.jpg': game2Img,
    'game3.jpg': game3Img,
    'game4.jpg': game4Img,
    'game5.jpg': game5Img,
    'game6.jpg': game6Img,
};


const PageContainer = styled.div`
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

const Main = () => {
    const { data: games, isLoading, error } = useQuery({
        queryKey: ['gamesData'],
        queryFn: fetchGames,
        initialData: [],
    });

    if (isLoading) {
        return (
            <PageContainer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <Header />
                <h3>Завантаження ігрового каталогу...</h3>
            </PageContainer>
        );
    }

    if (error) {
        return (
            <PageContainer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red' }}>
                <Header />
                <h3>Помилка завантаження даних: {error.message}</h3>
            </PageContainer>
        );
    }

    const gamesWithImages = games.map(game => ({
        ...game,
        imageUrl: staticImagesMap[game.imageUrl] || game.imageUrl
    }));


    return (
        <PageContainer>
            <Header />
            <PageTitle>🔥 Гарячі Пропозиції Тижня</PageTitle>
            <ContentGrid>
                {gamesWithImages.map(game => (
                    <GameCard
                        key={game.id}
                        title={game.title}
                        price={game.price}
                        imageUrl={game.imageUrl}
                    />
                ))}
            </ContentGrid>
            {/* <Footer /> */}
        </PageContainer>
    );
};

export default Main;