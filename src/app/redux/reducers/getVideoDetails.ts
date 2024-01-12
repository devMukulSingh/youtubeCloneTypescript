import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_APP_YT_API_KEY4;

export const getVideoDetails = createAsyncThunk("youtubeApp/videoDetails", 

    async(videoId:string) => {

        const { data:videoDetails  } = await axios.get(`${BASE_URL}/video?id=${videoId}`, {
            headers:{
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        });
        // console.log(videoDetails);
        return {videoDetails};
    })