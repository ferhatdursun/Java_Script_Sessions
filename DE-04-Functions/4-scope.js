// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//!global scope
let birinci = 5;
let ikinci = 10;
let ücüncü = 2534;

console.log(birinci, ikinci, ücüncü);

const fonksiyon = function () {

    birinci = 10;
    let ikinci = 256;
    let dördüncü = 0;

    console.log(birinci, ikinci, ücüncü, dördüncü);
    //* console.log iceride yazildigi icin yazdirilmak istenen varlar ilk olarak iceridekilerden yazdiriliyor.
    //* Eger yazidirilmak istenen iceride yoksa disarida olan yazidiriliyor.
}

fonksiyon();


console.log(birinci, ikinci, ücüncü);

//* burada fonksiyon disindan yazdirilmak isteniyor.
//* ancak iceride ki birincinin basinda let olmadigi icin son olarak tanimalanan birinci iceride olsa bile bu iceride ki yazdiriliyor. Basinda let olmadi icin.
//* ikinci iceridekinde ve disaridakin de let oldugu ve bu console.log disarida oldugu icin disarida olan let ikinci=10; yazdiriliyor.

