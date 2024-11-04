let temperatureInput = document.querySelector('#temperature > input');
let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let btn = document.querySelector('.button button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

celsiusInput.setAttribute('readonly', true);
fahrenheitInput.setAttribute('readonly', true);
kelvinInput.setAttribute('readonly', true);

temperatureInput.addEventListener('input', function () {
    let inputTemp = parseFloat(temperatureInput.value);
    
    if (!isNaN(inputTemp)) {
    
        celsiusInput.value = roundNumber(inputTemp);
        fahrenheitInput.value = roundNumber((inputTemp * (9 / 5)) + 32);
        kelvinInput.value = roundNumber(inputTemp + 273.15);
    } else {
   
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }
});

btn.addEventListener('click', () => {
    temperatureInput.value = "";
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});
