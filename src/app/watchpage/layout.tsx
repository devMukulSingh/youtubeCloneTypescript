import Header from "@/components/commons/Header";


export default function RootLayout( { children} : { children: React.ReactNode}){
    return(
        <>
            <Header/>
            <div className="mt-[10vh]">
                {children}
            </div>
        </>
    )
}