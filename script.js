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
