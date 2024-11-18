document.addEventListener("DOMContentLoaded", () => {
  const increase = document.getElementById("increase");
  const decrease = document.getElementById("decrease");
  const reset = document.getElementById("reset");
  const count = document.getElementById("count");

  let val = 0;

  increase.addEventListener("click", () => {
    const increaseVal = ++val;
    count.textContent = increaseVal;
    console.log(increaseVal);
  });

  decrease.addEventListener("click", () => {
    const decreaseVal = --val;
    count.textContent = decreaseVal;
    console.log(decreaseVal);
  });

  reset.addEventListener("click", () => {
    val = 0;
    count.textContent = val;
    console.log(val);
  });
});
