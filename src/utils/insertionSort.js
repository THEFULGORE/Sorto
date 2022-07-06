import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

export const insertionSort = (array, speed, callback) => {
  let insertionArr = [...array];
  let delay = 0;

  for (let i = 1; i < insertionArr.length; i++) {
    animate(i, insertionArr[i], CURRENT, (delay += speed));
    let x = insertionArr[i];
    let j = i;

    while (j > 0 && insertionArr[j - 1] > x) {
      animate(j, insertionArr[j], COMPARE, (delay += speed));
      animate(j - 1, insertionArr[j - 1], COMPARE, (delay += speed));

      insertionArr[j] = insertionArr[j - 1];

      animate(j - 1, x, COMPARE, (delay += speed));
      animate(j, insertionArr[j], COMPARE, (delay += speed));
      animate(j, insertionArr[j], MAIN_COLOR, (delay += speed));
      
      --j;
    }
    insertionArr[j] = x;
    animate(j, insertionArr[j], MAIN_COLOR, (delay += speed));
  }
  for (let t = 0; t < insertionArr.length; t++) {
    animate(t, insertionArr[t], COMPLETE, (delay += speed));
  }
  setTimeout(() => {
    callback(false);
  }, (delay += speed));
};
