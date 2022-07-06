import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

export const shellSort = (array, speed, callback) => {
  let shellArr = [...array];
  console.log(shellArr);
  let delay = 0;
  let n = array.length;
  for (let i = Math.floor(n / 2); i > 0; i = Math.floor((i /= 2))) {
    for (let j = i; j < n; j++) {
      let temp = shellArr[j];
      let k;
      for (k = j; k >= i && shellArr[k - i] > temp; k -= i) {
        animate(k, shellArr[k], CURRENT, (delay += speed));
        animate(k - 1, shellArr[k - 1], COMPARE, (delay += speed));

        shellArr[k] = shellArr[k - i];

        animate(k, shellArr[k], COMPARE, (delay += speed));
        animate(k - 1, shellArr[k - 1], COMPARE, (delay += speed));
        animate(k, shellArr[k], MAIN_COLOR, (delay += speed));
        animate(k - 1, shellArr[k - 1], MAIN_COLOR, (delay += speed));
      }
      animate(k, shellArr[k], CURRENT, (delay += speed));
      shellArr[k] = temp;
      animate(k, shellArr[k], CURRENT, (delay += speed));
      animate(k, shellArr[k], MAIN_COLOR, (delay += speed));
    }
  }
  for (let t = 0; t < shellArr.length; t++) {
    animate(t, shellArr[t], COMPLETE, (delay += speed));
  }
  setTimeout(() => {
    callback(false);
  }, (delay += speed));
};
