'use strict';

const images=document.querySelectorAll(".carousel img");
console.log(images);
let count=0;
const prev=document.getElementById("prev");
const next=document.getElementById("next");

prev.addEventListener("click", function(){
    images[count].classList.remove("show");
    if (count===0) count= images.length-1;
    else count--;
    images[count].classList.add("show");
});

next.addEventListener("click", function(){
    images[count].classList.remove("show");
    if (count===images.length-1) count=0;
    else count++;
    images[count].classList.add("show");
});