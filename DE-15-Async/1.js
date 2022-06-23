// setTimeout(() => {
//     console.log("Ferhat: S.a Apo");
//     setTimeout(() => {
//         console.log("Apo: A.s Fero");
//         setTimeout(() => {
//             console.log("Ferhat: Aksama halisahaya geliyo musun?");
//             setTimeout(() => {
//                 console.log("Apo: Tabi geliyorum amk.");

//             }, 5000)
//         }, 5000)
//     }, 5000)
// }, 5000)

// console.log("counter baslat");

// const a = "Ferhat";

// let counter =0;

// const ferhat = setInterval(() => {
//     console.log(a);
//     console.log(++counter);
//     if (counter === 5) {
//         clearInterval(ferhat);
//     }
// }, 2000);


console.log("promise");

const promise = new Promise((resolve, reject) =>{
    const person = {
        name: "ali",
        surname: "koc",
    };
    resolve(person);
    reject(new Error("Promise basarisiz"));
} );


console.log(promise);

promise
    .then((response) => {
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });