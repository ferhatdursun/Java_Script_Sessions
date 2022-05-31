// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:
//**********************************************************/


console.log("******** 2- EXPRESSION*******");

//önce declaration
const tekCift = function (sayi) {
    return sayi % 2 == 1 ? "tekdir" : "ciftir"
}

//sonra calling

console.log(tekCift(5));
console.log(tekCift(6));




let büyükBul = function (x, y, z) {

    let enBüyük;

    if (x > y && x > z)
        enBüyük = x;

    else if (y > z && y > x)
        enBüyük = y;

    else {enBüyük = z;}

return enBüyük;

}

console.log("en büyük sayi", büyükBul(3,5,9));
