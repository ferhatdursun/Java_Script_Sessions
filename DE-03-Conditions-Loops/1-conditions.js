// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!------------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log(" *****==IF-ELSE IF== 4 Islem Hesap Makinesi ****** ");
console.log("-------------------------------------");


const s1 = Number(prompt("1.sayıyı giriniz"));
const islem = prompt("+ , - , * , / işlemlerinden birini giriniz");
const s2 = +prompt("2.sayıyı giriniz");

let sonuc = 0;

if (islem == "+") {
    sonuc = s1 + s2;
}
else if (islem == "-") {
    sonuc = s1 - s2;
}
else if (islem == "*") {
    sonuc = s1 * s2;
}
else if (islem == "/") {
    // !s2=0, null...
    // if(s==0) bu sadece 0 ı kontrol eder
    if (!s2) {
        alert("yanlış sayı girdiniz")
    } else
        sonuc = s1 / s2;

}
else {
    alert("Yanlış işlem seçtiniz")
}
console.log(sonuc);


//* Örnek *//

const yas = 20;
const cinsiyet = "erkek";
const saglık = false;


if (yas >= 18 && cinsiyet == "erkek" && saglık) {
    console.log("askerlik yapabilir");
    //* & ve demek
    //* || veya demek
} else if (saglık == false) {
    console.log("askerlige elverissiz!")
} else console.log("askerlikten muaf")


//*******SWİTCH-CASE */

let sonuc1 = 0;


switch (islem1) {
    case "+":
        sonuc1 = n1 + n2;
        break;

    case "-":
        sonuc1 = n1 - n2;
        break;

    case "*":
        sonuc1 = n1 * n2;
        break;

    case "/":
        sonuc1 = n1 / n2;
        break;

    default:
        alert("yanlış işlem girdiniz")
        break;
}
console.log(` ${n1} ${islem1} ${n2} = ${sonuc1} `);


//* Ternay *//

//Ornek: maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın.
const asgariUcret = 4250;
const maas = +(prompt("maasınızı giriniz"))
//* prompt'un solunda ki + input ile alinan degeri interger'a cevirmek icin.
const zamlıMaas = maas <= asgariUcret ? maas * 1.25 : maas * 1.1;
//* ? burada if olarak : ise else olarak kullaniliyor.


console.log(zamlıMaas);



//*Ornek: maasınız borcunuzdan 5000 ve üstü kadar fazlaysa 
//*kredi alabilirsiniz, aksi durumda alamazsınız 

const Schuld = Number(prompt("Borcunuzu giriniz"));
const Gehalt = Number(prompt("Maasinizi giriniz"));


const kredi = Gehalt - Schuld >= 5000 ? "kredi alabilir" : "kredi alamaz";

console.log(kredi);