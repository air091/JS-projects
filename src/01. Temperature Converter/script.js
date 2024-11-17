document.addEventListener("DOMContentLoaded", () => {
  const celcius = document.getElementById("celcius");
  const celciusFormulaValue = document.getElementById("celcius-value");
  const farenheiht = document.getElementById("farenheiht");
  const farenheihtFormulaValue = document.getElementById("farenheiht-value");

  celcius.addEventListener("input", (event) => {
    const celciusValue = event.target.value;
    const toFarenheiht = parseFloat((celciusValue * 9) / 5 + 32);

    farenheiht.value = toFarenheiht.toFixed(3).replace(/\.?0+$/, "");
  });

  farenheiht.addEventListener("input", (event) => {
    const farenheihtValue = event.target.value;
    const toCelcius = parseFloat(((farenheihtValue - 32) * 5) / 9);

    celcius.value = toCelcius.toFixed(3).replace(/\.?0+$/, "");
  });
});
