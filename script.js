const operator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    multiply: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        return a / b;
    },
};

const operate = (operator, a, b) => {
    return operator(a, b);
};

console.log(operate(operator.add, 2, 3));
