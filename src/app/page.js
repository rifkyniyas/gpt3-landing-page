import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container py-32 grid grid-cols-1 lg:grid-cols-2">
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
            className="bg-dark-blue rounded-t-md rounded-l-md outline-none px-8 py-6 text-xl"
          />
          <button
            type="submit"
            className="bg-primary text-xl font-bold text-white px-9 py-5"
          >
            Get Started
          </button>
        </form>
        <div className="flex items-center gap-x-9">
          <div className="relative w-40 h-10">
            <Image
              src="/images/used-by.png"
              fill={true}
              className="object-contain"
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
  );
}
