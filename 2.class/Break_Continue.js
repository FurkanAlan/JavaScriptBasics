console.log("==================Break-Continue============================")
console.log("Break allows to break the loop before finieshes")
console.log("COntinue to allow to go back")
console.log("==================No Break============================")
var numb = 0
while (numb < 7) {
    numb++
    console.log(numb)
}


console.log("==================With Break======if (numb == 3)=====break;=================")

var numb = 0
while (numb < 7) {
    // console.log(number)
    if (numb === 3) {
        break;
    }
    numb++
    console.log(numb)
}

console.log("=================With Continue=========if (numb < 5) ==========continue;==========")

var numb = 0

while (numb < 7) {
    numb++
    if (numb < 5) {
        continue;
    }

    console.log(numb)
}
console.log("eger sayi 5 den kucukse donguyu devam ettir, ondan dolayi 5 ve 5 den buyukler cikti")
console.log("==============================================")
