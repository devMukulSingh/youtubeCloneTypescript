 "use client"
import HomePage from "./components/homePage/HomePage";
import { useAppSelector } from "./redux/hooks";
 

export default function Home() {
  const sidebar = useAppSelector( state => state.sidebar);
  return (
    <main className={`${sidebar ? 'opacity-60' : '' }`}>
      <HomePage/>
    </main>
  )
}
