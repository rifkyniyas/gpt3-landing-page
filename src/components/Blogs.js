import Image from "next/image";
import React from "react";

const MainBlog = ({ title, publishedDate, coverImageUrl, blogLink }) => {
  return (
    <article className="lg:row-span-2 bg-blue-bg flex flex-col">
      <figure className="relative w-auto h-72">
        <Image
          src={coverImageUrl}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="Main Blog Image Cover"
        />
      </figure>
      <div className="px-6 flex flex-col grow">
        <p className="mt-8 mb-3 text-xs font-bold">{publishedDate}</p>
        <h3 className="text-2xl font-extrabold">{title}</h3>

        <a
          href={blogLink}
          className="block mt-8 lg:mt-auto mb-6 text-xs font-bold"
        >
          Read Full Article
        </a>
      </div>
    </article>
  );
};

const BlogItem = ({ title, publishedDate, coverImageUrl, blogLink }) => {
  return (
    <article className="bg-blue-bg">
      <figure className="relative w-auto h-32">
        <Image
          src={coverImageUrl}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="Blog Image COver"
        />
      </figure>
      <div className="px-6">
        <p className="mt-4 mb-2 text-xs font-bold">{publishedDate}</p>
        <h3 className="text-2xl font-extrabold">{title}</h3>

        <a href={blogLink} className="block mt-10 mb-6 text-xs font-bold">
          Read Full Article
        </a>
      </div>
    </article>
  );
};

const blogData = [
  {
    title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    publishedData: "Sep 26, 2021",
    coverImageUrl: "/images/blog-image-1.jpg",
    blogLink: "#",
  },
  {
    title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    publishedData: "Sep 26, 2021",
    coverImageUrl: "/images/blog-image-2.jpg",
    blogLink: "#",
  },
  {
    title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    publishedData: "Sep 26, 2021",
    coverImageUrl: "/images/blog-image-3.jpg",
    blogLink: "#",
  },
  {
    title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    publishedData: "Sep 26, 2021",
    coverImageUrl: "/images/blog-image-4.jpg",
    blogLink: "#",
  },
  {
    title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    publishedData: "Sep 26, 2021",
    coverImageUrl: "/images/blog-image-5.jpg",
    blogLink: "#",
  },
];
const Blogs = () => {
  return (
    <section className="main-container mb-40">
      <h2 className="text-6xl font-extrabold mb-32 text-transparent bg-main-gradient bg-clip-text">
        A lot is happening, <br /> We are blogging about it.
      </h2>
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-2 gap-x-14 gap-y-12">
        {blogData.map((blog, index) =>
          index == 0 ? (
            <MainBlog
              title={blog.title}
              publishedDate={blog.publishedData}
              coverImageUrl={blog.coverImageUrl}
              blogLink={blog.blogLink}
            />
          ) : (
            <BlogItem
              title={blog.title}
              publishedDate={blog.publishedData}
              coverImageUrl={blog.coverImageUrl}
              blogLink={blog.blogLink}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Blogs;
