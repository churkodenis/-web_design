import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header'; // Шлях виправлено для вкладеності 'pages/Basket'

// --- Styled-Components для сторінки Кошика ---
const BasketPageContainer = styled.div`
  min-height: 80vh; 
  color: white;
`;

const BasketContent = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
`;

const BasketTitle = styled.h2`
  color: #00ff00;
  margin-bottom: 30px;
`;

const BasketItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
  padding: 15px 0;
  font-size: 1.1em;
`;

const TotalBlock = styled.div`
  margin-top: 30px;
  padding: 20px;
  border: 2px solid #00ff00;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  background-color: #00ff00;
  color: #121212;
  border: none;
  padding: 15px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 20px;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00cc00;
  }
`;
// ------------------------------------

// Дані-заглушки для верстки
const basketItems = [
    { id: 1, title: 'Cyberpank2077', price: 999 },
    { id: 2, title: 'ARC RAIDERS', price: 599 },
];
const total = 999 + 599;

const Basket = () => {
    return (
        <BasketPageContainer>
            <Header />
            <BasketContent>
                <BasketTitle>🛒 Ваш Кошик</BasketTitle>
                {basketItems.map(item => (
                    <BasketItem key={item.id}>
                        <span>{item.title}</span>
                        <span>{item.price} UAH</span>
                    </BasketItem>
                ))}

                <TotalBlock>
                    <span>Всього до сплати:</span>
                    <span>{total} UAH</span>
                </TotalBlock>

                <CheckoutButton>Оформити Замовлення</CheckoutButton>
            </BasketContent>
        </BasketPageContainer>
    );
};

export default Basket;