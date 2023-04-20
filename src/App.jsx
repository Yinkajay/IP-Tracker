import React from 'react'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
// import { MapContainer, TileLayer, useMap, } from 'https://cdn.esm.sh/react-leaflet'
// import { render } from 'react-dom'
// import { Marker, Popup } from 'react-leaflet'

function App() {
  // const [position, setPosition] = useState([51.505, -0.09])
  // const [mapVar, setMapVar] = useState('')

  // useEffect(() => {
  //   let ourMap = L.map('mapView').setView([51.505, -0.09], 13);
  //   setMapVar(ourMap)
  // }, [])

  let position = [51.505, -0.09]


  return (
    <div className="App" >
      <div  >
        <MapContainer style={{width :'400px', height:'40vh', border: '1px solid'}} center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  )
}

export default App
