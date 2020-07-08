// export = {
//     getName:  () => "Ali",
//
//     getLocation: () => "Mardin",
//
//     dob: "10.01.1980"
// };

// console.log("============================ birinci yontem her bir ifade export icerisine alinirak kullanilabilir ==========================")

 const getName = () => "Ali"

 const getLocation = () => "Mardin"

 const getDob = () => "10.01.1980"


export{
    getName,
    getLocation,
    getDob
}

// console.log("============================ ikinci yontem her bir ifade export la kullanilabilir ==========================")
export const getSurName = () => "Ak"

export const getAddress = () => "Malatya sokak"

export const getAge = () => "33"





//getName: getName = () => "Ali",   means let getName: function(): string or we have to replace with this keyword like
//getName: this.getName = () => "Ali", it means
//mixED.getName: function(): string


// export const mixED = {
//     getName: this.getName.bind(getName = () => "Ali"),
//     getLocation : this.getLocation.bind(this.getLocation = () => "Mardin"),
//     getDob: this.getLocation.bind(this.getDob = () => "10.01.1980")
//
// }



// getDob: this.getLocation.bind.getDob = () => "10.01.1980"
