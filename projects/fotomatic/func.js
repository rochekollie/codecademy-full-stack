(function () {

    "use strict";

    function add(a, b) {
        return a + b;
    }

    function addTwo(x) {
        return function (y) {
            return add(x + y);
        };
    }

    const answer = addTwo(3)(4);
    console.log(answer);


    function curry(fun, num) {
        return function (arg) {
            return arg;
        };
    }

    let myFun = curry(add(3, 4), 7);

    console.log(myFun(addTwo(1)(4)));

    const kids = ['Beauty', 'Pretty', 'Robyn', 'Roche', 'Rap'];

    const initials = kids.map(letter => letter[0]);

    const isOdd = number => number % 2 === 1;


}());
