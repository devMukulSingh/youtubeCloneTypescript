 "use client"
import Header from "../components/commons/Header";
import Sidebar from "../components/commons/Sidebar";
import HomePage from "../components/homePage/HomePage";
import { useAppSelector } from "./redux/hooks";
 

export default function Home() {
  const sidebar = useAppSelector( state => state.youtubeApp.sidebar);
  return (
    <>
      <Header/>
      <div className="mt-[10vh]">
        <section >
          <Sidebar/>
        </section>
        <section className={` ${sidebar ? 'ml-[15rem]' : ''  }`}>
          <HomePage/>
        </section>
      </div>
    </>
  )
}
