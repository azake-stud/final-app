import {useState, useEffect} from 'react';

//keywords
const API_LINK = "http://www.omdbapi.com/?apikey=c2aa0bb2";

export const useFetch = (keyword)=>{
    const [movies, setMovies] = useState([]);

    const fetchMovies = async(keyword)=>{
        let response = await fetch(`${API_LINK}&s=${keyword}`);
        let data = await response.json();
        console.log(data);
        if(data?.Response === 'True'){
            setMovies(data?.Search);
        }
    };

    useEffect(()=>{
        if(keyword !== ''){
            fetchMovies(keyword);
        }
    }, [keyword]);

    return{movies};
};