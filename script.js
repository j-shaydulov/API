function getCountry(country){

const request = new XMLHttpRequest();
request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
request.send();


request.addEventListener('load', function (){
    const [data] = JSON.parse(this.responseText);
        console.log(data);

        const [currency] = Object.values(data.currencies)

    const cardDiv = `
        <div class="card">
        <img src="${data.flags.png}" alt="${data.name.official}">
        <div class="content_text">
            <h2>${data.name.common}</h2>
            <div class="capital">
                <p>Capital: </p>
                <span>${data.capital}</span>
            </div>
            <div class="population">
                <p>Population:</p>
                <span>${(data.population / 1000000).toFixed(1)} mln</span>
            </div>
            <div class="currency">
                <p>Currency: </p>
                <span>${currency.symbol}</span>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML("beforeend", cardDiv);
})
}


function getSelectedCountry() {
  const selectElement = document.getElementById("countries");
  const selectedCountry = selectElement.value;

  if (selectedCountry) {

    const existingCard = document.querySelector(".card");
    if (existingCard) {
      existingCard.remove();
    }

    getCountry(selectedCountry);
  }
}





