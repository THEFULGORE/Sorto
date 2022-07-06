import { animate } from "./animation.js";
import { COMPARE, CURRENT, COMPLETE, MAIN_COLOR } from "./consts.js";

let delay = 0;

export const heapSort = (array, speed, callback) => {
  delay = 0;
  let heapArr = [...array];
  let n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(heapArr, n, i, speed);
  }

  for (let i = n - 1; i >= 0; i--) {
    let temp = heapArr[i];
    heapArr[i] = heapArr[0];
    heapArr[0] = temp;

    animate(i, heapArr[i], COMPLETE, (delay += speed));
    animate(i, heapArr[i], CURRENT, (delay += speed));

    heapify(heapArr, i, 0, speed);

    animate(i, heapArr[i], "blue", (delay += speed));
    animate(i, heapArr[i], COMPLETE, (delay += speed));
  }
  animate(n - 1, heapArr[n - 1], COMPLETE, (delay += speed));
  setTimeout(() => {
    callback(false);
  }, (delay += speed));
};

const heapify = (array, n, i, speed) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && array[l] > array[largest]) {
    largest = l;
  }

  if (r < n && array[r] > array[largest]) {
    largest = r;
  }

  if (largest !== i) {
    animate(i, array[i], COMPARE, (delay += speed));
    animate(largest, array[largest], COMPARE, (delay += speed));

    let temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    animate(i, array[i], COMPARE, (delay += speed));
    animate(largest, array[largest], COMPARE, (delay += speed));
    animate(i, array[i], MAIN_COLOR, (delay += speed));
    animate(largest, array[largest], MAIN_COLOR, (delay += speed));

    heapify(array, n, largest, speed);
  }
};
