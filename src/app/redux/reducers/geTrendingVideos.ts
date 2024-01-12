import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const API_KEY = process.env.NEXT_APP_API_KEY1;

export const getTrendingVideos = createAsyncThunk('youtubeApp/trendingVideo' , 

async(type:string) => {

        const { data: { data : trendingVideos} } = await axios.get(`${BASE_URL}/trending?geo=IN&type=${type}`,{
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
              }
        })
        return { trendingVideos};
        
    }
)