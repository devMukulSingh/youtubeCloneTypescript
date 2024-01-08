
export interface IinitialState{
    videos: IHomePageVideos[],
    searchTerm : string | null,
    searchResults:[],
    nextPageToken:string | null
    channelData : IchannelData,
    commentsData : IcommentsData[],
    commentsCount : string,
}

export interface IHomePageVideos{
    thumbnail : Ithumbnail[],
    lengthText: string,
    title: string,
    publishedText : string,
    channelThumbnail : IchannelThumbnail[],
    channelTitle: string,
    viewCount: number,
    videoId : string,
    channelId: string,
    description:string
}
export interface IchannelData{
    title:string,
    thumbnail: Ithumbnail[],
    subscriberCount: string,   
}

export interface IcommentsData{
    authorDisplayName: string,
    textDisplay: string,
    publishedTimeText: string,
    likesCount : string,
    authorProfileImageUrl : Ithumbnail[]
}

export interface Ithumbnail{
    url: string
}
export interface IchannelThumbnail{
    url: string
}
export interface Iparams {
    id: string,
    video : {}
}

 