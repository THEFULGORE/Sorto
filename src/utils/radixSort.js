import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

let delay = 0;
//LSD
export const radixSort = (array, speed, callback) => {
  delay = 0;
  let radixArr = [...array];
  let maxVal = Math.max(...radixArr);
  let minVal = Math.min(...radixArr);
  let exp = 1;
  while ((maxVal - minVal) / exp >= 1) {
    countSort(radixArr, exp, minVal, speed);
    exp *= 10;
  }
  for (let t = 0; t < radixArr.length; t++) {
    animate(t, radixArr[t], COMPLETE, (delay += speed));
  }
  setTimeout(() => {
    callback(false);
  }, (delay += speed));
};

const countSort = (arr, exp, minVal, speed) => {
  let i;
  let n = arr.length;
  let bucketIndex;
  let buckets = new Array(10).fill(0);
  let output = new Array(n);

  for (i = 0; i < arr.length; i++) {
    bucketIndex = Math.floor(((arr[i] - minVal) / exp) % 10);
    buckets[bucketIndex]++;
  }

  for (i = 1; i < 10; i++) {
    buckets[i] += buckets[i - 1];
  }

  for (i = arr.length - 1; i >= 0; i--) {
    bucketIndex = Math.floor(((arr[i] - minVal) / exp) % 10);

    output[--buckets[bucketIndex]] = arr[i];

    animate(buckets[bucketIndex] + 1, arr[i], COMPARE, (delay += speed));
  }

  for (i = 0; i < arr.length; i++) {
    arr[i] = output[i];

    animate(i, arr[i], CURRENT, (delay += speed));
    animate(i, arr[i], MAIN_COLOR, (delay += speed));
  }
};
