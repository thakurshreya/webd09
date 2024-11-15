import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar"; 
import axios from "axios";
import "./gallery.css";

const Gallery = ({ setUser }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:8000/user/images")
      .then((response) => {
        
        setImages(response.data); 
      })
      .catch((error) => {
        console.error("There was an error fetching the images:", error);
      });
  }, []);

  console.log(images);

  const companies = ["At & T","Samsung","Nike","Air Jordans","FILA",
    "Chrome","Zoom","Oracle","PowerBI","Discord","Windows","Samsung",
    "VISA","Playstation","SONY","MasterCard" ,"Apple","TikTok","Snapchat","Youtube"]

  return (
      <div className="gallery-container">
        <Navbar setUser={setUser} />
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={`http://localhost:8000${image.url}`} alt={`Gallery item ${index}`} className="company-image"/>
              <div className="layer">
                <h3>{companies[index]}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Gallery;
