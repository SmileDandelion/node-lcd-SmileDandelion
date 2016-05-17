function printReceipt(inputs) {

    var getPrintString = require('./printString.js');
    var getSelectSameNum = require('./selectSameNum.js');

    var input = 910;
    var sameNumArray = getSelectSameNum.selectSameNum(input);
    var result = getPrintString.printString(sameNumArray);

    console.log(result);

}
exports.printReceipt= printReceipt;