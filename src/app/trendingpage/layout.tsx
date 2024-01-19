"use client"
import Header from "@/components/commons/Header"
import Sidebar from "@/components/commons/Sidebar"
import { useAppSelector } from "../redux/hooks"


export default function RootLayout( {children} : {children : React.ReactNode}) {
    const sidebar = useAppSelector( state => state.youtubeApp.sidebar);
    return(
        <>
            <Header/>
            <div className="mt-[10vh]">
                <Sidebar/>
            </div>
            <div className={`${sidebar ? 'ml-[15rem]' : 'px-20 py-5' }`}>
                {children}
            </div>
        </>
    )
}