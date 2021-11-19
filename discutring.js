// var a,b,c 
// [a,b,c] = [4,6,7]
// console.log(a,b);

// var a = 7;
// var b = 9;     //we can do swaping with the help of destructuring
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

var [a,b,c] = [8,9,7,9,2,3,4]
console.log(a,b,c);

var obj = {Name:"priyanka",surname:"sharma"};
({Name,surname} = obj)
console.log(Name,surname);


