console.log("hello js!");

//object


let student ={
    name:"kannan",
    age:20,
    cgpa:8,
    isPass:true,
};
console.log(student.name);

// let n =prompt("Enter name (no space) : ");
// console.log('@'+n+n.length);
 
// alert("nothing vro");


//array and if loop

let arr = ['tree',43,true,675];

console.log(arr[1]);

if(arr[2]!=null){
    console.log(arr);
}
else
{
    console.log(student);
}


// string and methods
let str ='javascript';

console.log(str[4]);

let output = `cgpa of ${student.name} is ${student.cgpa}`;

 console.log(output);

str = str.toUpperCase();
console.log(str);

let str1 = ' 321 go';
console.log(str.concat(str1));

console.log(str.replace('V','j'));

console.log(str.slice(3,7));



//function

function mod(a){
    
    if(a==null)
    {
        console.log('no value');
    }
    else if(a%5==0)
    {
        console.log(a+' is a multiple of 5');
    }
    else
    {
        console.log(a+' is not a multiple of 5');
    }
}
// let k =prompt("Enter a number : ");
// mod(k);


//arrow function

const arrowfun = (str) =>{
    let i=0;
    for (a of str){
        if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u')
        {
            i++;
        }
    }
    console.log(`no of vowels in ${str} is ${i}.`);
}
arrowfun('apnacollege');

//ARRAY METHODS
//1
console.log(arr.splice(2,3,34));
console.log(arr);

//2
//for each

let l = [1,4,6,3];
console.log(l);
console.log('for each ...');

l.forEach(function print(val){
    console.log('square of '+val+' = '+val*val);
});
// or
// let calcSquare =(n) =>{
//     console.log(n*n);
// }
// l.forEach(calcSquare);


//3
//map
let newarr = l.map((val)=>{
    return val*5;
});
console.log(newarr);

//4
//filter
let g90 =[76,96,42,90];
let great90 = g90.filter((val)=>{
    return val>=90;
});
console.log(great90);

//5
//reduce
const out = l.reduce((prev,cur) => {
    return prev > cur ? prev : cur;
});
console.log('largest '+out);
