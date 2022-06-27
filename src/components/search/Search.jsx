import React, { useState } from "react"
import { FaSistrix } from "react-icons/fa"
import "./Search.css"

function Search({ getCity }) {
  const [city, setCity] = useState("")

  const getData = (e) => {
    e.preventDefault()
    const data = city
    //console.log(data)
    setCity("")
    getCity(data)
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={city}
        onChange={(e) => {
          setCity(e.target.value)
        }}
      />
      <button className="btn" onClick={getData}>
        <FaSistrix />
      </button>
    </div>
  )
}

export default Search
