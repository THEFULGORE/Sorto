import React, { useState } from "react";
import { resetArrAC, setSizeOfArrAC, setSpeedAC } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import { resetArr } from "../utils/reset";
import { bubbleSort, shakerSort } from "../utils/sortingAlgs";
import { MAIN_COLOR } from "../utils/consts";

const Header = () => {
  const [isRunning, setIsRunning] = useState(false);
  const dispatch = useDispatch();
  const speed = useSelector((state) => state.reducer.animationSpeed);
  const array = useSelector((state) => state.reducer.array);
  const sizeOfArray = useSelector((state) => state.reducer.sizeOfArray);

  const handleSpeedChange = (e) => {
    dispatch(setSpeedAC(+e.target.value));
  };

  const handleSizeChange = (e) => {
    dispatch(setSizeOfArrAC(+e.target.value));
    resetArray();
  };

  const resetArray = () => {
    const bars = document.getElementsByClassName("pillar");
    for (let element of bars) {
      element.style.backgroundColor = MAIN_COLOR;
    }
    dispatch(resetArrAC(resetArr(sizeOfArray)));
  };

  const sortAlg = (type) => {
    setIsRunning(true);
    switch (type) {
      case "bubble":
        bubbleSort(array, speed, setIsRunning);
        break;
      case "shaker":
        shakerSort(array, speed, setIsRunning);
        break;
    }
  };

  return (
    <div className="header">
      <h1>Sorto</h1>
      <button
        className="reset-button"
        onClick={() => resetArray()}
        disabled={isRunning}
      >
        Reset
      </button>
      <div className="params">
        <div className="sliders-container">
          <div className="sliders">
            <input
              type="range"
              className="sliders__input"
              min={1}
              max={100}
              value={speed}
              name="speed"
              onChange={handleSpeedChange}
              disabled={isRunning}
            />
            <h3>Speed</h3>
          </div>
          <div className="sliders">
            <input
              type="range"
              className="sliders__input"
              min={20}
              max={200}
              value={sizeOfArray}
              name="size"
              onChange={handleSizeChange}
              disabled={isRunning}
            />
            <h3>Size</h3>
          </div>
        </div>
      </div>
      <div className="sorts">
        <button
          className="sort-button"
          onClick={() => sortAlg("bubble")}
          disabled={isRunning}
        >
          Bubble sort
        </button>
        <button
          className="sort-button"
          onClick={() => sortAlg("shaker")}
          disabled={isRunning}
        >
          Shaker sort
        </button>
        <button className="sort-button">Insertion sort</button>
        <button className="sort-button">Quick sort</button>
        <button className="sort-button">Merge sort</button>
        <button className="sort-button">Heap sort</button>
        <button className="sort-button">Radix sort</button>
        <button className="sort-button">Shell sort</button>
      </div>
    </div>
  );
};

export default Header;
