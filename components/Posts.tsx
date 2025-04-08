import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  articleNumber: number
}

const Posts: React.FC<PostProps> = ({ pimg, pheading , articleNumber}) => {
  // Get current date and subtract 2 days
  
  return (
    <div className="w-full   md:w-1/2 xl:w-1/4 flex justify-center md:justify-around items-center px-0 sm:px-0 md:px-4 py-2">
      
        <div className="bg-white p-2 lg:p-3 sm:p-3 md:p-4 rounded-md w-full md:w-auto">
          <Image
            src={pimg}
            className="h-[300px] sm:h-[300px] md:h-[250px] xl:h-[200px] w-full object-cover rounded"
            width={1000}
            height={1000}
            alt="Post Image"
            
            title="Post"
          />
          <h4 className="mt-3 text-xl sm:text-2  text-left text-black lg:w-[260px] md:w-[280px]  p-2 font-bold title-font mb-4">
            {pheading}
          </h4>
          <p className="text-gray-500 text-left text-sm p-2"> <CreationDate articleNumber={articleNumber}/></p>
        </div>
      
    </div>
  );
};

export default Posts;

 