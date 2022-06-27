import React, { useEffect, useState } from "react"
import "./Card.css"

function Card({ weatherData }) {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    getTime()
    getDate()
  }, [weatherData])

  const getTime = () => {
    let today = new Date()
    let todayTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    setTime(todayTime)
  }
  const getDate = () => {
    let today = new Date()
    let day =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    setDate(day)
  }
  const celcius = (kelvin) => {
    const cel = Math.round(kelvin - 273.15)
    return cel
  }

  const getWeatherIcon = (iconParameter) => {
    const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`
    return <img src={icon} alt="" />
  }

  return (
    <div className="wrapper">
      <div className="widget-container">
        <div className="top-left">
          <h1 className="city" id="city">
            {weatherData.name}
          </h1>
          <h3 id="date">{date}</h3>
          <h3 id="time">{time}</h3>
        </div>
        <div className="top-right">
          {getWeatherIcon(weatherData.weather[0].icon)}
        </div>
        <div className="horizontal-half-divider"></div>
        <div className="bottom-left">
          <h2 id="temperature">{celcius(weatherData.main.temp)}&deg;C</h2>
          <p className="condition">{weatherData.weather[0].description}</p>
        </div>
        <div className="vertical-half-divider"></div>
        <div className="bottom-right">
          <p>Feels Like : {celcius(weatherData.main.feels_like)}&deg;C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
