import Image from "next/image";
import React from "react";

const MainBlog = () => {
  return (
    <article className="lg:row-span-2 bg-blue-bg flex flex-col">
      <figure className="relative w-auto h-72">
        <Image
          src="/images/blog-image-1.jpg"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="px-6 flex flex-col grow">
        <p className="mt-8 mb-3 text-xs font-bold">Sep 26, 2021</p>
        <h3 className="text-2xl font-extrabold">
          GPT-3 and Open AI is the future. Let us exlore how it is?
        </h3>

        <a href="#" className="block mt-auto mb-6 text-xs font-bold">
          Read Full Article
        </a>
      </div>
    </article>
  );
};

const BlogItem = () => {
  return (
    <article className="bg-blue-bg">
      <figure className="relative w-auto h-32">
        <Image
          src="/images/blog-image-1.jpg"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="px-6">
        <p className="mt-4 mb-2 text-xs font-bold">Sep 26, 2021</p>
        <h3 className="text-2xl font-extrabold">
          GPT-3 and Open AI is the future. Let us exlore how it is?
        </h3>

        <a href="#" className="block mt-10 mb-6 text-xs font-bold">
          Read Full Article
        </a>
      </div>
    </article>
  );
};
const Blogs = () => {
  return (
    <section className="main-container mb-40">
      <h2 className="text-6xl font-extrabold mb-32 text-transparent bg-main-gradient bg-clip-text">
        A lot is happening, <br /> We are blogging about it.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-x-14 gap-y-12">
        <MainBlog />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </section>
  );
};

export default Blogs;
