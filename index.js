// let emp = [{

//     name: "Mru",
//     age: 18
// }, {

//     name: "Mru",
//     age: 20
// }, {

//     name: "Mru",
//     age: 19
// }]

// const result = emp.filter((x) => {

//     return x.age < 20;
// })
// console.log(result);

// const divselection = document.getElementById('inn');

// divselection.addEventListener('click', () => {
//     console.log('Hello world');
// });


// lee than4 resolve an greater then 4 is reject



const testPromise = new Promise((resolve, reject) => {
    let value = 2;

    if (value < 4) {

        resolve("Value is lsee than 4")
    }
    else {

        reject("value is  greate than 4")
    }
})

testPromise.then((result) => {

    console.log('===>', result);

})

//   .catch((error) => console.log('Errroe', error));

