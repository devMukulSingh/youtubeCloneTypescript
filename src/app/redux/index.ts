import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "../../types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";
import { getChannelData } from "./reducers/getChannelData";
import { getCommentsData } from "./reducers/getCommentsData";
import { getRelatedVideos } from "./reducers/getRelatedVideos";
import { getSearchData } from "./reducers/getSearchData";
import { getVideoDetails } from "./reducers/getVideoDetails";
import { getTrendingVideos } from "./reducers/geTrendingVideos";

const initialState:IinitialState = {
    homePageVideos:[],
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
        setSidebar : (state) => {
            state.sidebar = !state.sidebar ;
        },
        emptyCommentsArray : (state) => {
            state.commentsData = [],
            state.commentsCount = ''
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(getHomePageVideos.fulfilled, (state,action) => {
            state.homePageVideos = [ ...state.homePageVideos, ...action.payload.videosData]
            state.nextPageToken = action.payload.nextPageToken
        });
        builder.addCase(getChannelData.fulfilled, (state,action) => {
            state.channelData = action.payload.channelData,
            state.nextPageToken = action.payload.nextPageToken
        });
        builder.addCase(getVideoDetails.fulfilled, (state,action) => {
            state.videoDetails = action.payload.videoDetails;
            console.log(state.videoDetails);
            
        });
        builder.addCase(getCommentsData.fulfilled, (state,action) => {
            state.commentsData = [ ...state.commentsData,...action.payload.commmentsData];
            state.commentsCount = action.payload.commentsCount;
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getRelatedVideos.fulfilled, (state,action) => {
            state.relatedVideos = action.payload.relatedVideos;
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getSearchData.fulfilled, (state,action) => {
            state.searchVideos = [...state.searchVideos, ...action.payload.searchVideos];
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getTrendingVideos.fulfilled, (state,action) => {
            state.homePageVideos = action.payload.trendingVideos;
        })
    }
    
})
// console.log(youtubeSlice.reducer);
// console.log(youtubeSlice.actions);



export const store = configureStore({
    reducer : {
        youtubeApp : youtubeSlice.reducer
    }
})

export const{ setSidebar,emptyCommentsArray } = youtubeSlice.actions

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;

