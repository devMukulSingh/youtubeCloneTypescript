import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { BASE_URL2 } from "@/constants/constants";

const API_KEY = process.env.NEXT_APP_YT_API_KEY6;

export const getHomePageVideos = createAsyncThunk("youtubeApp/homepageVideo" , 

    async( isNext:boolean, { getState}) => {

        const { youtubeApp: { nextPageToken:nextPageTokenFromState } } = getState() as RootState;
        
    const { data:{ data:homeVideosFromApi, continuation:nextPageToken} } = 
        await axios.get(`${BASE_URL2}/home?geo=IN${isNext ? `&token=${nextPageTokenFromState}` : '' }`,{
            headers:{
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'  
            }
        });
        // console.log(videosDataFromApi,nextPageToken);
        return {homeVideosFromApi,nextPageToken} ;   
    }  
)
    
  