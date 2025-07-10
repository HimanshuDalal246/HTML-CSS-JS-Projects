const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive == circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });

  switch (currentActive) {
    case 2:
      progress.style.width = 30 + "%";
      break;
    case 3:
      progress.style.width = 60 + "%";
      break;
    case 4:
      progress.style.width = 90 + "%";
      break;
    default:
      progress.style.width = 0 + "%";
      break;
  }

  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};
