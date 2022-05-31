// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması


function yazdir() {

    console.log("osman");

}

yazdir();//call veya invoke
yazdir();


//* Örnek2: parametreli fonksiyon
//****************************************************************/


function adYazdir(ad, ikinci, soyad) {

    console.log(ad, soyad, ikinci)

}

adYazdir("Ferhat", "Dursun", "Öztürk")


// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması



//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.


//teksayı, çift sayı kontrol fonksiyonu

const a = tekCiftSayi(5);
console.log(a);
console.log(tekCiftSayi(4));


function tekCiftSayi(x) {

    return x % 2 == 1 ? `${x} sayısı tektir` : ` ${x} sayısı cifttir`
}