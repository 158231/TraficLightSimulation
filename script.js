let red=document.getElementsByClassName("btn-red")[0];
let green=document.getElementsByClassName("btn-green")[0];
let yellow=document.getElementsByClassName("btn-yellow")[0];
console.log(red,green,yellow);
let circle=document.getElementById("circle");
green.addEventListener("mousedown",(event)=>{
    console.log(event);
    circle.style.backgroundColor="green";
})
yellow.addEventListener("mousedown",(event)=>{
    console.log(event);
    circle.style.backgroundColor="yellow";
})
let Reset=document.getElementsByClassName("btn-Reset")[0];
Reset.addEventListener("mousedown",(event)=>{
    console.log(event);
    circle.style.backgroundColor="lightskyblue"

})
let h1=document.getElementsByClassName("TrafficLight")
console.log(event)




red.addEventListener("mousedown",(event)=>{
console.log(event);
circle.style.backgroundColor="red";
h1.style.color="red"
})
