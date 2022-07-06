import React, { useState } from "react";
import { resetArrAC, setSizeOfArrAC, setSpeedAC } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { resetArr } from "../utils/reset";
import {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort,
  shakerSort,
  shellSort,
} from "../utils/sortingAlgs";
import { MAIN_COLOR } from "../utils/consts";
import "./Header.scss";

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
      case "insertion":
        insertionSort(array, speed, setIsRunning);
        break;
      case "quick":
        quickSort(array, speed, setIsRunning);
        break;
      case "merge":
        mergeSort(array, speed, setIsRunning);
        break;
      case "heap":
        heapSort(array, speed, setIsRunning);
        break;
      case "radix":
        radixSort(array, speed, setIsRunning);
        break;
      case "shell":
        shellSort(array, speed, setIsRunning);
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
              max={500}
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
        <button
          className="sort-button"
          onClick={() => sortAlg("insertion")}
          disabled={isRunning}
        >
          Insertion sort
        </button>
        <button
          className="sort-button"
          onClick={() => sortAlg("quick")}
          disabled={isRunning}
        >
          Quick sort
        </button>
        <button
          className="sort-button"
          onClick={() => sortAlg("merge")}
          disabled={isRunning}
        >
          Merge sort
        </button>
        <button
          className="sort-button"
          onClick={() => sortAlg("heap")}
          disabled={isRunning}
        >
          Heap sort
        </button>
        <button
          className="sort-button"
          onClick={() => sortAlg("radix")}
          disabled={isRunning}
        >
          Radix sort
        </button>
        <button
          className="sort-button"
          onClick={() => sortAlg("shell")}
          disabled={isRunning}
        >
          Shell sort
        </button>
      </div>
    </div>
  );
};

export default Header;
