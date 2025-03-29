import React from 'react'
import Image from 'next/image'

const Posts = ({pimg , pheading , pcontent}
     : {pimg:string , pheading:string , pcontent:string[]}) => {
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
      {}
      
        {/* {pcontent.map((pst)=>(
          <p className=" line-clamp-2  text-black font-semibold">{pst}</p>
        ))}  */}
     {
      <p className='text-black line-clamp-4'>{pcontent[0]}</p>
     } 
      
      
    </div>
  </div>

   
  )
}

export default Posts
