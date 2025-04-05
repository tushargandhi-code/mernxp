import React from 'react';
import Image from 'next/image';

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
}

const Posts: React.FC<PostProps> = ({ pimg, pheading }) => {
  // Get current date and subtract 2 days
  const randomDaysAgo = Math.floor(Math.random() * 5) + 1;

const postDate = new Date();
postDate.setDate(postDate.getDate() - randomDaysAgo);

const formattedDate = postDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

  return (
    <div className="w-full lg:-mt-8 md:w-1/2 xl:w-1/4 flex justify-center md:justify-around items-center p-4">
      <div className="p-6">
        <div className="border-white rounded-md border-2 bg-white">
          <Image
            src={pimg}
            className="object-cover p-2 h-56"
            width={260}
            height={386}
            alt="Post Image"
            title="Post"
          />
          <h4 className="mt-3 text-xl text-left text-black w-[260px] p-2 font-bold title-font mb-4">
            {pheading}
          </h4>
          <p className="text-gray-500 text-left text-sm p-2"> {formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;

 