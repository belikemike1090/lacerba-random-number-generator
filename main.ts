function RNG(min: number, max: number): number {
    const rng = Math.random();
    return Math.trunc(rng * (max - min) + min);
}

function RNGSequence(len: number, min: number, max: number): number[] {
    if (len >= max - min) {
        throw new Error(`cannot find ${len} numbers between ${min} and ${max}`);
    }
    const res: number[] = [];
    while (res.length < len) {
        const rn = RNG(min, max);
        if (!res.includes(rn)) {
            res.push(rn);
        }
    }
    return res;
}

const route: string[] = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Nazionale'];
const estrazioni: { [ruota: string]: number[] } = {};

for (const ruota of route) {
    const estrazione = RNGSequence(5, 1, 100);
    estrazioni[ruota] = estrazione;
}

console.log(JSON.stringify(estrazioni, null, 2));
