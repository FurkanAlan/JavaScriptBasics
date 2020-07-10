console.log("============================== Buradaki this Lexical this olarak adalandiriliyor, cunku Lexical ` ` icersinde kullaniliyor ==============================")
// const user = {
//     name: "Jane",
//     vehicles: ["Bike", "Train"],
//     toStringing: function () {
//         console.log(`${this.name} has ${this.vehicles}`);
//     }
// }
//
// user.toStringing()


// const userName = {
//     name: "Jane",
//     vehicles: ["Bike", "Train"],
//     toStringing: () => console.log(`${this.name} has ${this.vehicles}`)
//
// }
//
// userName.toStringing()  //sonuc undefined has undefined oluyor


const personProperty = {
    name: "Jane",
    vehicles: ["Bike", "Train"],
    //1. yol
    // result: function () {
    //     const that = this
    //     this.vehicles.forEach(function (vehicle) {
    //         console.log(`${that.name} has ${vehicle}`)  //we have lost the context of this keyword
    //         //that.name refer to name: "Jane
    //     }.bind(this))
    // }

    //2. yol
    // result: function () {
    //     const that = this //buradaki that parentezin disinda oldugu icin yukarida bulunan name ile baglantiyi sagliyor
    //     this.vehicles.forEach(function (vehicle) {
    //         console.log(`${that.name} has ${vehicle}`)  //we have lost the context of this keyword
    //         //that.name refer to name: "Jane
    //     })
    // }

    //3. yol es6
    result: function () {
        this.vehicles.forEach(vehicle => {console.log(`${this.name} has ${vehicle}`)
        })
    }
}
personProperty.result()
