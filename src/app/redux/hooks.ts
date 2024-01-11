import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/constants/constants";

//   : () => AppDispatch: This specifies the type of the hook.
//   It's a function that takes no arguments (() =>) and returns a value of type AppDispatch. 
//  In Redux, AppDispatch is typically the type of the dispatch function.

export const useAppDispatch : () => AppDispatch = useDispatch; 

// <RootState> => generic parameter being passed to TypedUseSelectorHook.
//   RootState => is the type that represents the entire state of your Redux store. 
//  It's a placeholder for whatever type you've defined for your Redux store state.
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

interface IuseApi<T>{
    data : T | null;
    error : Error | null;
    loading : boolean;
}

export const useApi = <T>(API_KEY:string, URL:string):IuseApi<T> => {
    
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<T | null>(null);
    
    useEffect( () => {
        fetchData();
    },[URL]);
    
    
    const fetchData = async() => {

        setLoading(true);
        try{
                const { data } = await axios.get(`${BASE_URL}/${URL}`,{
                    headers:{
                        'X-RapidAPI-Key': API_KEY,
                        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
                    },
                });

                setData(data);
            }
            catch(error : Error){
                setError(error);
            }
            finally{
                setLoading(false);
            }

            
        };
        return { data,loading,error};

}


        
    