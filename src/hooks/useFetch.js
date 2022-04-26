import {useState, useEffect} from 'react';

//keywords
const API_LINK = "http://www.omdbapi.com/?apikey=c2aa0bb2";

export const useFetch = (keyword)=>{
    const [movies, setMovies] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const fetchMovies = async (keyword) => {
        try {
          let response = await fetch(`${API_LINK}${keyword}`);
          let data = await response.json();
          if (data?.Response === "True" || data) {
            setMovies(data?.Search);
            setErrorMsg("");
          } else {
            setErrorMsg(data?.Error);
          }
        } catch (error) {
          setErrorMsg(error?.message);
        }
      };

    useEffect(()=>{
        if(keyword !== ''){
            fetchMovies(keyword);
        }
    }, [keyword]);

    return{movies, errorMsg};
};