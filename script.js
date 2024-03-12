let total;
let num1 = ''; 
let operator = '';
// let num2 = ''
const operatorsArr = ['+', '-', '*', '/'];
const output = document.querySelector('h1');
const nums = document.querySelectorAll('.num');
nums.forEach(num => num.addEventListener('click', handleNum1));

const operators = document.querySelectorAll('.operator');
// operators.addEventListener('click', handleNum2);

function handleNum1(e){
    const val = e.target;
    // const containsOperator = operatorsArr.some(operator => num1.includes(operator));
    // if (!containsOperator){
        if (!operatorsArr.includes(val)){
            num1 += val.innerText; 
            output.innerText = num1;
        } else if (operatorsArr.includes(val)){
            console.log(val);
            total = num1;
            num1 = ''
        }
    // }
//     else { 
//         handleNum2();
//     }
// }

    function handleNum2(e){
        const val = e.target;

    }
}


