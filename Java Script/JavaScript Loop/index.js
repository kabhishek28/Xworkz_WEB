console.log("hi i am abhi");
let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}                         

let obj = {
    name : "Abhi",
    role : "programer",
    company:"x-workz"
}

for (const key in obj){
    const element = obj[key];
    console.log(key,":",element)
}

for(const c of "ABHI"){
    console.log(c)
}

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const element of object) {
    
// }

// let i = 0;
// while(i<5){
//     console.log(i)
//     i++;
// }




i = 10;
do{
    console.log(i)
    i++;

}while(i<5);