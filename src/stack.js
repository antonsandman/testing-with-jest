var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.popp(); // Medvetet fel: "snabba fingrar på tröga tangenter"
};

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}