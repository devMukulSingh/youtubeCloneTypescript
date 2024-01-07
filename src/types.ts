export interface IinitialState{
    videos: IHomePageVideos[],
    searchTerm : string | null,
    searchResults:[],
    nextPageToken:string | null
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
    channelId: string
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

 