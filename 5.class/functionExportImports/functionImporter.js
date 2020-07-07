// import * as basicCalculation from "./nameExporter"


const modName = require("./functionExporter")
// const {subTwo} = require("./nameExporter");

console.log(modName.subTwo(4,1))
console.log(modName.mulTwo(4,3))
console.log(modName.divTwo(4,2))
console.log(modName.PI)

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




