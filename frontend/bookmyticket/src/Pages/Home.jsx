import React, { useState } from "react";

const Home = () => {
  const [selectMovie, setSelectMovie] = useState("");
  const [seatArr, setSeatArr] = useState([]);
  const [seat, setSeat] = useState();

  if (seat) {
    seatArr.push(seat);
  }
  console.log(seatArr);

  console.log(selectMovie);
  console.log(seat);
  return (
    <div>
      <div className="movie-container">
        <label> Select a movie:</label>
        <select id="movie" onChange={(e) => setSelectMovie(e.target.value)}>
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
          <div onClick={() => setSeat(2)} className="seat"></div>
          <div onClick={() => setSeat(3)} className="seat"></div>
          <div onClick={() => setSeat(4)} className="seat"></div>
          <div onClick={() => setSeat(5)} className="seat"></div>
          <div onClick={() => setSeat(6)} className="seat"></div>
          <div onClick={() => setSeat(7)} className="seat"></div>
          <div onClick={() => setSeat(8)} className="seat"></div>
          <div onClick={() => setSeat(9)} className="seat"></div>
        </div>
        <div className="row">
          <div onClick={() => setSeat(10)} className="seat"></div>
          <div onClick={() => setSeat(11)} className="seat"></div>
          <div onClick={() => setSeat(12)} className="seat"></div>
          <div onClick={() => setSeat(13)} className="seat sold"></div>
          <div onClick={() => setSeat(14)} className="seat sold"></div>
          <div onClick={() => setSeat(15)} className="seat"></div>
          <div onClick={() => setSeat(16)} className="seat"></div>
          <div onClick={() => setSeat(17)} className="seat"></div>
        </div>
        <div className="row">
          <div onClick={() => setSeat(18)} className="seat"></div>
          <div onClick={() => setSeat(19)} className="seat"></div>
          <div onClick={() => setSeat(20)} className="seat"></div>
          <div onClick={() => setSeat(21)} className="seat"></div>
          <div onClick={() => setSeat(22)} className="seat"></div>
          <div onClick={() => setSeat(23)} className="seat"></div>
          <div onClick={() => setSeat(24)} className="seat sold"></div>
          <div onClick={() => setSeat(25)} className="seat sold"></div>
        </div>
        <div className="row">
          <div onClick={() => setSeat(26)} className="seat"></div>
          <div onClick={() => setSeat(27)} className="seat"></div>
          <div onClick={() => setSeat(28)} className="seat"></div>
          <div onClick={() => setSeat(29)} className="seat"></div>
          <div onClick={() => setSeat(30)} className="seat"></div>
          <div onClick={() => setSeat(31)} className="seat"></div>
          <div onClick={() => setSeat(32)} className="seat"></div>
          <div onClick={() => setSeat(33)} className="seat"></div>
        </div>
        <div className="row">
          <div onClick={() => setSeat(34)} className="seat"></div>
          <div onClick={() => setSeat(35)} className="seat"></div>
          <div onClick={() => setSeat(36)} className="seat"></div>
          <div onClick={() => setSeat(37)} className="seat sold"></div>
          <div onClick={() => setSeat(38)} className="seat sold"></div>
          <div onClick={() => setSeat(39)} className="seat"></div>
          <div onClick={() => setSeat(40)} className="seat"></div>
          <div onClick={() => setSeat(41)} className="seat"></div>
        </div>
        <div className="row">
          <div onClick={() => setSeat(42)} className="seat"></div>
          <div onClick={() => setSeat(43)} className="seat"></div>
          <div onClick={() => setSeat(44)} className="seat"></div>
          <div onClick={() => setSeat(45)} className="seat"></div>
          <div onClick={() => setSeat(46)} className="seat sold"></div>
          <div onClick={() => setSeat(47)} className="seat sold"></div>
          <div onClick={() => setSeat(48)} className="seat sold"></div>
          <div onClick={() => setSeat(49)} className="seat"></div>
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
