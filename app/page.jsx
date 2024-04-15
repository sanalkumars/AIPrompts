import Feed from "@/components/Feed"

const Home = () => {

  return (
    <section className=" w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Find
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Prompts
        </span>
      </h1>
      <p className=" desc text-center">
          AI-Prompts is a open-source AI prompting tool for developers to find and create
          ,share creative prompts
      </p>


      {/* feed components */}
      <Feed />
    </section>
  )
}

export default Home