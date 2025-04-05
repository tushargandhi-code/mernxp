import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

const PostPage = async ({ params }: { params: Promise<{ articleTitle: string }> }) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  console.log(article);
  if (!article) return <h1>Post not found</h1>;

  const randomDaysAgo = Math.floor(Math.random() * 5) + 1;

const postDate = new Date();
postDate.setDate(postDate.getDate() - randomDaysAgo);

const formattedDate = postDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

  return (
    <>
      <div className="bg-gray-200">
        <Header />
        <div className="text-black mt-20 bg-gray-200 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-6">
          <h1 className="text-3xl lg:mx-40 sm:text-4xl lg:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex flex-col lg:mx-40 sm:flex-row items-start sm:items-center gap-3 sm:gap-6 p-4 bg-gray-200 rounded-lg shadow-md mb-6">
            <div className="text-gray-800">
              <div className="flex">
              <Image 
                              src={`/authors/${article.authorName}.jpg`} 
                              alt="" 
                              width={50} 
                              height={50} 
                              className="rounded-full object-cover"
                />
              <p className="text-lg sm:text-xl mt-3 ml-3 font-semibold">
                {article.authorName}
              </p>
              </div>
              <p className="text-sm sm:text-md mt-2 text-gray-500">
                 {formattedDate}
              </p>
              <p className="text-sm sm:text-md mt-2 text-gray-500">
                Read Time: {article.readTime}
              </p>
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
            {allArticles.slice(5, 9).map((post, index) => (
              <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
                <div className="bg-grey-200 w-[330px]">
                  <Posts
                    pimg={`/articles/${post.imgUrl}`}
                    pheading={post.title}
                    pcontent={post.contents}
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
