function printString(sameNumArray) {

    var result = '';

    for (var j = 0; j < sameNumArray[0].length; j++) {
        for (var i = sameNumArray.length - 1; i >= 0; i--) {

            result += sameNumArray[i][j];

            if (i != 0) {
                result += ' ';
            }
        }
        if (j != sameNumArray[0].length-1) {
            result += '\n';
        }
    }

    return result;
}
exports.printString=printString;