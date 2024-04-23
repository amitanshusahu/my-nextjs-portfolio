import Image from "next/image";

export default function Card({src, ghb, preview}){
  return(
    <div className="w-80 h-[400px] rounded-lg drop-shadow-md bg-white overflow-hidden">

      <div className="img-holder w-[inherit] h-[200px] bg-gray-200">
        <Image 
          src={src}
          width="500"
          height="500"
          alt="project image"
        />
      </div>

      <div className="m-5">
        <h6>Instamiligram</h6>
        <p className=" text-gray-600">this is a clone of instagram, it has all the features and it is build with the mern stack</p>
      </div>

      <div className="flex mx-5 gap-3">
        <a href={ghb} className="flex gap-1">
           <Image src="/icons/ghb.svg" width="20" height="20" alt="github"/> 
           repo
        </a>
        <a href={preview} className="flex gap-1">
           <Image src="/icons/youtube.svg" width="20" height="20" alt="github"/> 
           view
        </a>
      </div>

    </div>
  )
}