import React, { useEffect, useState } from 'react'
import '../cssFiles/languagesInfo.css'
import cLogo from '../assets/C_Logo.png'
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import cppLogo from '../assets/C++_Logo.png'
import pythonLogo from '../assets/pythonLogo.png'
import javaLogo from '../assets/javaLogo.png'
import flutterLogo from '../assets/flutterLogo.png'
import reactLogo from '../assets/reactLogo.png'
const LanguagesInfo = () => {

    const [sliderIndex, setIndex] = useState(1);
    
    const handleLeft = () => {
        if(sliderIndex === 1)
            setIndex(6);
        else
            setIndex(sliderIndex - 1);
    }

    const handleRight = () => {
        if(sliderIndex === 6)
            setIndex(1);
        else
            setIndex(sliderIndex + 1);
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          handleRight(); 
        }, 5000);
    
       
        return () => clearInterval(intervalId);
      }, [sliderIndex]);

    return (
        <div className='LanguagesInfoField'>
            {
                sliderIndex === 1 && 
                <>
                    <img src={cLogo} alt="" className='LanguagesIMG'/>
                    <div className='LanguagesInfo'>
                        <h1 style={{fontSize: "30px"}}>
                            Learning proccess: 
                        </h1>
                        <h1 style={{fontSize: "21px", textAlign: "center", marginTop: "10px"}}>
                            I started learning the language since 8th grade. It was quite difficult at first, but after learning it for 3 years it started to get easier. Now I can say that I can work in c. 
                        </h1>
                    </div>
                </>
            }
            {
                sliderIndex === 2 && 
                <>
                    <img src={cppLogo} alt="" className='LanguagesIMG'/>
                    <div className='LanguagesInfo'>
                        <h1 style={{fontSize: "30px"}}>
                            Learning proccess: 
                        </h1>
                        <h1 style={{fontSize: "21px", textAlign: "center", marginTop: "30px"}}>
                            I started learning c++ in tenth grade. I've had some great homework over the years, but I haven't shown them here. My impressions of c++ are pretty good and I quite like it. 
                        </h1>
                    </div>
                </>
            }
            {
                sliderIndex === 3 && 
                <>
                    <img src={pythonLogo} alt="" className='LanguagesIMG'/>
                    <div className='LanguagesInfo'>
                        <h1 style={{fontSize: "30px"}}>
                            Learning proccess: 
                        </h1>
                        <h1 style={{fontSize: "21px", textAlign: "center", marginTop: "30px"}}>
                         Python was the third language I started with. Compared to c and c++ it seemed pretty easy and simple. But then I realized that python is a pretty nice language because you can do a lot of things with it. I haven't had any big python projects, but I've used it for quite a few small ones and I definitely like it. 
                        </h1>
                    </div>
                </>
            }
            {
                sliderIndex === 4 && 
                <>
                    <img src={javaLogo} alt="" className='LanguagesIMG'/>
                    <div className='LanguagesInfo'>
                        <h1 style={{fontSize: "30px"}}>
                            Learning proccess: 
                        </h1>
                        <h1 style={{fontSize: "21px", textAlign: "center", marginTop: "20px"}}>
                            Java is my favorite language. What I like most is how many things you can do with it. I also like how tidy it is and how much potential it has. I've had quite a few big home runs with java as my hardest ones have been synchronizing processes. From the experiences I've had so far, I can say it's my favorite programming language.  
                        </h1>
                    </div>
                </>
            }
            {
                sliderIndex === 5 && 
                <>
                    <img src={flutterLogo} alt="" className='LanguagesIMG'/>
                    <div className='LanguagesInfo'>
                        <h1 style={{fontSize: "30px"}}>
                            Learning proccess: 
                        </h1>
                        <h1 style={{fontSize: "21px", textAlign: "center", marginTop: "30px"}}>
                           Flutter is one of the last languages I've picked up. I first wrote in it at Hack TUES 2023. It has a lot of good features, but I like the next language I've marked much better. While not as bad I wouldn't write many more projects in flutter. 
                        </h1> 
                    </div>
                </>
            }
            {
                sliderIndex === 6 && 
                <>
                    <img src={reactLogo} alt="" className='LanguagesIMG'/>
                    <div className='LanguagesInfo'>
                        <h1 style={{fontSize: "30px"}}>
                            Learning proccess: 
                        </h1>
                        <h1 style={{fontSize: "21px", textAlign: "center", marginTop: "30px"}}>
                            React JS is the last programming language I have studied. I've been writing in it every day since I picked it up. My thesis is in this language and a lot of other projects too. I can say it's my favorite front end programming language.
                        </h1>
                    </div>
                </>
            }



            <div className='InfoHomeSlider'>
                <div style = {{display:"flex", gap:"10px", justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ fontWeight: 'bold', color: 'black', fontSize: sliderIndex === 1 ? '30px' : '25px'}}>
                        .
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'black', fontSize: sliderIndex === 2 ? '30px' : '25px'}}>
                        .
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'black', fontSize: sliderIndex === 3 ? '30px' : '25px'}}>
                        .
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'black', fontSize: sliderIndex === 4 ? '30px' : '25px'}}>
                        .
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'black', fontSize: sliderIndex === 5 ? '30px' : '25px'}}>
                        .
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'black', fontSize: sliderIndex === 6 ? '30px' : '25px'}}>
                        .
                    </div>
                </div>
                <div style = {{display:"flex", gap:"90px"}}>
                    <MdKeyboardArrowLeft style={{fontSize: 20, color: "black"}} onClick={handleLeft}/>
                    <MdChevronRight style={{fontSize: 20, color: "black"}} onClick={handleRight}/>
                
                </div>  
            </div>  

        </div>
    )
}

export default LanguagesInfo
