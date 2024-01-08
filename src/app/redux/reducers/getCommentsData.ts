import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_APP_YT_API_KEY2;

export const getCommentsData = createAsyncThunk("youtubeApp/commentsData",
    async( videoId: string ) => {
        const{ data:
                 {
                    commentsCount,
                     data:commmentsData,
                      continuation:nextPageToken
                    }
                } = await axios.get(`${BASE_URL}/comments?id=${videoId}`,{
                    headers:{
                        'X-RapidAPI-Key': API_KEY,
                        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
                    },
                });
                
        return { commmentsData, commentsCount, nextPageToken};
    })