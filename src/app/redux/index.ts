import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "../../types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";
import { getChannelData } from "./reducers/getChannelData";

const initialState:IinitialState = {
    videos:[],
    searchTerm:'',
    searchResults:[],
    nextPageToken : '',
    // channelData : []x
}

export const youtubeSlice = createSlice({
    name : "youtubeApp",
    initialState,
    reducers: {},
    extraReducers : (builder) =>{
        builder.addCase(getHomePageVideos.fulfilled, (state,action) => {
            state.videos = action.payload.videosData,
            state.nextPageToken = action.payload.nextPageToken
        });
        builder.addCase(getChannelData.fulfilled, (state,action) => {
           
        })
    }
    
})

export const store = configureStore({
    reducer : youtubeSlice.reducer,  
})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;