import { PayloadAction } from "@reduxjs/toolkit"

export interface IinitialState{
    homePageVideos: IhomePageVideos[],
    searchTerm : string | null,
    nextPageToken:string | null
    channelData : IchannelData,
    commentsData : IcommentsData[],
    commentsCount : string,
    relatedVideos : IrelatedVideos[],
    sidebar : boolean,
    searchVideos : IhomePageVideos[],
    videoDetails : IhomePageVideos,
    error : PayloadAction,
    trendingVideos : IhomePageVideos[],
    trendingType : string,
    loading : boolean,
    relatedVideosLoading: boolean,
    trendingVideosLoading: boolean
}

export interface IhomePageVideos{
    thumbnail : Ithumbnail[],
    lengthText: string,
    title: string,
    channelThumbnail : Ithumbnail[],
    channelTitle: string,
    viewCount: number,
    videoId : string,
    channelId: string,
    description:string,
    type:string,
    publishedTimeText: string
}
export interface IchannelData{
    title:string,
    thumbnail: Ithumbnail[],
    subscriberCount: string,   
}

export interface IcommentsData{
    authorText: string,
    textDisplay: string,
    publishedTimeText: string,
    likesCount : string,
    authorThumbnail : Ithumbnail[]
}
export interface IrelatedVideos{
    videoId:string,
    title: string,
    lengthText:string,
    viewCount:string,
    publishedTimeText:string,
    thumbnail: Ithumbnail[],
    channelId: string,
    description:string,
    channelTitle:string

}

export interface Ithumbnail{
    url: string
}

export interface Iparams {
    id: string,
    video : {}
}

 export interface IsidebarOptions{
    name:string,
    icon:React.ReactNode
    type:string,

 }