type Add = (a:number, b:number) => number

let addition:Add = (a, b) =>{
    return a + b
}

console.log(addition(20,22))