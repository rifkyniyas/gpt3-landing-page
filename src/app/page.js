import Blogs from "@/components/Blogs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="main-container py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2">
        <section>
          <h1 className="bg-main-gradient bg-clip-text text-transparent font-extrabold text-6xl mb-8">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="text-blue-text text-xl mb-9">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form action="#" className="flex mb-9">
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="bg-dark-blue rounded-none rounded-t-md rounded-l-md lg:grow outline-none px-6 py-4 lg:px-8 lg:py-6 lg:text-xl"
            />
            <button
              type="submit"
              className="bg-primary text-xl font-bold text-white px-6 py-4 lg:px-9 lg:py-5"
            >
              Get Started
            </button>
          </form>
          <div className="flex items-center gap-x-9">
            <div className="relative w-40 h-10">
              <Image
                src="/images/used-by.png"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-xs font-medium">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </section>
        <figure className="relative">
          <Image src="/images/hero-image.jpg" fill={true} />
        </figure>
      </div>
      {/* Companies Section */}
      <div className="max-w-2xl mx-auto mb-32 flex flex-wrap justify-center items-center gap-y-10 gap-x-12">
        <figure className="relative h-6 w-32 basis-1/4 lg:basis-1/5">
          <Image src="/images/google-logo.svg" fill={true} />
        </figure>
        <figure className="relative h-6 w-32 basis-1/4 lg:basis-1/5">
          <Image src="/images/slack-logo.svg" fill={true} />
        </figure>
        <figure className="relative h-6 w-32 basis-1/4 lg:basis-1/5">
          <Image src="/images/atlassian-logo.svg" fill={true} />
        </figure>
        <figure className="relative h-6 w-32 basis-1/4 lg:basis-1/5">
          <Image src="/images/dropbox-logo.svg" fill={true} />
        </figure>
        <figure className="relative h-6 w-32 basis-1/4 lg:basis-1/5">
          <Image src="/images/shopify-logo.svg" fill={true} />
        </figure>
      </div>
      {/* What is GPT-3 */}
      <div className="main-container mb-52 p-16 bg-blue-bg">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-5">
          <h2 className="min-w-fit text-2xl font-extrabold grow">
            <span className="block h-1 w-10 bg-main-gradient mb-4"></span>
            What is GPT-3
          </h2>
          <p className="font-medium text-blue-text">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </section>
        <section className="flex flex-col lg:flex-row justify-between lg:items-center py-24 gap-y-6">
          <h2 className="max-w-md text-4xl font-extrabold text-transparent bg-main-gradient bg-clip-text">
            The possibilities are beyond your imagination
          </h2>
          <a href="#" className="font-medium text-orange-text">
            Explore The Library
          </a>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-11 gap-y-12">
          <article>
            <h3 className="text-2xl font-extrabold mb-8">
              <span className="block h-1 w-10 bg-main-gradient mb-4"></span>
              Chatbots
            </h3>
            <p className="text-blue-text font-medium">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </article>
          <article>
            <h3 className="text-2xl font-extrabold mb-8">
              <span className="block h-1 w-10 bg-main-gradient mb-4"></span>
              Knowledgebase
            </h3>
            <p className="text-blue-text font-medium">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </article>
          <article>
            <h3 className="text-2xl font-extrabold mb-8">
              <span className="block h-1 w-10 bg-main-gradient mb-4"></span>
              Education
            </h3>
            <p className="text-blue-text font-medium">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </article>
        </div>
      </div>
      {/* Features section */}
      <div className="main-container mb-32 grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-36">
        <section>
          <h2 className="text-4xl font-extrabold text-transparent bg-main-gradient bg-clip-text mb-9">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <a href="#" className="text-orange-text font-medium">
            Request Early Access to Get Started
          </a>
        </section>
        <div className="flex flex-col gap-y-14">
          <article className="flex justify-between gap-x-20">
            <h3 className="text-lg font-extrabold min-w-[150px]">
              <span className="block h-1 w-10 bg-main-gradient mb-2"></span>
              Improving end distrusts instantly
            </h3>
            <p className="text-blue-text text-sm font-medium">
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded.
            </p>
          </article>
          <article className="flex justify-between gap-x-20">
            <h3 className="text-lg font-extrabold min-w-[150px]">
              <span className="block h-1 w-10 bg-main-gradient mb-2"></span>
              Become the tended active
            </h3>
            <p className="text-blue-text text-sm font-medium">
              Considered sympathize ten uncommonly occasional assistance
              sufficient not. Letter of on become he tended active enable to.
            </p>
          </article>
          <article className="flex justify-between gap-x-20">
            <h3 className="text-lg font-extrabold min-w-[150px]">
              <span className="block h-1 w-10 bg-main-gradient mb-2"></span>
              Message or am nothing
            </h3>
            <p className="text-blue-text text-sm font-medium">
              Led ask possible mistress relation elegance eat likewise debating.
              By message or am nothing amongst chiefly address.
            </p>
          </article>
          <article className="flex justify-between gap-x-20">
            <h3 className="text-lg font-extrabold min-w-[150px]">
              <span className="block h-1 w-10 bg-main-gradient mb-2"></span>
              Really boy law county
            </h3>
            <p className="text-blue-text text-sm font-medium">
              Really boy law county she unable her sister. Feet you off its like
              like six. Among sex are leave law built now. In built table in an
              rapid blush.
            </p>
          </article>
        </div>
      </div>
      {/* Feature section */}
      <div className="main-container mb-40 grid grid-cols-1 lg:grid-cols-2 gap-x-36">
        <figure className="relative">
          <Image src="/images/hero-image.jpg" fill={true} />
        </figure>
        <section>
          <p className="block font-medium text-light-blue mb-3">
            Request Early Access to Get Started
          </p>
          <h2 className="text-4xl mb-6 font-extrabold bg-main-gradient bg-clip-text text-transparent">
            The possibilities are beyond your imagination
          </h2>
          <p className="text-blue-text mb-8">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a href="#" className="text-orange-text font-semibold">
            Request Early Access to Get Started
          </a>
        </section>
      </div>
      {/* CTA section */}
      <div className="main-container mb-40 p-12 flex flex-col md:flex-row gap-y-8 justify-between lg:items-center bg-main-gradient rounded-md">
        <div>
          <p className="text-xs font-medium text-[#0E0E0E] mb-3">
            Request Early Access to Get Started
          </p>
          <p className="text-2xl font-extrabold text-black">
            Register today & start exploring the endless possiblities.
          </p>
        </div>
        <a
          href="#"
          className=" bg-black px-12 py-4 rounded-full text-lg font-bold"
        >
          Get Started
        </a>
      </div>
      <Blogs />
    </main>
  );
}
