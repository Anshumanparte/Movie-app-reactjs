import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
const AppContext = React.createContext();

const API_URL = `https://www.omdbapi.com/?apikey=663f8cb8&s=titanic`;


//663f8cb8 api key omdb https://img.omdbapi.com/?apikey=663f8cb8&s=titanic

const AppProvider = ({ children }) => {


    const getMovies = async (url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
    
    }


    useEffect(()=>{
        getMovies(API_URL);
    },[])



    return <AppContext.Provider value={"thapa"}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider , useGlobalContext };