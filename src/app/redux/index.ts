import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "../../types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";
import { getChannelData } from "./reducers/getChannelData";
import { getCommentsData } from "./reducers/getCommentsData";
import { getRelatedVideos } from "./reducers/getRelatedVideos";
import { getSearchData } from "./reducers/getSearchData";
import { getVideoDetails } from "./reducers/getVideoDetails";

const initialState:IinitialState = {
    videos:[],
    searchTerm:'',
    videoDetails:undefined,
    nextPageToken : '',
    channelData : undefined,
    commentsData: [],
    commentsCount: '',
    relatedVideos : [],
    sidebar : true,
    searchVideos : [],
    
}

export const youtubeSlice = createSlice({
    name : "youtubeApp",
    initialState,
    reducers: {
        setSidebar : (state,action) => {
            state.sidebar = !state.sidebar;
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(getHomePageVideos.fulfilled, (state,action) => {
            state.videos = action.payload.videosData,
            state.nextPageToken = action.payload.nextPageToken
        });
        builder.addCase(getChannelData.fulfilled, (state,action) => {
            state.channelData = action.payload.channelData,
            state.nextPageToken = action.payload.nextPageToken
        });
        builder.addCase(getVideoDetails.fulfilled, (state,action) => {
            console.log(action.payload.videoDetails);
            state.videoDetails = action.payload.videoDetails;
            console.log(state.videoDetails);
            
        });
        builder.addCase(getCommentsData.fulfilled, (state,action) => {
            state.commentsData = action.payload.commmentsData;
            state.commentsCount = action.payload.commentsCount;
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getRelatedVideos.fulfilled, (state,action) => {
            state.relatedVideos = action.payload.relatedVideos;
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getSearchData.fulfilled, (state,action) => {
            state.searchVideos = action.payload.searchVideos;
            state.nextPageToken = action.payload.nextPageToken;
        })
    }
    
})

export const{ setSidebar } = youtubeSlice.actions

export const store = configureStore({
    reducer : youtubeSlice.reducer,  
})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;

