import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { resetArr } from "./utils/reset";
import { useDispatch, useSelector } from "react-redux";
import { resetArrAC } from "./redux/reducer";

function App() {
  const dispatch = useDispatch();
  const sizeOfArray = useSelector((state) => state.reducer.sizeOfArray);
  useEffect(() => {
    dispatch(resetArrAC(resetArr(sizeOfArray)));
  }, []);

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
