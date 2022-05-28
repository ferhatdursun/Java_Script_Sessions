//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).


const yas = 25;

console.log(yas);

console.log(typeof yas);
// yas=27;
// console.log(yas);

//! const keyword degerine baslangic atamasi yapmak zorunludur.
// const pi; yazilamaz.

const kelime = "osman";
console.log(kelime, typeof kelime);

const isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);

const parite = 1.1;
console.log(parite);
console.log(typeof parite);

const name1 = "Clarusway";
const name2 = "developer";
console.log(name1, name2);




// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.


let dil;
dil = "Java";
console.log(dil);

dil = "Ferhat"; //parantez icerisinde olmazsa normal kelimeleri yazdirmiyor.
console.log(dil);


dil = null;
console.log(dil, typeof dil);


let sayi = 5;
let sonuc = sayi + 6;
console.log(sonuc);


//! degisken tanimlama keyword ü kullanilmasa bile JS derleyicisi otomatik olarak tanimlar.

sayi1 = "6";

console.log(sayi1, typeof sayi1);


//string ile sayinin toplami aslinda toplama islemi olmaz, concatination olur.
sonuc1 = sayi1 + 5;
console.log(sonuc1);


// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.


var x = 5;
console.log(x, typeof x);


// var keyword kullanildiginda blok icerisinde ve disarisinda erisilebilir.
var ilk = "Global";
console.log(ilk, typeof ilk);


{
    console.log(ilk);//global
    var ilk = "Süslü";
    console.log(ilk);//süslü
}

// ilk="Bosluk"
ilk = "Bosluk";
console.log(ilk);



console.log("**************************");


let first = "osman";
console.log(first);


{
    let first = "ipek"; // Burada süslü icerisinde tanimlanan first süslü disindan cagrilamaz, kullanilamaz.
    console.log(first); //ipek
}


console.log(first); //osman


{ console.log(first) } // first süslü disinda üstlerde baska bir tanimlanmisssa (süslü icerisinde degilse) burada kulllanilabilir.
// burda ki first yukarida ki let first="osman" dan geliyor.

       