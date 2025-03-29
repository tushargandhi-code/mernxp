import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Blogs from '../component/Blogs'
import Posts from '../component/Posts'
import Image from 'next/image'

const Sports = () => {
  return (
    <>
    <Header/>
    
    <div className='mt-40 text-black text-center mx-5 flex flex-col justify-center'>

        
        <h1 className='text-7xl'>Sports</h1>
        <p className = 'text-2xl italic mt-2'>Sports play a vital role in promoting physical fitness, teamwork, and discipline. Engaging in sports helps improve strength, endurance, and coordination while also reducing stress and enhancing mental well-being. Whether played individually or as part of a team, sports foster a sense of camaraderie, competition, and sportsmanship. They teach valuable life skills such as perseverance, leadership, and goal-setting. Additionally, sports contribute to a healthy lifestyle by encouraging regular physical activity and reducing the risk of various health conditions. Beyond fitness, sports bring people together, creating a sense of unity and excitement in communities worldwide.</p>
        
        <Image alt='hi' className='w-full  mt-3'
        width={100}
        height={100}
         src='https://c4.wallpaperflare.com/wallpaper/472/328/42/sport-athlete-1920x1080-wallpaper-preview.jpg'/>
        <Blogs title = "SPORTS" mainimg='data:image/webp;base64,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Zm9yIGEgcG9ydHJhaXQgZHVyaW5nIHRoZSBJQ0MgQ2hhbXBpb25zIFRyb3BoeSAyMDI1IFBvcnRyYWl0IFNlc3Npb24gb24gRmVicnVhcnkgMTcsIDIwMjUgaW4gRHViYWksIFVuaXRlZCBBcmFiIEVtaXJhdGVzLiAoUGhvdG8gYnkgQWxleCBEYXZpZHNvbi1JQ0MvSUNDIHZpYSBHZXR0eSBJbWFnZXMpMjAyNSBJQ0MsAQAAAQAAACwBAAABAAAAAFhNUCBoBgAAaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyNSBJQ0MiIHBob3Rvc2hvcDpDcmVkaXQ9IklDQyB2aWEgR2V0dHkgSW1hZ2VzIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMjIwMDI2NDIzNCIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiIHBsdXM6RGF0YU1pbmluZz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi92b2NhYi9ETUktUFJPSElCSVRFRC1FWENFUFRTRUFSQ0hFTkdJTkVJTkRFWElORyIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPkFsZXggRGF2aWRzb24tSUNDPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5EVUJBSSwgVU5JVEVEIEFSQUIgRU1JUkFURVMgLSBGRUJSVUFSWSAxNzogVmlyYXQgS29obGkgb2YgSW5kaWEgcG9zZXMgZm9yIGEgcG9ydHJhaXQgZHVyaW5nIHRoZSBJQ0MgQ2hhbXBpb25zIFRyb3BoeSAyMDI1IFBvcnRyYWl0IFNlc3Npb24gb24gRmVicnVhcnkgMTcsIDIwMjUgaW4gRHViYWksIFVuaXRlZCBBcmFiIEVtaXJhdGVzLiAoUGhvdG8gYnkgQWxleCBEYXZpZHNvbi1JQ0MvSUNDIHZpYSBHZXR0eSBJbWFnZXMpPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9kZXRhaWwvMjIwMDI2NDIzND91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybDwvcGx1czpMaWNlbnNvclVSTD48L3JkZjpsaT48L3JkZjpTZXE+PC9wbHVzOkxpY2Vuc29yPgoJCTwvcmRmOkRlc2NyaXB0aW9uPgoJPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/Pgo='
 maintitle='VIRAT KOHLI' maincontent='Virat kohli is best in the india as well as in world also' author='Moksha Shivlani'
 days='2 weeks ago'/>

<div className="flex flex-wrap mr-32 -mt-16  justify-center gap-x-4">
 
 <Posts pimg='https://img.mensxp.com/media/content/2025/Mar/header_67e640d6e98b1.jpeg?w=325&h=483&cc=1'
 pheading='CRICKET'  pcontent1='IPL 2025: Who Is ' pcontent2='Prince Yadav? Bowler'
  pcontent3='with 1 First-Class Scalp'/>


<Posts pimg='https://img.mensxp.com/media/content/2023/Dec/intro_658037246b75e.jpeg?w=325&h=483&cc=1'
 pheading='CRICKET'  pcontent1='Who Is Captain' pcontent2='Cool MS Dhonis'
  pcontent3='Only International Wicket'/>


<Posts pimg='https://img.mensxp.com/media/content/2024/Feb/1_65e057195c2a8.jpeg?w=325&h=483&cc=1'
 pheading=' CRICKET'  pcontent1='IPL: THIS Bowler' pcontent2='Got A Wicket With What'
  pcontent3='Was His 1st & Last Ball'/>

<Posts pimg='https://img.mensxp.com/media/content/2024/Apr/Cricket-Stadium_66272eafa9975.jpeg?w=325&h=483&cc=1'
 pheading='CRICKET'  pcontent1='Triple Happiness! 3 ' pcontent2='Batters Who Converted'
  pcontent3='1st Test 100s Into 300s'/>

 
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Sports
