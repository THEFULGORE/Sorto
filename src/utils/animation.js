export const animate = (index, size, color, speed) => {
  const bars = document.getElementsByClassName("pillar");
  setTimeout(() => {
    bars[index].style.height = `${(size / 200) * 100}%`;
    bars[index].style.backgroundColor = color;
  }, speed);
};
