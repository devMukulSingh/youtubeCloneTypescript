import { BASE_URL } from "@/constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const API_KEY = process.env.NEXT_PUBLIC_YT_API_KEY2;

export const getCommentsData = createAsyncThunk("youtubeApp/commentsData",
    async( {isNext, videoId} : { isNext:boolean, videoId:string}, {getState} ) => {
        const { youtubeApp : { nextPageToken : nextPageTokenFromState }  } = getState() as RootState;
        const{ data:
                 {
                    commentsCount,
                     data:commmentsDataFromApi,
                      continuation:nextPageToken
                    }
                } = await axios.get(`${BASE_URL}/comments?id=${videoId}&${isNext ? `token=${nextPageTokenFromState}` : '' } `,{
                    headers:{
                        'X-RapidAPI-Key': API_KEY,
                        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
                    },
                });
                
        return { commmentsDataFromApi, commentsCount, nextPageToken};
    })