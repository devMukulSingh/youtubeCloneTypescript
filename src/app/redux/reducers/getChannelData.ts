import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_APP_YT_API_KEY2;

export const getChannelData = createAsyncThunk("youtubeApp/channelData", 
    async(channelId: string) => {
        
        const { data:{ meta:channelData,data, continuation:nextPageToken} } = await axios.get(`${BASE_URL}/channel?id=${channelId}`, {
            headers:{
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            },
        });
        // console.log(channelData);
    
        return {channelData, nextPageToken};
    }
)