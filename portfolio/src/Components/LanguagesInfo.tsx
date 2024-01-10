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
                        <h1 style={{fontSize: "21px", textAlign: "center", marginTop: "30px"}}>
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
                            I started learning the language since 8th grade. It was quite difficult at first, but after learning it for 3 years it started to get easier. Now I can say that I can work in c. 
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
                            I started learning the language since 8th grade. It was quite difficult at first, but after learning it for 3 years it started to get easier. Now I can say that I can work in c. 
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
                        <h1 style={{fontSize: "21px", textAlign: "center", marginTop: "30px"}}>
                            I started learning the language since 8th grade. It was quite difficult at first, but after learning it for 3 years it started to get easier. Now I can say that I can work in c. 
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
                            I started learning the language since 8th grade. It was quite difficult at first, but after learning it for 3 years it started to get easier. Now I can say that I can work in c. 
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
                            I started learning the language since 8th grade. It was quite difficult at first, but after learning it for 3 years it started to get easier. Now I can say that I can work in c. 
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
