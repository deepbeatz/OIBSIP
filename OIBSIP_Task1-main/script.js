let result = 0;
let memory = 0;


function clearResult() {
  document.getElementById('result').value = '';
}

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  var result = document.getElementById('result').value;
  try {
    var answer = eval(result);
    document.getElementById('result').value = answer;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function memoryPlus() {
  const expression = document.getElementById("result").value;
  try {
    const value = eval(expression);
    memory += value;
  } catch (error) {
    document.getElementById("result").value = 'Error';
  }
  document.getElementById("result").value = '';
}

function memoryMinus() {
  const expression = document.getElementById("result").value;
  try {
    const value = eval(expression);
    memory -= value;
  } catch (error) {
    document.getElementById("result").value = 'Error';
  }
  document.getElementById("result").value = '';
}

function recallMemory() {
  document.getElementById("result").value = memory;
}

function clearMemory() {
  memory = 0;
}