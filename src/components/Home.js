import React, { useEffect, useState } from "react"
import Footer from "./Footer"



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
            <h1 className="shimmer" >Daily Star Gaze</h1>
        )
    }

    return (
        <div>
            <h1 className="shimmer" >Daily Star Gaze</h1>
            <img src={dailyImage.hdurl} id='home-daily-image' alt='daily star gaze' />
            <div className='daily-image-description'>
                <p>{dailyImage.title}</p>
                <p>{dailyImage.explanation}</p>
                <p>Last Updated: {dailyImage.date.split('-')[1]}/{dailyImage.date.split('-')[2]}/{dailyImage.date.split('-')[0]}</p>
            </div>
            <img src={require("../images/peyton.svg")} />
            <Footer />
        </div>
    )
}

export default Home