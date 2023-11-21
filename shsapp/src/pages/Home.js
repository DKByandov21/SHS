import React from "react";
import "../styles/home.css";
import "../resources/ImageCardOne.jpg";
import "../resources/SeaVideo.mp4";

function Home() {
  return (
    <div className="home">
      <div>
        <video className="video-banner" controls loop>
          <source src="../resources/SeaVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="first-cards">
        <div>
          <img src="https://via.placeholder.com/472" alt="Card1" />
          <div className="info-container">
            <h2>Card1</h2>
            <p>you can do that</p>
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/472" alt="Card1" />
          <div className="info-container">
            <h2>Card1</h2>
            <p>you can do that</p>
          </div>
        </div>
      </div>
      <div className="second-cards">
        <div>
          <img src="https://via.placeholder.com/315" alt="Card1" />
          <div className="info-container">
            <h2>Card1</h2>
            <p>you can do that</p>
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/315" alt="Card1" />
          <div className="info-container">
            <h2>Card1</h2>
            <p>you can do that</p>
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/315" alt="Card1" />
          <div className="info-container">
            <h2>Card1</h2>
            <p>you can do that</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
