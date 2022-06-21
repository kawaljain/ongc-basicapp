import React, { useEffect, useState } from "react";

import Map from "mapmyindia-react";

import "./style.css";

export default function AddressUI(props) {
  const [position, setPosition] = useState("");

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      (err) => {
        alert("Kindly enable the location.");
        console.log("k");
        console.log(err);
      }
    );
  };

  return (
    <>
      {lat && long ? (
        <div className="mapContainer">
          <Map
            markers={[
              {
                position: [lat, long],
                draggable: true,
                title: "Marker title",
                onClick: (e) => {
                  // setLat(e.target._latlng.lat);
                  // setLong(e.target._latlng.lng);
                  //   console.log("clicked ");
                },
                onDragend: (e) => {
                  // e.preventDefault();
                  //   console.log(e);
                  // console.log(e.target);
                  // setLat(e.target._latlng.lat);
                  // setLong(e.target._latlng.lng);

                  props.savePosition(
                    e.target._latlng.lat,
                    e.target._latlng.lng
                  );
                  //   console.log("dragged");
                },
              },
            ]}
          />
        </div>
      ) : null}
    </>
  );
}
