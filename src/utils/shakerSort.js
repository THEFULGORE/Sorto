import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

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
