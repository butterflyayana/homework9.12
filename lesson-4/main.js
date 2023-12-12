// for loop

let age = 24 
console.log(age);
age = 25 
console.log(age);

// const menu = ['lee', 'hwan', 'han', 'kim', 'bang', 'chan']
// console.log(menu[0]);
// document.write('<a href="">' + menu[0] + '</a>')
// document.write(`<a href=""> ${menu[1]} </a>`)

for (let index = 0; index < 6; index = index + 1) {
    console.log(index);
    document.write(`<a href=""> ${menu[index]} </a>`)
}

const cars = [
    {
        name: "mersedes",
        img: "https://i.pinimg.com/474x/f1/30/c6/f130c68484d87a368a50e1bd3c5af6d4.jpg"
    },
    {
        name: "bmw",
        img: "https://i.pinimg.com/474x/91/d7/84/91d78443a36d006577e8595f8d3a5608.jpg"
    },
    {
        name: "kia",
        img: "https://i.pinimg.com/474x/a2/48/50/a248509498b27d7b2ebfb5457eb08648.jpg"
    }
]
// index = index + 1 = i++
for (let i = 0; i < 3 ; i++ ) { 
    document.write(`<img src='${cars[i].img}' alt='image' />`)
    document.write(` <h3> ${cars[i].name} </h3> `)
}

// for (const car of cars) {
//     document.write(` <img width='300' scr="${car.img}" alt="" />`)
//     document.write(` <h3> ${car.name} </h3> `)
// }

const list = []
for (let number = 0; number < 100; number++) {
    if(number % 15 === 0){
        list.push ("lee-felix" + number)
    }
}
console.log(list);

/*
while(){}
do {} while)(){}
for (of){}
for (in) {}
*/

// tolower case - small
// upperText - big
//trim-убирает пробел
console.log(text.trim());

//NaN - (not a number
let = 5
console.log(a++);// 5 + 1 =6
console.log(a);
console.log(++a);

//boolen() 0, false, undefinet, -0, NaN,null ,[], ""