const heading = document.getElementById("heading");

heading.textContent = "Hello Finishers!";

const [divElement,] = document.getElementsByClassName("div");

setTimeout(()=>{
    divElement.style.backgroundColor = "blue";
    divElement.style.color = "white";
},3000);



