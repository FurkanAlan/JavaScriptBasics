// console.log("================================== subtraction of two numbers =========================================")

export function subTwo(number1, number2) {
    return number1 - number2;
}

// console.log("================================== addition of two numbers =========================================")

export function addTwo(number1, number2) {
    return number1 + number2;
}

// console.log("=================================== ordered numbers ========================================")


const sort = (...args) => args.sort((a, b) => a - b)

// console.log("================================== reverse ordered number =========================================")


function reverseSort(...args) {
    return args.sort(((a, b) => b - a))
}

// console.log("==================================== PI example =======================================")


const PI = 3.1
// console.log("=================================== clone example ========================================")


const clone = (obj) => ({...obj})

// console.log("================================ export class example ===========================================")

export class Vehicle {
    constructor(tires) {
        this.tires = tires
    }

    get getTires() {
        return this.tires
    }
}


// console.log("================================ export class example 2 ===========================================")

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getUserStats() {
        return `
      Name: ${this.name}
      Age: ${this.age}
      Email: ${this.email}
    `
    }
}

// console.log("================================ export class example 2  second way ===========================================")

// exports =  {
//     getName: () => {
//         return "Ali";
//     },
//
//     getLocation: () => {
//         return "Munich";
//     },
//
//     dob: "12.01.1988",
// }

// console.log("===========================================================================")
// export default const person = {name: "mehmet"}//bu ifade hataya swbwp oluyor
//bunu yapabilmek icin
const person = {name: "mehmet"}
// export default person  //bu seferde bize bir yerde iki tane export default olmaz diyecek

// export default () => ({name : "Kartal"}) // bunun adi anonymous function


//Sadece bir tane export default a sistem izin veriyor mesela tumunu export default olarak toplayabiliriz

export {reverseSort, sort}
export {PI}
export {clone as cloneAnyObjectShallow}  //bunu kullancagimiz zaman cloneAnyObjectShallow bu isimle kullanmaliyiz

export default Vehicle
export {User}

// console.log("================================== export deault all, sadece 1 tane deault kulllanilabili r=========================================")
console.log("export default un faydasi { } parantezi import Truck from ./expFeatureExporter.js import dan kaldiiriyor")

// export default {
//     PI, reverseSort
// }

// console.log("================================== 2. yontem exportlar bir yerde =========================================== ")

const allUtils = {
    PI, reverseSort, sort, addTwo, subTwo
}
// export {allUtils as default, clone } //bu dogru olmayabilir

// export * from "./expFeatureImporter"

