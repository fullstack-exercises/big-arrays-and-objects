import { randomPersonData } from './randomPersonData.js';

// Variables
const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.results');
const container = document.querySelector('.container');


const refreshResultPage = () => {
    resultDiv.remove();
}

const addNewResultsDiv = () => {
    const div = document.createElement('div');
    div.classList.add('results');
    container.appendChild(div);
}

// On each button click, delete result div and add a new empty one
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log('test');
        refreshResultPage();
        addNewResultsDiv();
    });
});