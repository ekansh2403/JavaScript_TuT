//.checked
const visaBtn=document.getElementById("visaBtn");
const masteracardBtn=document.getElementById("mastercardBtn");
const paypalBtn=document.getElementById("paypalBtn");
const paymentRes=document.getElementById("paymentRes");
const mySubmit=document.getElementById("mySubmit");

mySubmit.onclick=function(){
    if(visaBtn.checked){
        paymentRes.textContent=`pay with Visa`;
    }
    else if(masteracardBtn.checked){
        paymentRes.textContent=`pay with Mastercard`
    }
    else{
        paymentRes.textContent=`pay with paypal`
    }
}
//Ternary Operator-> condition ? ifTrue : ifFalse;

