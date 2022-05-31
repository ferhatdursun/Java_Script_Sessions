// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************


for (let i = 1; i <= 10; i++) {
    console.log("merhaba", i);
}


//** 1 den N'e kadar olan sayilarin toplamini bulan kodu yaziniz! *//

//*const n = +prompt("N icin kullanilacak sayiyi giriniz!");

// let sayi = 0;
// for (let i = 1; i <= n; i++) {
//     sayi += i
// }
// console.log(sayi)


//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

const sayi = +prompt("ASAL kontrolü için bir sayı giriniz");
let asal = true;

for (let i = 2; i < sayi; i++) {

    if (sayi % i == 0) { asal = false; break }

}
console.log(asal == true ? "asal sayıdır " : "asal sayı değildir");



//******************** WHILE ******************
//Ornek1: WHİLE İÇİN 0-100 arasında bir not giriniz, aksi durumlarda
// error msjı verip, tekrar not isteyiniz

let nots = +prompt("WHILE ICIN 0-100 ARASI SAYI GIRINIZ!")
while (nots < 0 || nots > 100) {
    console.error("not 0-100 arasinda olmalidir.")
    nots = +prompt("WHILE ICIN 0-100 ARASI SAYI GIRINIZ");
}

console.log("girdiginiz sayi 0-100 arasindadir.");


//************ DO-WHILE *************/

let notlar;
do {
    notlar = +prompt("DO-WHILE ICIN 0-100 ARASI BIR SAYI GIRINIZ!");
    alert(notlar);
} while (nots < 0 || nots > 100);
console.log("girdiginiz not", notlar);

//* Burada girdigimiz sayi while döngüsünde belirtilen sarti saglayan bir sayi ise, 
//*tekrardan prompt calisiyor ve yeni bir sayi girmemiz gerekiyor.



//? ORNEK1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.