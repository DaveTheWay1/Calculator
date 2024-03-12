let total;
let num1 = ''; 
let operator = '';
const operatorsArr = ['+', '-', '*', '/'];

const output = document.querySelector('h1');
const nums = document.querySelectorAll('.num');
const equate = document.getElementById('solve');
equate.addEventListener('click', solve);
nums.forEach(num => num.addEventListener('click', handleNum1));
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', handleOperator));

function handleNum1(e){
    const val = e.target.innerText;
        if (!operatorsArr.includes(val) && val){
            num1 += val; 
            // total += num1;
            // console.log(total);
            console.log(num1)
            output.innerText = num1;
        }else{
            handleOperator(e);
        }
    }

function handleOperator(e) {
    const val = e.target.innerText;
    // console.log(val);
    num1 += val;
    total = num1;
    console.log(total);
    num1 = '';
}

function solve(e){
    const val = e.target.innerText;
    console.log(val);
    const problem = total + num1 + val;
    console.log(problem);
}


