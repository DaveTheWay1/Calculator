let total;
let num1 = ''; 
let operator = '';
const operatorsArr = ['+', '-', '*', '/'];
const output = document.querySelector('h1');
const nums = document.querySelectorAll('.num');
nums.forEach(num => num.addEventListener('click', handleNum1));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', handleOperator));

function handleNum1(e){
    const val = e.target.innerText;
        if (!operatorsArr.includes(val) && val !== '='){
            num1 += val; 
            output.innerText = num1;
        }else if(val === '='){
            solve(e);
        }else{
            handleOperator(e);
        }
    }

function handleOperator(e) {
    const val = e.target.innerText;
    console.log(val);
    total = num1;
    console.log(total);
    num1 = '';
}

function solve(e){
    const val = e.target.innerText;
    console.log(val);
}


