console.log("=================== Switch ===========================")
console.log("it is more sensible to use switch-case for multuple sceniros")
var personDesc = {
    name: "Ali",
    age: 16
}

switch (true) { //personDesc.age bunu bulamiyor ondan dolayi default a atliyor
    case (personDesc.age >= 16 || personDesc.age >= 20):
        console.log(personDesc.name + " is bigger than 16 yo")
        break;
    default:
        console.log(personDesc.name + " is less than 16 yo")
}


switch (new Date().getDay()) {
    case 5:
        console.log("Sunday");
        break;
    case 2:
        console.log("monday");
        break;
    default:
        console.log("unknown day");
}