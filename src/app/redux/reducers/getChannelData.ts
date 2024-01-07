import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_APP_YT_API_KEY;

export const getChannelData = createAsyncThunk("youtubeApp/channelData", 
    async(channelId: string) => {
        console.log(channelId);
        
        const { data } = await axios.get(`${BASE_URL}/channel/${channelId}`, {
            headers:{
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        });
        console.log(data);
    
        return data;
    }
)