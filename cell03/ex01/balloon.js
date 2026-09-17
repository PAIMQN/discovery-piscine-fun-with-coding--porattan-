let balloon = document.getElementById("balloon");

let size = 200;

const color = ["red", "green", "blue"];

let index = 0;

const updateBalloon = () => {
  balloon.style.backgroundColor = `${color[index]}`;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
};

balloon.addEventListener("click", () => {
  index++;
  if (index > 2) index = 0;
  size += 10;
  if(size >= 420){
    size = 200;
    index = 0;
  }
  updateBalloon();
});

balloon.addEventListener("mouseleave", () => {
    if(size > 200){
        index--;
        if (index < 0) index = 2;
        size-=5;
        updateBalloon();
    }
});
