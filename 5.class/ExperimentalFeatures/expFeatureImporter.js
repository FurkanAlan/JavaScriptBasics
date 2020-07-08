import * as utils from "./expFeatureExporter.js";
import * as twoNumberCalc from "./expFeatureExporter.js"
import {subTwo, addTwo} from "./expFeatureExporter.js";  //second way
import {reverseSort, sort, PI as numberPI} from "./expFeatureExporter.js";
import {cloneAnyObjectShallow} from "./expFeatureExporter.js";

import Truck from "./expFeatureExporter.js";

import {User} from "./expFeatureExporter.js";


// import {dob} from "./expFeatureExporter.js";
// import {getName} from "./expFeatureExporter.js";


// import allItems from "./expFeatureExporter.js";
// import getName from "expFeatureExporter.js"

// import "./expFeatureExporter.js" // bu metod cok guvenli olmayabilir

// import * as xUtil from "./expFeatureExporter"

console.log("================================== subtraction of two numbers =========================================")

console.log(twoNumberCalc.subTwo(12, 4))

console.log("================================== subtraction of two numbers  2. way=========================================")


console.log(subTwo(5, 20))

console.log("================================== addition of two numbers =========================================")


console.log(addTwo(5, 20))

console.log("================================== PI =========================================")


console.log(numberPI)

console.log("================================== normal ordered number =========================================")


console.log(sort(12, 4, 5, 6, 7, 89, 9, 99, 0, 1))

console.log("================================== reverser ordered =========================================")


console.log(reverseSort(-12, 4, 45, numberPI * 12, 3, 0))

console.log("================================== clone ornegi =========================================")

console.log(cloneAnyObjectShallow({name: "Ali", street: "Istanbul mahallesi"}))


console.log("================================== reverser ordered ikinci import metoduyla=========================================")


console.log(utils.reverseSort(-12, 4, 5, 6, 8, 9, 0, -1, -12))


console.log("================================== class export ornegi =========================================")

console.log(new Truck(18))


console.log("================================== class export ornegi 2 =========================================")

// const User = require("./expFeatureExporter.js");

const hakan = new User("Hakan", 30, "hakan@example.com");

console.log(hakan.getUserStats());


console.log("================================== class export ornegi 2 ikinci yol =========================================")


// console.log(`${getName()} was born on ${dob}.`);


console.log("===========================================================================")


// console.log(getPersonName())

// console.log(allItems.reverseSort(12,3,4,7,8,9,900))
// console.log(allItems.PI)
