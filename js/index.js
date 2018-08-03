//solution 1: loop
/*const userNum = parseInt(prompt('Enter number in sequence'));

var fibNum0 = 1;
var fibNum1 = 1;

for (let i = 3; i <= userNum; i++) {
    var sum = fibNum0 + fibNum1;
    fibNum0 = fibNum1;
    fibNum1 = sum;
}
document.write(sum);*/

//solution 2: array
const userNum = parseInt(prompt('Enter number in sequence'));

let fibNums = [1, 1];
var fibNext;
fibNums.push(fibNext);

for (let i = 3; i <= userNum; i++) {
    fibNext = fibNums[0] + fibNums[1];
    fibNums[0] = fibNums[1];
    fibNums[1] = fibNext;
}
document.write(fibNext);
