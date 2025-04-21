import React from 'react';
import { useState , useContext , useEffect } from 'react';
const AppContext = React.createContext();

export const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;




const AppProvider = ({ children }) => {


    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show: false, msg: ""});
    const [query, setQuery] = useState("titanic");


    const getMovies = async (url) => {
        setIsLoading(true);
        setIsError({show: false, msg: ""});
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response === "True"){
            setMovie(data.Search);
            setIsLoading(false);
        }
        else{
            setIsError({show: true, msg: data.Error});

        }
    }catch(err){
        console.log(err);
    }
    
    }


    useEffect(()=>{
        let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);

        },1000)

        return () => clearTimeout(timerOut);
        
    },[query])



    return <AppContext.Provider value={{isLoading,isError,movie,setQuery,query}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider , useGlobalContext };