import React, { useState, useEffect } from "react";
import PhotoList from "./pages/PhotoList";

import "./App.scss";
import iconSpace from "./images/solar-system.png";

export default function App() {
  const [photosData, setPhotosData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);

    fetch(`https://api.nasa.gov/planetary/apod?count=20&thumbs=true&api_key=iaee5eHCicelLD1m96VDlXMammDlOkPcYRyhw49A`)
      .then( res => res.json() )
      .then( data => setPhotosData(data) )
      .finally( () => { setLoading(false) })
  }, [])

  return (
    <div className="app__container">
      <header>
        <h1>Spacestagram</h1>
        <span>Image-sharing from the final frontier</span>   
      </header>

      {loading && <div className="app__loading"><img src={iconSpace} alt="loading" /></div>}

      <PhotoList photosData={photosData} />
    </div>
  );
}