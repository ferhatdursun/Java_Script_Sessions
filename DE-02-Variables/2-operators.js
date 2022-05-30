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
console.log(s1 + s2);

//* cikarma yapar(string ve number da cikarma islemi uygulanirsa)

console.log(s1 - s2);
console.log(s2 - s1);
const s3 = "iki";

const sonuc = s2 - s3;
console.log(sonuc); //* NaN not a number


const dogumTarihi = 1979;
const isim = "Ashley";

console.log(isim + " " + (2022 - dogumTarihi) + "yasindadir");


//! Template Literals


console.log(`${isim} ${2022 - dogumTarihi}yasindadir`);


//* ARTTIRMA-AZALTMA

var a = 5;

console.log(a++);//* a burada 5 iken yazdiriliyor sonra 6 oluyo ama yazidirilmiyor.
console.log(a); //* a 6 olduktan sonra burada yazdiriliyor.
console.log(++a);//* Burada a önce 1 artiriliyor. 7 olduktan sonra yazidirliyor. ++ a dan önce oldugu icin.
console.log(a); //* burada a direk olarak 7 olarak yazdiriliyor.

console.log("*************")
let b = 5;

console.log(b--); //* burada b ilk olarak 5 yazidiriliyor. Daha sonra 4 oluyor ama yazdirilmiyor.
console.log(b); //* b burada üstte en son 4 oldugu icin 4 olarak yazdiriliyor.
console.log(--b); //* b burada ilk olarak --b den 3 oluyor ve yazdiriliyor.
console.log(b); //* b burada 3 olarak yazdiriliyor.

console.log("*************")
let d = --b; //* d burada b den 1 cikarilip 2 olarak yazdirmaya hazir hale geliyor.

console.log(d); //* d burada 2
console.log(b);//* b burada 2

console.log("**************")
d = b--;

console.log(d);
console.log(b);

// d yi 5 artir d= d+5;

d += 5;
console.log(d);


let e = 5;
console.log(e *= 10);



// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================


const sayi1=4;
 
console.log(sayi1==4); //true
console.log(sayi1=="4"); //true
console.log(sayi1==="4"); 

console.log(sayi1!=5); //true
console.log(sayi1!="5"); //true
console.log(sayi1>5); //false
console.log(sayi1<=5); //true




//* ÇAPRMA VE ÜS ALMA
//*--------------------------------------
const pi = 3.14;
const r = 3;
const alan = pi * r ** 2; //?Us alma (**)
const cevre = 2 * pi * r;
console.log(`ÇEVRE: ${cevre} ALAN:${alan}`);





//* ---------MOD ALMA-------*//

const number = 456;

const birler = number%10; 
const onlar = Math.floor(number/10)%10;
const yüzler = Math.ceil(number/100);
console.log(birler, onlar, yüzler);

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.


// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================


//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false


const v1= false || 0 || 12.6 ||true || false || null;
console.log(v1); //12.6-- "// veya demek." bulduğu ilk true değeri döndürür

const v2= false || 0 || null || undefined || NaN;
console.log(v2); // NaN-- cevap false olacaksa son falsy değeri döndürür


const v3 =5 && true && true && 0 && "";
console.log(v3); //0 -- ilk bulduğu falsy değeri döndürür

const v4= 6 && true && 12.5 && 7;
console.log(v4); // 7-- en son gördüğü true değeri döndürür

//!DEĞİL !

const v5= true;
const v6= 7;

console.log(!v5, !v6);



// * =======================================================
// *                 TIP DÖNÜSÜMLERI
// * =======================================================


const para = Number("1000") + Number("900") // Stringler bu sekilde number'a dönüstürülebiliyor.

console.log(para);

// numberyerine alternatif parseint de kullanilabilir.

// console.log(parseInt(para));

console.log(Number("")); //0
console.log(Number(null)); //0


console.log(Number("0x11")); // 17 x=hexa=16
console.log(Number("0b101")); // 5 b=binary 2lik taban
console.log(Number("0o11")); // 9 o=opal=8
console.log(Number("sayi")); //NAN

//* -------- NULLISH COALESCING OPERATOR----------- */
//?  Bir ifadenin null veya undefined olması durumuna göre seçim yapmamıza olanak sağlayan bir operatördür.eğer kullanıcı input a null girer yada hiçbişey (undefined) girmezse, belirteceğim ifadeyi (noname) kabul et
const isim1 = null; // ?null
const defaultIsim = "noname";
const islem1 = isim1 ?? defaultIsim;

console.log(islem1); //noname 