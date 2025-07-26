console.log("hhi guys")

var a = 5;
a = a + 2;//this is allowed
var b = 6;

var c = "abhi";
 
console.log(a + b);
console.log(typeof a,typeof b,typeof c);

// const a1 = 6;
// a1 = a1 + 1;//this is not allowed 

var d = 16;
console.log("var d upper out side block :" + d)
{
    var d = 10;
    console.log("var d inside block :"+d);
    let a = 66;
    console.log("let a = "+a);
}

console.log("var a = "+a);

console.log("var d outside block :"+d);



let x = "harry bhai";
let y = 22;
let z = 3.44;
const p = true;
let q = undefined;
let r = null;

console.log(x, y , z, p ,q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    name: "Harry",
    "job code": 5600//if space the " "
}
console.log(o);
o.salary = "100crores"
console.log(o);
o.salary = "5000crores"
console.log(o);