import axios from 'axios';

const mockApiUrl = 'http://localhost:3000';

const mockGames = [
    { id: 1, title: 'Cyberpank2077', price: 999, imageUrl: 'game1.jpg' },
    { id: 2, title: 'ARC RAIDERS', price: 599, imageUrl: 'game2.jpg' },
    { id: 3, title: 'The last of us Part 1', price: 1200, imageUrl: 'game3.jpg' },
    { id: 4, title: 'BATTLEFIELD 6', price: 1400, imageUrl: 'game4.jpg' },
    { id: 5, title: 'Final Fantasy', price: 700, imageUrl: 'game5.jpg' },
    { id: 6, title: 'God Of War Ragnarok', price: 800, imageUrl: 'game6.jpg' },
];

export const fetchGames = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockGames;
};

export const registerUser = async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Реєстрація успішна:", userData);
    return { success: true, message: "Користувач успішно зареєстрований" };
};