import Card from "./Cards";

export default function Section1() {

  return(
    <section className=" py-40 pt-40 sm:px-[40px] bg-gray-50">
      <div className="flex-center">
        <div className="w-[400px] text-center">
          <h2>I convert <span className="grad-text">ideas</span> into <span className="grad-text">products</span></h2>
        </div>

        <div className="flex flex-wrap justify-center w-full gap-10 lg:gap-20 pt-20">
          <Card src={"/projects/insta.png"}/>
          <Card src={"/projects/youtube.png"}/>
          <Card src={"/projects/amazone.png"}/>
        </div>
      </div>
    </section>
  )

}