import React, { useEffect, useState } from "react";
import "./style.css";
import { useGeolocated } from "react-geolocated";

import Map from "mapmyindia-react";

export default function AddressUI(props) {

    const [search, setSearch] = useState('');
    const [co,setCo]=useState(0);
    const [position, setPosition] = useState('');

    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');


    useEffect(()=> {
        p();
    },[])

    const p = async () => {
        await navigator.geolocation.getCurrentPosition(
          position => setPosition(position)
        , 
          err => console.log(err)
        );

      }

      

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });


    // const handlePlaceHolderChange = (e) => {
    //     e.preventDefault();
    //     let search= e.target.value;
    //     setSearch(search);

    // }

    // console.log(coords)
    // console.log(geo)
    // console.log(navigator);
  return(
      <>
      {/* <Map
          markers={[
              {
                  position: [18.5314, 73.845],
                  draggable: true,
                  title: "Marker title",
                  onClick: e => {
                      console.log("clicked ");
                  },
                  onDragend: e => {
                      console.log("dragged");
                  }
              }
          ]}
          /> */}
     {!isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : coords ? (
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{coords.speed}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <div>Getting the location data&hellip; </div>
        )
     }

      </>
  )
  

}


