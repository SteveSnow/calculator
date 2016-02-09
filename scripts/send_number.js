function sendNumber(num){
var screenVal =document.getElementById("screenDisplay");
if (screenVal.innerHTML == 0 && screenVal.innerHTML !=="0."){
if (num !=="."){
screenVal.innerHTML=num
}else{
screenVal.innerHTML="0."
}
}else {
var newVal=screenVal.innerHTML + num
screenVal.innerHTML=newVal
};
}