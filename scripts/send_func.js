function sendFunc(num){
var screenVal =document.getElementById("screenDisplay");
var newVal=screenVal.innerHTML + num;
screenVal.innerHTML=newVal;
}