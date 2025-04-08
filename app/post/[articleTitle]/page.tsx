import Footer from "@/components/Footer";
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
// import Breadcrumb from '@/components/Breadcrumb';

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

  console.log(article);
  if (!article) return <h1>Post not found</h1>;

  return (
    <>
      <div className="bg-gray-200">
        <div className="text-black mt-20 bg-gray-200 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-6">
        {/* <div className="max-w-7xl text-black  px-42">
       <Breadcrumb />
        </div> */}
          <h1 className="text-3xl lg:mx-40 sm:text-4xl lg:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div
            className="flex flex-col lg:mx-40 sm:flex-row items-start sm:items-center gap-3 sm:gap-6 p-4 bg-gray-200 rounded-lg
            mb-6"
          >
            <div className="text-gray-800 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
    <div className="flex items-center gap-2">
      <Image
        src={`/authors/${article.authorName}.jpg`}
        alt=""
        width={50}
        height={50}
        className="rounded-full object-cover object-center size-12"
      />
      <p className="text-lg sm:text-xl font-semibold">
        {article.authorName}
      </p>
    </div>
    <p className="text-sm sm:text-base text-gray-500 ml-14 sm:ml-0">
      <CreationDate articleNumber={article.articleNumber} />
    </p>
  </div>

  <div className="  flex ml-14 lg:ml-0 justify-end ">
    <p className="text-sm sm:text-md ml-auto text-gray-500">
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

          <div className="text-black/85 tracking-normal mt-6 text-base sm:text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
            {article.contents.map((content, index) =>
              /\.(jpg)$/i.test(content) ? (
                <Image
                  key={index}
                  width={600}
                  height={400}
                  src={`/articles/${content}`}
                  alt="Image"
                  className="mt-4 w-full rounded-lg"
                />
              ) : (
                <p key={index}>
                  {content.includes("***") ? (
                    <strong className="block text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    content
                  )}
                </p>
              )
            )}
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
