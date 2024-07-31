// let x=3.21;
// let y=2;
// let z;
// z=Math.round(x);
// z=Math.floor(x);
// z=Math.ceil(x);
//trunc
//pow
//sqrt
//log
//abs
//max()
//min()
// console.log(z);

                            /*RANDOM NUM GENERATOR*/
// let randomNum=Math.floor(Math.random()*100)+1;
// console.log(randomNum);                            
const myBtn=document.getElementById("mybtn");
const myLabel=document.getElementById("mylabel");
const min=1;
const max=100;
let randomNum;
myBtn.onclick=function(){
    randomNum=Math.floor(Math.random()*max)+min;
    myLabel.textContent=randomNum;
}