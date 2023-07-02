import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}

const useGames = () => {
   const [game, setGame] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGameResponse>('/games', {signal: controller.signal})
                 .then(response => setGame(response.data.results))
                 .catch(error => {
                  if (error instanceof CanceledError) return;
                  setError(error.message)  
                 });
        return () => controller.abort()
    }, []);

    return { game, error}
}

export default useGames