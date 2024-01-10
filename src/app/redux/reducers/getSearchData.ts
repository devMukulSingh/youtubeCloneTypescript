import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_APP_YT_API_KEY3;


export const getSearchData = createAsyncThunk("youtubeApp/searchData", 
    async(query: string) => {
        const{ 
            data:{ data: searchVideos, continuation:nextPageToken 
            } } = await axios.get(`${BASE_URL}/search?query=${query}geo=IN`,{

            headers:{
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        });
        return { searchVideos,nextPageToken};
    })