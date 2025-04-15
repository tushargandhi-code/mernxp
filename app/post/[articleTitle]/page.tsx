import Footer from "@/components/Footer";
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from '@/components/Breadcrumb';
import React from "react";
import Newsletter from "@/components/Newsletter";

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  
  if (!article) return <h1>Post not found</h1>;

  let headingCount = 0;

  return (
    <>
      <div className="bg-gray-200">
        <div className="text-black mt-20 bg-gray-200 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-6">
        <div className="max-w-7xl text-black mb-4 sm:px-0  lg:px-38">
       <Breadcrumb />
        </div>
          <h1 className="text-3xl lg:mx-40  sm:text-4xl lg:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div
            className="flex flex-col lg:mx-40 sm:flex-row items-start sm:items-center gap-3 sm:gap-6 p-4 bg-gray-200 rounded-lg
            mb-6"
          >
        <div className="text-gray-800 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
    {/* Author Info */}
    <div className="flex items-center gap-2">
      <Image
        src={`/authors/${article.authorName}.jpg`}
        alt={article.authorName}
        width={50}
        height={50}
        className="rounded-full object-cover object-center size-12"
      />
      <Link href={`/authors/${article.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
      <p className="text-lg lg:text-xl hover:text-orange-500 font-semibold">
        {article.authorName}
      </p>
      </Link>
    </div>

    {/* Date + Read Time block */}
    <div className="w-full flex justify-between items-center lg:pl-0 lg:w-auto lg:justify-start gap-4 text-sm lg:text-base text-gray-500">

      <p>
        <CreationDate articleNumber={article.articleNumber} />
      </p>
      <p>
        Read Time: {article.readTime}
      </p>
    </div>
  </div>


          </div>

          <Image
            src={`/articles/${article.imgUrl}`}
            width={1000}
            height={1000}
            alt={article.title}
            className="w-full max-w-5xl mx-auto rounded-lg"
          />

<div className="text-black/85 tracking-normal mx-auto mt-6 text-lg leading-relaxed space-y-4 max-w-3xl">
            {article.contents.map((content, index) => {
              const isHeading = content.includes("***");
              if (isHeading) headingCount++;

              return (
                <React.Fragment key={index}>
                  {/* Show Trending Around the Web after 3rd heading */}
                  {headingCount === 3 && isHeading && (
                    <div className="mt-12 mb-10 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md  border border-gray-200">
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                      🌐 Trending Around the Web
                    </h3>
                    <div className="flex flex-col divide-y divide-gray-300">
                      {allArticles
                        .filter(
                          (post) =>
                            post.section === article.section && post.title !== article.title
                        )
                        .slice(0, 4)
                        .map((item, idx) => (
                          <Link
                            key={idx}
                            href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                            className="group hover:bg-orange-100/40 rounded-xl px-5 py-5 transition-all duration-300 ease-in-out flex items-center gap-4"
                          >
                            <div className="flex-shrink-0 text-orange-500 text-xl group-hover:scale-110 transition">
                              🔗
                            </div>
                            <p className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-orange-800">
                              {item.title}
                            </p>
                          </Link>
                        ))}
                    </div>
                  </div>
                  
                  
                  )}

                  {/* Show Discover More from Section after 5th heading */}
                  {headingCount === 4 && isHeading && (
                    <div className="mt-16 mb-14 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      💡 Discover More from <span className="text-orange-700">{article.section}</span>
                    </h3>
                  
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      {allArticles
                        .filter(
                          (post) =>
                            post.section === article.section &&
                            post.title !== article.title
                        )
                        .slice(4, 5)
                        .map((item, index) => (
                          <Link
                            key={index}
                            href={`/post/${item.title
                              .toLowerCase()
                              .trim()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/^-+|-+$/g, "")}`}
                            className="group flex items-center gap-4 w-full p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition duration-300 border border-gray-100 hover:shadow-md"
                          >
                            <Image
                              src={`/articles/${item.imgUrl}`}
                              alt={`Thumbnail for ${item.title}`}
                              width={100}
                              height={80}
                              className="rounded-lg object-cover w-[100px] h-[80px] shrink-0 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="text-left">
                              <p className="text-xs uppercase tracking-wide text-orange-600 font-medium mb-1">
                                {item.section}
                              </p>
                              <p className="text-base font-semibold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                                {item.title}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                  
                  )}

                  {/* Main Content Rendering */}
                  {/\.(jpg)$/i.test(content) ? (
                    <Image
                      width={600}
                      height={400}
                      src={`/articles/${content}`}
                      alt="Image"
                      className="mt-4 w-full rounded-lg"
                    />
                  ) : isHeading ? (
                    <strong className="block text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    <p>{content}</p>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <Newsletter/>

        <div className="max-w-4xl mx-auto mt-16 bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-10 shadow-2xl">
  <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center relative">
    Meet the Author
    <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
  </h2>

  <div className="flex flex-col sm:flex-row items-center gap-8">
    <Image
      src={`/authors/${article.authorName}.jpg`}
      alt={article.authorName}
      width={120}
      height={120}
      className="rounded-2xl object-cover shadow-md border-2 border-purple-400"
    />
    <div className="text-center sm:text-left text-gray-700 max-w-xl">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition cursor-pointer">
        {article.authorName}
      </h3>
      <p className="text-base text-gray-600 mb-4 leading-relaxed">
        {`Bringing words to life, ${article.authorName} crafts compelling narratives that inform, inspire, and ignite curiosity. Their work is a blend of depth, clarity, and creativity.`}
      </p>
      <Link
        href={`/authors/${article.authorName
          .replace(/[^A-Za-z0-9]+/g, "-")
          .toLowerCase()}`}
        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-md transition hover:scale-105"
      >
        Read Full Bio
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  </div>
</div>


        <div className="bg-gray-200 mt-20">
          <h2 className="text-black text-center font-bold tracking-wide text-3xl sm:text-4xl lg:text-5xl mb-8">
            Related Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
            {allArticles
              .filter(
                (post) =>
                  post.section === article.section &&
                  post.title !== article.title
              )
              .slice(0, 4)
              .map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="bg-grey-200  w-[330px]">
                    <Posts
                      pimg={`/articles/${post.imgUrl}`}
                      pheading={post.title}
                      pcontent={post.contents}
                      articleNumber={post.articleNumber}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div className="h-20 bg-gray-200"></div>
        <Footer />
      </div>
    </>
  );
};

export default PostPage;
