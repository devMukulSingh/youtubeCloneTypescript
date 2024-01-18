import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "../../types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";
import { getChannelData } from "./reducers/getChannelData";
import { getCommentsData } from "./reducers/getCommentsData";
import { getRelatedVideos } from "./reducers/getRelatedVideos";
import { getSearchData } from "./reducers/getSearchData";
import { getVideoData } from "./reducers/getVideoData";
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
    sidebar : false,
    searchVideos : [],
    loading : false,
    error : undefined,
    trendingVideos:[],
    trendingType: 'now',
    relatedVideosLoading: false
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
        },
        setTrendingType : ( state,action) => {
            state.trendingType = action.payload;
        }
    },
    extraReducers : (builder) =>{

        builder.addCase(getHomePageVideos.pending , (state) => {
            if(state.loading === false) state.loading = true;
        });
        builder.addCase(getHomePageVideos.fulfilled, (state,action) => {
            state.homePageVideos.push(...action.payload.homeVideosFromApi);
            state.nextPageToken = action.payload.nextPageToken
            if(state.loading === true) state.loading = false;
        });
        builder.addCase(getHomePageVideos.rejected, (state) => {
            if(state.loading === true ) state.loading = false;
        });

        // builder.addCase(getChannelData.pending , (state) => {
        //     state.loading = true;
        // })
        builder.addCase(getChannelData.fulfilled, (state,action) => {
            // state.loading = false;
            state.channelData = action.payload.channelDataFromApi;
        });

        builder.addCase(getVideoData.pending , (state) => {
            if(state.loading === false) state.loading = true;
        })
        builder.addCase(getVideoData.fulfilled, (state,action) => {
            if(state.loading === true ) state.loading = false;
            state.videoDetails = action.payload.videoDataFromApi;
            // console.log(state.videoDetails);       
        });
        builder.addCase(getVideoData.rejected, (state) => {
            if(state.loading === true ) state.loading = false;
        })

        // builder.addCase(getCommentsData.pending , (state) => {
        //     state.loading = true;
        // })
        builder.addCase(getCommentsData.fulfilled, (state,action) => {
            // state.loading = false;
            state.commentsData = [ ...state.commentsData,...action.payload.commmentsDataFromApi];
            state.commentsCount = action.payload.commentsCount;
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getRelatedVideos.pending, (state) => {
            if(state.relatedVideosLoading ===false) state.relatedVideosLoading = true;
        });
        builder.addCase(getRelatedVideos.fulfilled, (state,action) => {
            state.relatedVideos = action.payload.relatedVideosFromApi;
            if(state.relatedVideosLoading === true) state.relatedVideosLoading = false;
        });
        builder.addCase(getRelatedVideos.rejected, (state) => {
            if(state.relatedVideosLoading === true) state.relatedVideosLoading = false;
        });

        builder.addCase(getSearchData.pending , (state) => {
            state.loading = true;
        })
        builder.addCase(getSearchData.fulfilled, (state,action) => {
            state.loading = false;  
            state.searchVideos = [...state.searchVideos, ...action.payload.searchVideosFromApi];   
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getSearchData.rejected , (state) => {
            if(state.loading = true) state.loading = false;
        })

        builder.addCase(getTrendingVideos.pending , (state) => {
            if(state.loading = false) state.loading = true;
        })
        builder.addCase(getTrendingVideos.fulfilled, (state,action) => {
            if(state.loading = true) state.loading = false;
            state.trendingVideos = action.payload.trendingVideosFromApi;
        })
        builder.addCase(getTrendingVideos.rejected, (state) => {
            if(state.loading = true) state.loading = false;
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

export const{ setSidebar,emptyCommentsArray,setTrendingType } = youtubeSlice.actions

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;

