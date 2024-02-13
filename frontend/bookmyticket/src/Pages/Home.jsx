import React from "react";

const Home = () => {
  return (
    <div>
      <div className="movie-container">
        <label> Select a movie:</label>
        <select id="movie">
          <option value="220">Gadar 2 (RS.220)</option>
          <option value="200">OMG 2 (RS.200)</option>
          <option value="250">Jailer (RS.250)</option>
        </select>
      </div>
      {/* <!--Showcase--> */}
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat sold"></div>
          <small>Sold</small>
        </li>
      </ul>

      {/* <!--Main Container--> */}
      <div className="container">
        <div className="screen"></div>

        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat sold"></div>
          <div className="seat sold"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat sold"></div>
          <div className="seat sold"></div>
        </div>

        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat sold"></div>
          <div className="seat sold"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat sold"></div>
          <div className="seat sold"></div>
          <div className="seat sold"></div>
          <div className="seat"></div>
        </div>
      </div>

      <p className="text">
        You have selected <span id="count">0</span> seat for a price of RS.
        <span id="total">0</span>
      </p>
    </div>
  );
};

export default Home;
