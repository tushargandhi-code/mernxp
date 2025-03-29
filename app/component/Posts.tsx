import React from 'react'
import Image from 'next/image'

const Posts = ({pimg , pheading , pcontent1 , pcontent2 , pcontent3}
     : {pimg:string , pheading:string , pcontent1:string , pcontent2:string , pcontent3:string}) => {
  return (
    
      <div className="xl:w-1/4 ml-10 flex -mr-28   justify-center  md:w-1/2 p-4">
    <div className="p-6  rounded-lg">
      <Image
        src={pimg}
        className="content"
        width="260"
        height="386"
        alt="Ranveer Singh, Vedang Raina"
        title="MensXP"
      />
      <h4 className="text-sm mt-3 text-gray-400 font-medium title-font mb-4">
        {pheading}
      </h4>
      <p className="leading-relaxed text-black font-semibold">
        {pcontent1} 
      </p>
      <p className="leading-relaxed text-black font-semibold">
         {pcontent2}
      </p>
      <p className="leading-relaxed text-black font-semibold">
         {pcontent3}
      </p>
      
    </div>
  </div>

   
  )
}

export default Posts
