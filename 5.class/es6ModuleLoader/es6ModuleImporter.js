import {getDob, getName, getLocation} from "./es6ModuleExporter.js";

import {getAddress, getAge, getSurName} from "./es6ModuleExporter.js";

// import {mixED} from "./es6ModuleExporter.js";

// import {getLocation} from "../commonJSExample";

console.log("============================ birinci yontem her bir ifade export icerisine alinirak kullanilabilir ==========================")


console.log(
    `${getName()} was born on ${getDob()}  an livin in thr City of ${getLocation()}.`
);

console.log("============================ ikinci yontem her bir ifade export la kullanilabilir ==========================")

console.log(
    `${getSurName()} is surname of ${getName()} was born on ${getAge()} and livin in ${getAddress()} street.`
);


// console.log(
//     `${mixED.getName()} was born on ${mixED.getDob()}.`
// );


console.log();