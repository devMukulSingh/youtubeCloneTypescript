import Header from "../components/commons/Header"
import Sidebar from "../components/commons/Sidebar"



export default function RootLayout( {children} : {children : React.ReactNode}) {
    return(
        <>
            <Header/>
            <div className="mt-[10vh]">
                <Sidebar/>
            </div>
            <div className="ml-[15rem]">
                {children}
            </div>
        </>
    )
}