"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RNG(min, max) {
    var rng = Math.random();
    return Math.trunc(rng * (max - min) + min);
}
/* function RNGDec (min: number, max:number, precision:number){
    if (precision < 0) {
        throw new Error('precision must be a positive number');
    }
    if (!Number.isInteger(precision)) {
        throw new Error('precision must be a positive number');
    }
    
    const multFactor =  Math.pow(10, precision);
 return RNG(min * multFactor, max * multFactor) / multFactor;
}

console.log(RNGDec(5, 10, -12)); */
function RNGSequence(len, min, max) {
    if (len >= max - min) {
        throw new Error("cannot find ".concat(len, " numbers beetwen ").concat(min, " and ").concat(max));
    }
    var res = [];
    while (res.length < len) {
        var rn = RNG(min, max);
        if (res.includes(rn)) {
            continue;
        }
        res.push(rn);
    }
    return res;
}
var route = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Nazionale'];
var estrazioni = {};
for (var _i = 0, route_1 = route; _i < route_1.length; _i++) {
    var ruota = route_1[_i];
    var estrazione = RNGSequence(5, 1, 100);
    estrazioni[ruota] = estrazione;
}
console.log(JSON.stringify(estrazioni, null, 2));
