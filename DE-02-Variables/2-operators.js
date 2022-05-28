// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;


// Bir arttır
toplamFiyat++
console.log(toplamFiyat);

// 10 arttır
toplamFiyat += 10
console.log(toplamFiyat);

//? + operatörü String Concatination işlemi de yapar.
let ad = "ahmet";
let soyAd = "Can";
console.log(ad + " " + soyAd);

//* String Concatination bir number ve string toplama yapilirsa concatination yapar.
const s1 = 5,
    s2 = "3";
    console.log(s1+s2);

//* cikarma yapar(string ve number da cikarma islemi uygulanirsa)

console.log(s1-s2);
console.log(s2-s1);
const s3="iki";

const sonuc = s2- s3;
console.log(sonuc); //* NaN not a number


const dogumTarihi=1979;
const isim="Ashley";

console.log(isim+ " " + (2022-dogumTarihi) + "yasindadir");


//! Template Literals


console.log(`${isim} ${2022-dogumTarihi}yasindadir`);


//* ARTTIRMA-AZALTMA

var a=5;

console.log(a++);//* a burada 5 iken yazdiriliyor sonra 6 oluyo ama yazidirilmiyor.
console.log(a); //* a 6 olduktan sonra burada yazdiriliyor.
console.log(++a);//* Burada a önce 1 artiriliyor. 7 olduktan sonra yazidirliyor. ++ a dan önce oldugu icin.
console.log(a); //* burada a direk olarak 7 olarak yazdiriliyor.

console.log("*************")
let b=5;

console.log(b--); //* burada b ilk olarak 5 yazidiriliyor. Daha sonra 4 oluyor ama yazdirilmiyor.
console.log(b); //* b burada üstte en son 4 oldugu icin 4 olarak yazdiriliyor.
console.log(--b); //* b burada ilk olarak --b den 3 oluyor ve yazdiriliyor.
console.log(b); //* b burada 3 olarak yazdiriliyor.

console.log("*************")
let d=--b; //* d burada b den 1 cikarilip 2 olarak yazdirmaya hazir hale geliyor.

console.log(d); //* d burada 2
console.log(b);//* b burada 2

console.log("**************")
d =b--;

console.log(d);
console.log(b);

// d yi 5 artir d= d+5;

d +=5;
console.log(d);






