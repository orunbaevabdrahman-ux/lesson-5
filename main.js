function converTemperature(celsius, toFahrenheit) {
    if(toFahrenheit === true) {
        return (celsius * 9 / 5) + 32;
    } else {
        return(celsius - 32) * 5 / 9;
    }
} 

console.log(converTemperature(25, true));
console.log(converTemperature(100, true));
console.log(converTemperature(77, false));
console.log(converTemperature(32, false));

function validatePassword(password) {
    const hasLength = password.length > 8;
    const hasBukva = /[d-Zs-F]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if(hasLength && hasBukva && hasNumber) {
        return true;
    } else {
        return false;
    }
}

console.log(validatePassword("hello12345"));
console.log(validatePassword("hello"));
console.log(validatePassword("123456789"));
console.log(validatePassword("JavaScript234"));


function calculate(a, b, operation) {
    if(operation === "+") {
        return a + b;
    }else if(operation === "-") {
        return a - b;
    }else if(operation === "*") {
        return a * b;
    }else if (operation === "/") {
        if(b === 0) {
            return "делить нельзя"
        }
        return a / b;
    }else {
        return "error";
    }
}
console.log(calculate(10,5,"+"));
console.log(calculate(10,5,"-"));
console.log(calculate(10,5,"*"));
console.log(calculate(10,5,"/"));
console.log(calculate(10,0,"/"));



const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function calculate(operation) {
    let a = Number(num1.value);
    let b = Number(num2.value);

    if (num1.value === "" || num2.value === "") {
        result.textContent = "Введи числа!";
        return;
    }

    if (operation === "+") {
        result.textContent = a + b;
    } 
    else if (operation === "-") {
        result.textContent = a - b;
    } 
    else if (operation === "*") {
        result.textContent = a * b;
    } 
    else if (operation === "/") {
        if (b === 0) {
            result.textContent = " делить нельзя!";
        } else {
            result.textContent = a / b;
        }
    }
};
