import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

let delay = 0;

export const mergeSort = (array, speed, callback) => {
  delay = 0;
  let mergeArr = [...array];
  let buffer = new Array(mergeArr.length).fill(null);
  mergeSortImpl(mergeArr, buffer, 0, mergeArr.length - 1, speed);
  for (let t = 0; t < mergeArr.length; t++) {
    animate(t, mergeArr[t], COMPLETE, (delay += speed));
  }
  setTimeout(() => {
    callback(false);
  }, (delay += speed));
};

const mergeSortImpl = (array, buffer, l, r, speed) => {
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    animate(m, array[m], CURRENT, (delay += speed));

    mergeSortImpl(array, buffer, l, m, speed);
    mergeSortImpl(array, buffer, m + 1, r, speed);

    let k = l;
    for (let i = l, j = m + 1; i <= m || j <= r; ) {
      if (j > r || (i <= m && array[i] < array[j])) {
        animate(i, array[i], COMPARE, (delay += speed));
        buffer[k] = array[i];
        ++i;
      } else {
        animate(j, array[j], COMPARE, (delay += speed));
        buffer[k] = array[j];
        ++j;
      }
      ++k;
    }
    for (let i = l; i <= r; ++i) {
      animate(i, array[i], CURRENT, (delay += speed));

      array[i] = buffer[i];

      animate(i, array[i], MAIN_COLOR, (delay += speed));
    }
  }
};
