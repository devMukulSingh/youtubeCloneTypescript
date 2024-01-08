import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "../../types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";
import { getChannelData } from "./reducers/getChannelData";
import { getCommentsData } from "./reducers/getCommentsData";

const initialState:IinitialState = {
    videos:[],
    searchTerm:'',
    searchResults:[],
    nextPageToken : '',
    channelData : undefined,
    commentsData: [],
    commentsCount: ''
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
            state.channelData = action.payload.channelData,
            state.nextPageToken = action.payload.nextPageToken
        });
        builder.addCase(getCommentsData.fulfilled, (state,action) => {
            state.commentsData = action.payload.commmentsData;
            state.commentsCount = action.payload.commentsCount;
            state.nextPageToken = action.payload.nextPageToken;
            console.log(state.commentsData);
        })  
    }
    
})

export const store = configureStore({
    reducer : youtubeSlice.reducer,  
})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;