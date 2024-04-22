import Image from "next/image"

export default function NavBar() {
  return (
    <nav className=" flex justify-between items-center py-5 px-20 sticky top-0 bg-white shadow-md">
      <Image
        src="/amit.svg"
        width="70"
        alt="logo"
        height="70"
      />
      <div className="flex gap-5 w-auto">
        <a href="" className="text-xl text-gray-500">About</a>
        <a href="" className="text-xl text-gray-500">Works</a>
      </div>
    </nav>
  )
}