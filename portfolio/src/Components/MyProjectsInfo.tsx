import React, { useState } from 'react'
import alertIcon from '../assets/alert_icon.png'
import ecowareIcon from '../assets/Ecoware.png' 
import dishwasherIcon from '../assets/dishawasher2.0.png'
type Props = {
  projectName: string
}

const MyProjectsInfo = ({projectName} : Props) => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  React.useEffect(() => {

    window.addEventListener("resize", () => setViewportWidth(window.innerWidth));
   

  }, []);


  return (
    <div>
        {
          projectName === "Alert" && 
          <div className='MyProjectField'>
            <div>
              <h1 className='projectInfoText'>
                Alert is a mobile app that was developed during Hack TUES 2023. The theme of the app is safety. Its purpose is to inform people around an accident about it and if someone has the opportunity to go help. There are a lot of different alerts you can use to flag the accident itself. Also people who are your friends in the app whether they are close or not will get the message that you are in danger
              </h1>
              <h1>
                <a href="" className='githubLink'>Link for github</a>
              </h1>
            </div>

              <div className='projectIMG'>
                <img src={alertIcon} alt="Alert Icon " />
              </div>
          </div>
        }
        {
          projectName === "Ecoware" && 
          <div className='MyProjectField'>
            <div>
              <h1 className='projectInfoText'>
                Ecoware is a start up that me and a few other friends started. Our idea is to recycle plastic bottles and in return people get money in our app. On our app there are all sorts of vouchers and rewards you can buy with these points. There's also a donation section where you donate the virtual money collected from bottles you've returned to shops. Our idea is to work with the small shops so we bring them customers and advertising because they are on the card in the app. Our big success in the past year 2023 is that we launched the app on google play and we also started talking to shops some of which liked the idea and we are in the process of starting to work with them.   
              </h1>
              <h1>
                <a href="https://play.google.com/store/apps/details?id=com.ecoware.EcoWare&pli=1" className='githubLink'>Link for google play</a>
              </h1>
            </div>
            <div className='projectIMG'>
              <img src={ecowareIcon} alt="Ecoware Icon " />
            </div>
          </div>
        }
                {
          projectName === "DishWasher" && 
          <div className='MyProjectField'>
            <div>
              <h1 className='projectInfoText'>
                We had a lot of interesting projects this past 2023, but one of the most interesting was the dishwasher. Yes we made an entire dishwasher out of broken parts. We worked on it for a few months and it all came together in the end and at the end of the term we presented a working dishwasher at TUES Fest 2023. The project was quite interesting as we wrote the code in c and learned a lot about circuitry, power supplies, different mcu's and what stages you have to go through to create something like this. 
              </h1>

            </div>
            <div className='projectIMG'>
              <img src={dishwasherIcon} alt="Dishwwasher Icon " />
            </div>
          </div>
        }
                {

        }
    </div>
  )
}

export default MyProjectsInfo
