import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  padding: 15px;
  width: 280px;
  background-color: #1e1e1e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameImage = styled.img`
  width: 100%;
  height: 150px; /* Фіксована висота для прикладу */
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
`;

const GameTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.25em;
  text-align: center;
`;

const PriceText = styled.p`
  font-size: 1.5em;
  color: #00ff00;
  font-weight: bold;
  margin-bottom: 15px;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const GameCard = ({ title, price, imageUrl }) => {
    // Якщо немає URL, використовуємо заглушку
    const finalImageUrl = imageUrl || 'https://via.placeholder.com/280x150?text=Game+Image';

    return (
        <CardContainer>
            <GameImage src={finalImageUrl} alt={title} />
            <GameTitle>{title}</GameTitle>
            <PriceText>{price} UAH</PriceText>
            <BuyButton>Додати до Кошика</BuyButton>
        </CardContainer>
    );
};

export default GameCard;