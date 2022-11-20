import Link from "next/link"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-[90vh] font-mono font-extrabold text-[50px] text-center">
        PLEASE SELECT YOUR ALGORITHM FROM THE NAV BAR ABOVE  <span className="animate-bounce px-10 text-[60px]"> ☝️</span>
        <p>MAAZ ASIM TAIMURI</p>
        <p>20K-1905</p>
        <p>BSE-5A</p>
      </div>


    </>

  )
}
