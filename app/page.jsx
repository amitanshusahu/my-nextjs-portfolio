import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-[1444px] m-auto">
      <Hero />
      <NavBar />
      <Section1/>
      <Section2 />
    </main>
  );
}
