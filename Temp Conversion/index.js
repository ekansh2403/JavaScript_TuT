
const textBox=document.getElementById("textBox");
const Faren=document.getElementById("tofarenhiet");
const Celsius=document.getElementById("tocelsius");
const result=document.getElementById("result");
let temp;
function convert(){
    if(Faren.checked){
        temp=Number(textBox.value);
        temp=(temp*9/5)+32;
        result.textContent=temp.toFixed(1);
    }
    else if(Celsius.checked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1);

    }
}