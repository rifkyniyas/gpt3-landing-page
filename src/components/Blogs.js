import Image from "next/image";
import React from "react";

const MainBlog = () => {
  return (
    <article className="row-span-2">
      <figure>
        <Image src="" />
      </figure>
      <p>Main Article</p>
    </article>
  );
};

const BlogItem = () => {
  return <article>Single Blog Article</article>;
};
const Blogs = () => {
  return (
    <section className="main-container mb-40">
      <h2 className="text-6xl font-extrabold mb-32 text-transparent bg-main-gradient bg-clip-text">
        A lot is happening, <br /> We are blogging about it.
      </h2>
      <div className="grid grid-cols-3 grid-rows-2">
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
