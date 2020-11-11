import { randomPersonData } from './randomPersonData.js';

// Variables
const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.results');
const container = document.querySelector('.container');

// Clear data in resultDiv before select another button
const refreshResultPage = () => {
    while (resultDiv.hasChildNodes()) {
        resultDiv.removeChild(resultDiv.lastChild);
    }
}

// Country list
const getCountryList = randomPersonData.map((country) => {
    return country.region;
});
const countriesSet = new Set(getCountryList);
let uniqueCountriesArray = Array.from(countriesSet)

// On each button click, delete result div and add a new empty one
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        refreshResultPage();
        if (event.target.innerHTML === 'Landenlijst') {
            uniqueCountriesArray.forEach(item => {
                const li = document.createElement('li');
                resultDiv.appendChild(li);
                li.innerHTML = item;
            });
        }
    });
});