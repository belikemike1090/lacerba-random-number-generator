import { error } from "console";

function RNG(min: number, max: number) {
    const rng = Math.random()
    return Math.trunc(rng * (max - min) + min);    
}

/* function RNGSequence(len:number, min: number, max: number) {
    if (len >= max - min) {
        throw new Error(`cannot find ${len} numbers beetwen ${min} and ${max}`)
    }
    const res : number [] = [];
    while (res.length < len){
        const rn = RNG(min, max)
        if (res.includes(rn)) {
            continue;
        }
        res.push(rn)

    }
    return res;
}

const myArr = RNGSequence(6, 0, 5);
console.log(myArr); */

function RNGDec (min: number, max:number, precision:number){
    if (precision < 0) {
        throw new Error('precision must be a positive number');
    }
    if (!Number.isInteger(precision)) {
        throw new Error('precision must be a positive number');
    }
    
    const multFactor =  Math.pow(10, precision);
 return RNG(min * multFactor, max * multFactor) / multFactor;
}

console.log(RNGDec(5, 10, -12));
