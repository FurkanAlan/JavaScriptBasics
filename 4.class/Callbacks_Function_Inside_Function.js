console.log("=======================Callback=========================")

function callingFunctionBack(name, callBack) {
    console.log(callBack(name))
}

var callBack = function (name) {
    return "Hi " + name + ", Welcome"
}

console.log("birinci yontem de calBack ayri olarak yazildi daha sonra, sadece isim olarak callingFunctionBack dahil edildi ")
callingFunctionBack("Mustafa Ali",callBack)

console.log("ikinci yontem, callBack fonksiyon olarak callingFunctionBack icine yazildi")
callingFunctionBack("Mustafa Ali",function (name) {
    return "Hi " + name + ", Welcome"
})

console.log("calback is a function executed inside another function")

console.log("=======================Callback with map example=========================")


var data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var mapCallBackFunction = function (items) {
    return items * 4
}

var dataWithMap = data.map(mapCallBackFunction)

console.log("datanin islmesiz hali: " + data)
console.log(dataWithMap)
console.log("data ya islem, 4 ila carpildi uygunlamis hali: " + dataWithMap)