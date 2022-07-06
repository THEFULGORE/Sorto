import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

export const bubbleSort = (array, speed, callback) => {
  let delay = 0; //increases every "animate" call at "speed"
  let bubbleArr = [...array];

  for (let i = 0; i < bubbleArr.length - 1; i++) {
    for (var j = 0; j < bubbleArr.length - i - 1; j++) {
      animate(j, bubbleArr[j], CURRENT, (delay += speed));

      if (bubbleArr[j] > bubbleArr[j + 1]) {
        animate(j, bubbleArr[j], COMPARE, (delay += speed));
        animate(j + 1, bubbleArr[j + 1], COMPARE, (delay += speed));

        let temp = bubbleArr[j];
        bubbleArr[j] = bubbleArr[j + 1];
        bubbleArr[j + 1] = temp;

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
