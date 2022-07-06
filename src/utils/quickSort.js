import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

let delay = 0;

export const quickSort = (array, speed, callback) => {
  delay = 0;
  let quickArr = [...array];
  quickSortImpl(quickArr, 0, quickArr.length - 1, speed);
  for (let t = 0; t < quickArr.length; t++) {
    animate(t, quickArr[t], COMPLETE, (delay += speed));
  }
  setTimeout(() => {
    callback(false);
  }, (delay += speed));
};

const quickSortImpl = (arr, low, high, speed) => {
  if (low < high) {
    let pi = partition(arr, low, high, speed);
    quickSortImpl(arr, low, pi - 1, speed);
    quickSortImpl(arr, pi + 1, high, speed);
  }
};

const partition = (arr, low, high, speed) => {
  let pivot = arr[high];
  let i = low - 1;

  animate(high, pivot, "yellow", (delay += speed));

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;

      animate(j, arr[j], CURRENT, (delay += speed));
      animate(i, arr[i], COMPARE, (delay += speed));
      animate(j, arr[j], COMPARE, (delay += speed));

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      animate(i, arr[i], COMPARE, (delay += speed));
      animate(j, arr[j], COMPARE, (delay += speed));
      animate(i, arr[i], MAIN_COLOR, (delay += speed));
      animate(j, arr[j], MAIN_COLOR, (delay += speed));
    }
  }
  animate(i + 1, arr[i + 1], COMPARE, (delay += speed));
  animate(high, arr[high], COMPARE, (delay += speed));

  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  animate(i + 1, arr[i + 1], COMPARE, (delay += speed));
  animate(high, arr[high], COMPARE, (delay += speed));
  animate(i + 1, arr[i + 1], MAIN_COLOR, (delay += speed));
  animate(high, arr[high], MAIN_COLOR, (delay += speed));
  return i + 1;
};
