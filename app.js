const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $seconds = document.getElementById("seconds");

const $btnsUp = document.querySelectorAll(".btn-up");
const $btnsDown = document.querySelectorAll(".btn-down");

$btnsUp.forEach((btnUp) => {
  btnUp.addEventListener("click", (event) => {
    const $span = event.target.parentNode.querySelector("span");
    const time = parseInt($span.textContent);

    if ($span.id === "hours") {
      $span.textContent = time + 1 === 24 ? "00" : time + 1 < 10 ? `0${time + 1}` : time + 1;
    } else {
      $span.textContent = time + 10 === 60 ? "00" : time + 10;
    }
  });
});

$btnsDown.forEach((btnDown) => {
  btnDown.addEventListener("click", (event) => {
    const $span = event.target.parentNode.querySelector("span");
    const time = parseInt($span.textContent);

    if ($span.id === "hours") {
      $span.textContent = time - 1 === -1 ? "00" : time - 1 < 10 ? `0${time - 1}` : time - 1;
    } else {
      $span.textContent = time - 10 === -10 ? "00" : time - 10;
    }
  });
});
