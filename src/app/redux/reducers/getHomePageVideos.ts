import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { BASE_URL } from "@/constants/constants";

const API_KEY = process.env.NEXT_APP_YT_API_KEY1;

export const getHomePageVideos = createAsyncThunk("youtubeApp/homepageVideo" , 

    async( isNext:boolean, { getState}) => {

        // const { youtubeApp: { nextPageToken:nextPageTokenFromState } } = getState() as RootState;
        
    const { data:{ data:videosData, continuations:nextPageToken} } = 
        await axios.get(`${BASE_URL}/search?query=new&type=video}`,{
            headers:{
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        });
        // console.log(data);
        return {videosData,nextPageToken} ;        

    }
)

