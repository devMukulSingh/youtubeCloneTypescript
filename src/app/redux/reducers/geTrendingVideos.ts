import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { BASE_URL2 } from "@/constants/constants";

const API_KEY = process.env.NEXT_PUBLIC_YT_API_KEY5;

export const getTrendingVideos = createAsyncThunk('youtubeApp/trendingVideo' , 

async( type:string) => {
            try {
    
            const { 
                    data: { data : trendingVideosFromApi
                        }} = await axios.get(`${BASE_URL2}/trending?geo=IN&type=${type} `,{
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
                  }
            })
            console.log(trendingVideosFromApi);
            return { trendingVideosFromApi };
            
            
        } catch (error) {
            console.log(`Error in getTrendingvideos${error}`);
        }
    
}
)