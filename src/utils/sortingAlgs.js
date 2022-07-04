import { sortedFlagAC } from "../redux/reducer.js";
import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

export const bubbleSort = (array, speed, callback) => {
  let delay = 0; //increases every "animate" call at "speed"
  let bubbleArr = [...array];

  for (let i = 0; i < bubbleArr.length - 1; i++) {
    for (var j = 0; j < bubbleArr.length - i - 1; j++) {
      //debugger;
      //first push to change color
      animate(j, bubbleArr[j], CURRENT, (delay += speed));

      if (bubbleArr[j] > bubbleArr[j + 1]) {
        animate(j, bubbleArr[j], COMPARE, (delay += speed));
        animate(j + 1, bubbleArr[j + 1], COMPARE, (delay += speed));
        let temp = bubbleArr[j];
        bubbleArr[j] = bubbleArr[j + 1];
        bubbleArr[j + 1] = temp;
        //height push

        animate(j, bubbleArr[j], COMPARE, (delay += speed));
        animate(j + 1, bubbleArr[j + 1], COMPARE, (delay += speed));
      }
      animate(j, bubbleArr[j], MAIN_COLOR, (delay += speed));
    }
    animate(j, bubbleArr[j], COMPLETE, (delay += speed));
  }
  animate(0, bubbleArr[0], COMPLETE, (delay += speed));

  setTimeout(() => {
    callback(false);
  }, (delay += speed));
};

export const shakerSort = (array, speed, callback) => {
  let delay = 0;
  let shakerArr = [...array];
  let left = 0;
  let right = shakerArr.length - 1;
  while (left <= right) {
    for (var i = right; i > left; --i) {
      animate(i, shakerArr[i], CURRENT, (delay += speed));
      if (shakerArr[i - 1] > shakerArr[i]) {
        animate(i - 1, shakerArr[i - 1], COMPARE, (delay += speed));
        animate(i, shakerArr[i], COMPARE, (delay += speed));

        let temp = shakerArr[i];
        shakerArr[i] = shakerArr[i - 1];
        shakerArr[i - 1] = temp;

        animate(i - 1, shakerArr[i - 1], COMPARE, (delay += speed));
        animate(i, shakerArr[i], COMPARE, (delay += speed));
      }
      animate(i, shakerArr[i], MAIN_COLOR, (delay += speed));
      animate(i - 1, shakerArr[i - 1], MAIN_COLOR, (delay += speed));
    }
    ++left;
    animate(i, shakerArr[i], COMPLETE, (delay += speed));

    for (var k = left; k < right; ++k) {
      animate(k, shakerArr[k], CURRENT, (delay += speed));
      if (shakerArr[k] > shakerArr[k + 1]) {
        animate(k + 1, shakerArr[k + 1], COMPARE, (delay += speed));
        animate(k, shakerArr[k], COMPARE, (delay += speed));

        let temp = shakerArr[k];
        shakerArr[k] = shakerArr[k + 1];
        shakerArr[k + 1] = temp;

        animate(k + 1, shakerArr[k + 1], COMPARE, (delay += speed));
        animate(k, shakerArr[k], COMPARE, (delay += speed));
      }
      animate(k, shakerArr[k], MAIN_COLOR, (delay += speed));
      animate(k + 1, shakerArr[k + 1], MAIN_COLOR, (delay += speed));
    }
    animate(k, shakerArr[k], COMPLETE, (delay += speed));
    --right;
  }
  setTimeout(() => {
    callback(false);
  }, (delay += speed));
};
