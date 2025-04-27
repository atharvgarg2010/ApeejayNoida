import React from 'react';
import Building from '../Images/BuildingMain.png'; // Adjust the path as necessary
import './Home.css'

function Future2050Banner() {
  return (
    <div className="homepage-container" id='Home'>
      {/* Overlay Text Behind Image */}
      <div className="overlay-text">
        <h1 className="main-title hello">2050</h1>
      </div>

      {/* Foreground Image */}
      <img
        src={Building}
        alt="Futuristic Building"
        className="background-image "
      />
      <div className="overlay-text">
        <h1 className="title hello">Admissions Open Now
          <button className="enroll">Enroll now</button>
        </h1>

      </div>
    </div>

  );
}
export default  Future2050Banner;