import React from "react";
import { useSelector } from "react-redux";
import './Body.scss'

const Body = () => {
  const arrOfNum = useSelector((state) => state.reducer.array);
  const sizeOfArray = useSelector((state) => state.reducer.sizeOfArray);

  return (
    <div className="pillar-container">
      {arrOfNum &&
        arrOfNum.map((el, id) => (
          <div
            key={id}
            className="pillar"
            style={{
              height: `${(el / 200) * 99}%`,
              width: `${(sizeOfArray / 100) * 99}%`,
            }}
          ></div>
        ))}
    </div>
  );
};

export default Body;
