export const resetArr = (sizeOfArray) => {
    let randomGenArr = [];
    for (let i = 0; i <= sizeOfArray; i++) {
      randomGenArr[i] = Math.floor(Math.random() * (200 - 1 + 1) + 1);
    }
    return randomGenArr
}