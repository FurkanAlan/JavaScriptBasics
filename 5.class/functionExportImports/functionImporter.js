// import * as basicCalculation from "./nameExporter"

console.log("================================= 1. method ===================================")
const modName = require("./functionExporter")
// const {subTwo} = require("./nameExporter");

console.log(modName.subTwo(4,1))
console.log(modName.mulTwo(4,3))
console.log(modName.divTwo(4,2))
console.log(modName.PI)

console.log("================================= 2. method ===================================")

const {subTwo,mulTwo} = require("./functionExporter")  // bu skilde sadece istedigimiz ifadeleri kullanmis oluruz
console.log(subTwo(2,3))


console.log("================================= to get from different package ===================================")

//importing from other packages
// const modFarImporter = require("./moduleExample/indexMain")
const modFarImporter = require("./moduleExample") //in here I am pointing a folder and than node will look inside of that folder and look for indMain.js file, initially will check the package.json what is the entry of main
//core node module de boyle birsey yapmaya gerek kalmiyoe mesela fileserve almak icin const fs = require("fs") yereli olur


modFarImporter()



//
//
//
// console.log("==================== Importer ============================")
//
// console.log("to import any value from module it has to be before any methods, should be listed top")
//
//
// console.log("==================== addition ============================")
//
// console.log(basicCalculation.subTwo(2,1))
//
// console.log("==================== subtraction ============================")
//
// console.log(basicCalculation.subTwo(12, 5))
//
// console.log("==================== multiplication ============================")
//
// console.log(basicCalculation.mulTwo(12, 5))
//
// console.log("==================== division ============================")
//
// console.log(basicCalculation.divTwo(12, 5))
//
// console.log("================================================")
//
// console.log(basicCalculation.mulTwo(12, 4))




