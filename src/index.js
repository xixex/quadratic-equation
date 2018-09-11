module.exports = function solveEquation(str) {
    var number = 1;
    // str = '-340 * x^2 - 2201893380 * x - 3485120187960680';
    number = +str.match(/(-? ?[\d]+) ?[*] ?[a-z][^]2/i)[1].replace(/\s/g, '');
    var a = (number === 0) ? 1 : number;
    console.log(a);

    number = +str.match(/(-? ?[\d]+) ?[*] ?[x](?![\^])/i)[1].replace(/\s/g, '');
    var b = (number === 0) ? 1 : number;
    console.log(b);

    number = +str.match(/(-? ?[\d]+)(?![ *])(?![\d])/i)[1].replace(/\s/g, '');
    var c = (number === 0) ? 0 : number;
    console.log(c);

    var D = Math.pow(b, 2) - 4 * a * c;
    console.log(D);

    var x2 = Math.round(((-1) * b - Math.sqrt(D)) / (2 * a));
    var x1 = Math.round(((-1) * b + Math.sqrt(D)) / (2 * a));
    console.log([x1, x2]);
    array = [x1, x2].sort((a, b) => {
        return a - b;
    })
    console.log(array);
    return array;
}




