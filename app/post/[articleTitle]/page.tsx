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

  // Get the date two days before the current date
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 2);
  const formattedDate = currentDate.toDateString();

  return (
    <>
      <div className="bg-gray-200">
        <Header />
        <div className="text-black mt-20 bg-gray-200 p-6">
          <h1 className="text-5xl mx-60 font-bold">{article.title}</h1>

          <div className="flex items-center mx-60 mt-2 space-x-3 p-4 bg-gray-200 rounded-lg shadow-md">
            <div className="text-gray-800">
              <p className="text-xl font-semibold">{article.authorName}</p>
              <p className="text-md mt-2 text-gray-500">Date: {formattedDate}</p>
              <p className="text-md mt-2 text-gray-500">
                Read Time: {article.readTime}
              </p>
            </div>
          </div>
          <Image
            src={`/articles/${article.imgUrl}`}
            width={1000}
            height={1000}
            alt={article.title}
            className="mx-auto rounded-lg"
          />

          <div className="max-w-2xl text-black/85 tracking-normal mx-auto mt-6">
            {article.contents.map((content, index) =>
              /\.(jpg)$/i.test(content) ? (
                <Image
                  key={index}
                  width={2}
                  height={2}
                  src={`/articles/${content}`}
                  alt="Image"
                  className="mt-2"
                />
              ) : (
                <p key={index} className="mt-2 text-xl">
                  {content.includes("***") ? (
                    <strong className="mt-12 block text-4xl">
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
          <h2 className="text-black ml-50 font-bold tracking-wide text-5xl">
            Related Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
            {allArticles.slice(5, 9).map((post, index) => (
              <Link key={index} href={`/post/${index}`} passHref>
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

        <Footer />
      </div>
    </>
  );
};

export default PostPage;
