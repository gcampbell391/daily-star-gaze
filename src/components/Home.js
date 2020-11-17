import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import peyton from '../peyton.svg'
import galaxy from '../galaxy.svg'




const Home = () => {

    const [dailyImage, setDailyImage] = useState()


    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setDailyImage(data)
            })
    }, [])

    if (dailyImage === undefined) {
        return (
            <div className='home-not-loaded'>
                <h1 className="shimmer2" >Fetching Daily Image!</h1>
                <img src={galaxy} id='galaxy' alt='galaxy-loader' />
            </div>
        )
    }

    return (
        <div>
            <h1 className="shimmer" >Daily Star Gaze</h1>
            <img src={dailyImage.hdurl} id='home-daily-image' alt='daily star gaze' />
            <div className='daily-image-description'>
                <p id='daily-image-description-title'>{dailyImage.title}</p>
                <p id='daily-image-description-explanation'>{dailyImage.explanation}</p>
            </div>
            <hr id='hr' />
            <p id='star-title'>Created And Designed For My Niece. May You Continue To Reach For The Stars And Follow Your Dreams!</p>
            <img src={peyton} id='peyton-star' alt='Peyton-Star' />
            <p id='updated-title'>Updated On: {dailyImage.date.split('-')[1]}/{dailyImage.date.split('-')[2]}/{dailyImage.date.split('-')[0]}</p>
            <Footer />
        </div>
    )
}

export default Home