//event handling in js

let  box = document.querySelector(".mybox");
box.onclick = () =>{
  box.innerHTML = "what did i just say";
};

let b = document.querySelector(".btn");
b.onclick = (e) =>{
  console.log("button was clicked");
  console.log(e);
  console.log(e.target);
};

let m = document.querySelector(".mod");
let idx =1;
m.onclick =() =>{
    if(idx%2==0){
        document.body.style.backgroundColor ="white";
        document.querySelector("h1").style.color = "black";
        idx++;
    }
    else{
        document.body.style.backgroundColor ="black";
        document.querySelector("h1").style.color = "white";
        idx++;
    }
};
// b.addEventListener(onclick,()=>{
//     btn.style.backgroundColor ="black";
// })