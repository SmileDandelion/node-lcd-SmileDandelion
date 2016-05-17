var getLoadAllItems = require('../test/fixtures.js');

function numObjectExist(number, inputs) {

    var numArray;

    inputs.forEach(function (element) {

        if (number === element.num) {
            numArray = element.cont;
        }
    });

    return numArray;
}

function selectSameNum(input) {

    var inputs = getLoadAllItems.loadAllItems();
    var sameNumArray = [];

    while (input) {
        var remainder = input % 10;
        var input = Math.floor(input / 10);
        var numObject = numObjectExist(remainder, inputs);

        if (numObject) {
            sameNumArray.push(numObject);
        }
    }

    return sameNumArray;
}

exports.selectSameNum=selectSameNum;