import React, { useState, useEffect } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Platform{
    id:number;
    name:string;
    slug:string;
}

export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms: {platform:Platform}[]
}

interface FetchGamesResponse{
    count:number,
    results:Game[]
}

const useGames = () => {

    const [games, setGames] =  useState<Game[]>([]);
    const [err, setErrors] = useState('');
 
    useEffect(() =>{

    const controller = new AbortController();

     apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
     .then((res) => setGames(res.data.results))
     .catch((err) => 
        { if(err instanceof CanceledError)  return;      
        setErrors(err)
        });

     return () => controller.abort();
    },[]);

    return {games, err}

}

export default useGames;