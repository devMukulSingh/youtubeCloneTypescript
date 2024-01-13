import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const API_KEY = process.env.NEXT_APP_YT_API_KEY3;


export const getSearchData = createAsyncThunk("youtubeApp/searchData", 
    async({query,isNext} : { query:string, isNext:boolean}, { getState }) => {
        const { youtubeApp : { nextPageToken : nextPageTokenFromState }} = getState() as RootState;
        const{ 
            data:{ data: searchVideosFromApi, continuation:nextPageToken 
            } } = await axios.get(`${BASE_URL}/search?query=${query}&geo=IN&${isNext ? `token=${nextPageTokenFromState}` : '' }`,{

            headers:{
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        });
        return { searchVideosFromApi,nextPageToken};
    })