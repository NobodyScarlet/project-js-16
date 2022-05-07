'use strict'

let num = +prompt('Введите число');
let degree = +prompt('Введите степень');
let result = null

function arg (num, degree = 1) {
    if (isNaN(num) || isNaN(degree)) {
        return alert('some error')
    } else {
        result = Math.pow(num,degree);
        return result;

    }
}

arg(num,degree);

if (result !== null) {
    alert(result);
}