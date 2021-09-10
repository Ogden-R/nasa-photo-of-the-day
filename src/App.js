import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/index';
import Header from './components/Header';
import Details from './components/Details';
import Photos from './components/Photos';



export default function App() {

const [nasaData, setNasaData] = useState({});

useEffect(() => {
  axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
  .then(res => {
    console.log(res);
    setNasaData(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}, [])

  return (
    <div className="App">
      <Header title ={nasaData.title}/>
      <Photos className="photo" img={nasaData.url}/>
      <div className="details-container">
        <Details explanation={nasaData.explanation} copyright={nasaData.copyright}/>
      </div>
    </div>
  );
}

