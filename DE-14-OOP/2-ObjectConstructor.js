//* ======================================================
//*                    OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor 
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor old biz tarafından anlaşılsın. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)

function Book(titlE,authoR, yeaR) {
this.author = authoR;

this.year=yeaR

this.ferhat=function(){
 return `${this.title} ${this.year} yılında ${this.author} yazmıştır `;}
this.title = titlE;

}

const book1= new Book("the brothers karamazov","Dostyevski", 1835)
console.log(book1);
 const book2= new Book("kaşagı","ömer seyfettin", 1935)
 console.log(book2.ferhat());
 console.log(book1.title);

 //? oluşturulan instances object e yeni özellik veya function ekleyebiliriz
//? Ama bunlar sadece ilgili instance a bağlı.book1 e eklediysek sadece onu bağlar
//? Constructor dan  oluşturulan diğer instance lar bu yeni özellikleri içermez.
book1.price=100;
book1.getirBaslik=function(){
 return this.title
}

console.log(book1);
console.log(book2);

