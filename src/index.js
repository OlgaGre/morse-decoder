const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let morseArr = []
    let resultStr = '';
    for (var i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr[j].length - 1; k += 2) {
            let num = '';
            if (arr[j][k] !== NaN) {

                num = arr[j][k] + arr[j][k + 1];
                //  console.log(num)
                if (num == '10') {
                    resultStr += '.'
                }
                if (num == '11') {
                    resultStr += '-'
                }
            } else {
                morseArr.push('space')
            }

        }

        morseArr.push(resultStr)
        resultStr = ''
    }
    let result = ''
    for (var i = 0; i < morseArr.length; i++) {
        if (morseArr[i].length > 0) {
            result += MORSE_TABLE[morseArr[i]]
        } else {
            result += ' '
        }

    }

    return result

}

module.exports = {
    decode
}