var mainFn = require('../main/main.js');
var selectSameNumFn = require('../main/selectSameNum.js');
var printStringFn = require('../main/printString.js');

describe('node-lcd', function () {

    var  inputs = 910;
    
    it('should print correct text', function () {

        spyOn(console, 'log');

        mainFn.printReceipt(inputs);

        var expectText = '._.' + ' ' + '...' + ' ' + '._.' + '\n' + '|_|' + ' ' + '..|' + ' ' + '|.|' + '\n' + '..|' + ' ' + '..|' + ' ' + '|_|';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('unit testing', function () {


    describe('selectSameNum', function () {

        var input = 910;

        it('should creat a new array which is equal to input number', function () {

            var expectNewArray = [
                ['._.', '|.|', '|_|']
                ,
                ['...', '..|', '..|']
                ,
                ['._.', '|_|', '..|']
            ];

            var testNewArray =selectSameNumFn.selectSameNum(input);
            expect(testNewArray).toEqual(expectNewArray);

        });
    });

    describe('printString', function () {



        it('should creat a  right result', function () {

            var testNewArray = [
                ['._.', '|.|', '|_|']
                ,
                ['...', '..|', '..|']
                ,
                ['._.', '|_|', '..|']
            ];

            var expectResult = '._.' + ' ' + '...' + ' ' + '._.' + '\n' + '|_|' + ' ' + '..|' + ' ' + '|.|' + '\n' + '..|' + ' ' + '..|' + ' ' + '|_|';

            var testResult = printStringFn.printString(testNewArray);

            expect(testResult).toEqual(expectResult);
        });
    });

});

