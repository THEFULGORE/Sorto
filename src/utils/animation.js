export const animate = (index, size, color, speed) => {
  const bars = document.getElementsByClassName("pillar");
  setTimeout(() => {
    bars[index].style.height = `${(size / 200) * 100}%`;
    bars[index].style.backgroundColor = color;
    //bars[index].style.boxShadow = `0px 0px 10px ${color}`;
  }, speed);
};
