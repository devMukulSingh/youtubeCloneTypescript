import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const API_KEY = process.env.NEXT_APP_YT_API_KEY2;

export const getRelatedVideos = createAsyncThunk("youtubeApp/relatedVideos", 

    async(videoId : string) => {

        try {
            const { 
                    data: 
                        { 
                        data: relatedVideos, continuation:nextPageToken
                            }} = await axios.get(
                                `${BASE_URL}/related?id=${videoId}&geo=IN&type=video}`,{
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
                  }
            })
            return { relatedVideos, nextPageToken };

        } catch (error) {
            console.log(error);
            
        }
        
    })