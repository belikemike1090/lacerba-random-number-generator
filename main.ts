function RNG(min: number, max: number) {
    const rng = Math.random()
    return Math.trunc(rng * (max - min) + min);    
}

/* for (let i= 0; i<10; i++){
    console.log("My Random number is: ", RNG(1, 5));
} */

function RNGDec (min: number, max:number, precision:number){
    const multFactor =  Math.pow(10, precision);
 return RNG(min * multFactor, max * multFactor) / multFactor;
}

console.log(RNGDec(0, 10, 2));
console.log(RNGDec(0, 10, 3));
console.log(RNGDec(0, 10, 5));