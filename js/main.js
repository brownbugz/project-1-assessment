//const

//variables
var inputBox = document.getElementById('inputSpace');
var answersBox = document.getElementById('answers');
var answers = 0;

//cached

//listeners


//functions
init();

// start the page with 1 in the input box
function init() {
    console.log('init starts');
    inputBox.value = 1;
    showResults();
    console.log('end of init');
}

function showResults() {
    answersBox.innerHTML = answers;
}

function addNum() {
    console.log('start addNum')
    answers = answers + parseInt(inputBox.value);
    console.log(answers);
    console.log(inputBox.value);
    showResults();
    console.log('this is the final answer');
}

function deductNum() {
    answers = answers - parseInt(inputBox.value);
    showResults();
}

function addButton() {
    addNum();
    showResults();
}

function minusButton() {
    deductNum();
    showResults();
    negativeRed();
}

function negativeRed() {
    if (answers < 0) {
        answersBox.innerHTML = '<span style="color: #ff0000">' + answers + '</span>';
        console.log('this changes colors');
    }
}
