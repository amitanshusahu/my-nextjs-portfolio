import Image from "next/image";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex-center h-full gap-10">

        <div className="img-holder bg-primary-500 w-60 h-60 rounded-full overflow-hidden object-cover">
          <Image 
          src="/bw-profile.png" 
          alt="profile pic"
          width="300"
          height="300"
           />
        </div>

        <div className="flex-center gap-3">
          <h1 className="text-gray-700 text-center ">FullStack Devloper</h1>
          <p className="text-gray-500 text-lg font-blod text-center">Expert MERN Stack Developer Ready to Build Your Vision</p>
        </div>

      </header>

      <div className="flex-center w-full py-10">
        <Image 
        src={"/swipeup.svg"}
        width="30"
        height="30"
        alt="swipe up icon"
        />
        
      </div>
    </div>
  )
}