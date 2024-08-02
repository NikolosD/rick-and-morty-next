
import axios from 'axios';
const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/character`, {
            params: { page },
        });
        return response.data.results;
    } catch (error) {
        console.error('Failed to fetch characters:', error);
        throw error;
    }
};


// Получение данных о конкретном персонаже по его ID
export const fetchCharacterById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/character/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch character:', error);
        throw error;
    }
};

// Получение всех локаций с возможностью пагинации
export const fetchLocations = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/location`, {
            params: { page },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch locations:', error);
        throw error;
    }
};

// Получение данных о конкретной локации по ее ID
export const fetchLocationById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/location/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch location:', error);
        throw error;
    }
};

// Получение всех эпизодов с возможностью пагинации
export const fetchEpisodes = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/episode`, {
            params: { page },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch episodes:', error);
        throw error;
    }
};

// Получение данных о конкретном эпизоде по его ID
export const fetchEpisodeById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/episode/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch episode:', error);
        throw error;
    }
};
