/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }

  if (num % 3 === 0) {
    return 'Fizz';
  }

  if (num % 5 === 0) {
    return 'Buzz';
  }

  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let resultFactorial = 1;

  for (let i = 2; i <= n; i += 1) {
    resultFactorial *= i;
  }

  return resultFactorial;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = n1;

  for (let i = n1 + 1; i <= n2; i += 1) {
    sum += i;
  }

  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }

  return false;
}

function validate({ x, y }, rec2) {
  return rec2.left <= x && x <= rec2.left + rec2.width
    && rec2.top <= y && y <= rec2.top + rec2.height;
}
/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  return validate({ x: rect1.left, y: rect1.top }, rect2)
    || validate({ x: rect1.left, y: rect1.top + rect1.height }, rect2)
    || validate({ x: rect1.left + rect1.width, y: rect1.top }, rect2)
    || validate({ x: rect1.left + rect1.width, y: rect1.top + rect1.height }, rect2)
    || validate({ x: rect2.left, y: rect2.top }, rect1)
    || validate({ x: rect2.left, y: rect2.top + rect2.height }, rect1)
    || validate({ x: rect2.left + rect2.width, y: rect2.top }, rect1)
    || validate({ x: rect2.left + rect2.width, y: rect2.top + rect2.height }, rect1);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  if (Math.sqrt((circle.center.x - point.x) ** 2 + (circle.center.y - point.y) ** 2)
  < circle.radius) {
    return true;
  }

  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const strArray = str.replace(' ', '').split('');
  const countObj = {};

  strArray.forEach((item) => {
    if (!Object.keys(countObj).includes(item)) {
      countObj[item] = 1;
    } else {
      countObj[item] += 1;
    }
  });

  const result = Object.keys(countObj).find((item) => countObj[item] === 1);

  return result;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let resultStr = '';

  if (isStartIncluded) {
    resultStr += '[';
  }

  if (isStartIncluded === false) {
    resultStr += '(';
  }

  if (a > b) {
    resultStr += `${b}, ${a}`;
  }

  if (a < b) {
    resultStr += `${a}, ${b}`;
  }

  if (isEndIncluded) {
    resultStr += ']';
  }

  if (isEndIncluded === false) {
    resultStr += ')';
  }

  return resultStr;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +num.toString().split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const strCCN = ccn.toString();
  let sum = +strCCN[strCCN.length - 1];

  for (let i = 0; i < strCCN.length - 1; i += 1) {
    let value = +strCCN[strCCN.length - 2 - i];

    if (i % 2 === 0) {
      value *= 2;
    }

    if (value > 9) {
      value -= 9;
    }

    sum += value;
  }

  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function sumDigits(number) {
  const numArray = number.toString().split('');
  return numArray.reduce((sum, item) => sum + +item, 0);
}
function getDigitalRoot(num) {
  let sum = sumDigits(num);

  if (sum > 9) {
    sum = sumDigits(sum);
  }

  return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const bracketsArray = ['[]', '{}', '()', '<>'];
  const strArray = str.split('');
  const resultArray = [];

  strArray.forEach((item) => {
    if (resultArray.length === 0) {
      resultArray.push(item);
    } else {
      const prevElem = resultArray[resultArray.length - 1];
      if (bracketsArray.includes(prevElem + item)) {
        resultArray.pop();
      } else {
        resultArray.push(item);
      }
    }
  });

  if (resultArray.length === 0) {
    return true;
  }
  return false;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function numberDivine(number, radix) {
  return number % radix;
}

function toNaryString(num, n) {
  const resultArray = [];
  let remainderDivision = numberDivine(num, n);
  resultArray.push(remainderDivision);
  let wholeDivision = Math.floor(num / n);

  while (wholeDivision >= n) {
    const newNum = wholeDivision;
    remainderDivision = numberDivine(wholeDivision, n);
    resultArray.push(remainderDivision);
    wholeDivision = Math.floor(newNum / n);
  }

  resultArray.push(wholeDivision);

  return resultArray.reverse().join('').toString();
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const [firstPath, ...restPathes] = pathes.map((item) => item.split('/'));
  const commonPath = firstPath.filter((item, ind) => restPathes.every((path) => path[ind] === item)).join('/');
  const startSlash = pathes.filter((item) => item.slice(0, 1) === '/');

  if (commonPath.length !== 0 || (commonPath.length === 0 && pathes.length === startSlash.length)) {
    return commonPath.concat('/');
  }

  return commonPath;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const resultMatrix = [];

  m1.forEach((arr) => {
    const resultArray = [];
    for (let i = 0; i < m2[0].length; i += 1) {
      const resultItem = arr.reduce((sum, item, indM2) => sum + item * m2[indM2][i], 0);
      resultArray.push(resultItem);
    }
    resultMatrix.push(resultArray);
  });

  return resultMatrix;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function winInRow(array) {
  const xArray = array.filter((arr) => arr.every((item) => item === 'X') && arr.length === array.length);
  const zeroArray = array.filter((arr) => arr.every((item) => item === '0') && arr.length === array.length);

  if (xArray.length !== 0) {
    return 'X';
  }

  if (zeroArray.length !== 0) {
    return '0';
  }

  return undefined;
}

function winInColumn(array) {
  const rowArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const row = [];
    for (let j = 0; j < array.length; j += 1) {
      row.push(array[j][i]);
    }
    rowArray.push(row);
  }

  return winInRow(rowArray);
}

function winInDiagonal(array) {
  const rowArray = [];
  const rowLeftRight = [];
  const rowRightLeft = [];

  for (let i = 0; i < array.length; i += 1) {
    rowLeftRight.push(array[i][i]);
  }
  rowArray.push(rowLeftRight);

  for (let i = 0; i < array.length; i += 1) {
    rowRightLeft.push(array[i][array.length - 1 - i]);
  }
  rowArray.push(rowRightLeft);
  rowArray.push([]);

  return winInRow(rowArray);
}

function evaluateTicTacToePosition(position) {
  if (winInRow(position) !== undefined) {
    return winInRow(position);
  }

  if (winInColumn(position) !== undefined) {
    return winInColumn(position);
  }

  if (winInDiagonal(position) !== undefined) {
    return winInDiagonal(position);
  }

  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
