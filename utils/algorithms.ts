//return an array of given length with random numbers 
//between 0 and max
export function getRandomArray(len: number, max: number) : number[]{
    let randomArray = Array.from({ length: len}, () => Math.floor(Math.random() * max));
    return randomArray;
}