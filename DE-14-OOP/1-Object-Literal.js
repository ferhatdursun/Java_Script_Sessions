//* ======================================================
//*                    (OOPS)
//* ======================================================


//*object literals
const book1 = {
  title : "the Brother Karamazov",
  author:"Dostyevski",
  year:"1880",
  getSummary:function () {
    return `${this.title} ${this.year} yilinda $ {this.author} yazmistir`
    
  }
}

console.log(book1.ferhat());

const book2= {
  title:"Nutuk",
  author:"Atatürk",
  year: "1927",
  ferhat:function () {
    return `${this.title} ${this.year} yilinda ${this.author} yazmistir.`;
  },
};