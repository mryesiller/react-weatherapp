import { useState } from "react"
import axios from "axios"
import "./App.css"
import Search from "./components/search/Search"
import Card from "./components/Card/Card"

const api = process.env.REACT_APP_API_KEY

function App() {
  const [data, setData] = useState({ weatherData: null })

  const getCity = (cityName) => {
    if (cityName) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`
        )
        .then((response) => {
          setData({ weatherData: response.data })
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
    }
  }

  return (
    <div className="App">
      <Search getCity={getCity} />
      {data.weatherData ? <Card weatherData={data.weatherData} /> : <div></div>}
    </div>
  )
}

export default App
