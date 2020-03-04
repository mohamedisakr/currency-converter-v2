// base url
const url = "https://api.exchangerate-api.com/v4/latest/";
// currency-from select
const currencyFrom = document.querySelector("#currency-from");
// currency-to select
const currencyTo = document.querySelector("#currency-to");
// amountFrom input
const amountFrom = document.querySelector("#amountFrom");
// amountTo input
const amountTo = document.querySelector("#amountTo");
// rate div
const rateDiv = document.querySelector("#rate");
// swap button
const swapButton = document.querySelector("#swap");

function calculate() {
  const currencyFromValue = currencyFrom.value;
  const currencyToValue = currencyTo.value;
  console.log(currencyFromValue, currencyToValue);

  // console.log("fetching data...");
  fetch(`${url}${currencyFromValue}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      const rate = data.rates[currencyToValue];
      // console.log(rate);
      rateDiv.innerText = `${amountFrom.value} ${currencyFromValue} = ${rate} ${currencyToValue}`;
      amountTo.value = (amountFrom.value * rate).toFixed(2);
    });
}

function handleSwap(event) {
  const temp = currencyFrom.value;
  currencyFrom.value = currencyTo.value;
  currencyTo.value = temp;
  calculate();
}
calculate();

currencyFrom.addEventListener("change", calculate);
currencyTo.addEventListener("change", calculate);

amountFrom.addEventListener("input", calculate);
amountTo.addEventListener("input", calculate);

swapButton.addEventListener("click", handleSwap);

/*
const url = "https://api.exchangerate-api.com/v4/latest/USD";
async function getCurrenyList() {
  const response = await fetch(url);
  const result = await response.json();
  const rates = await result.rates;
  return rates;
  //   console.log(rates);
}
getCurrenyList().then(
  rates => console.log(Object.keys(rates).length)

  //   Object.keys(rates).forEach(r =>
  //     console.log(`<option value="${r}">${r}</option>`)
  //   )
);
*/
