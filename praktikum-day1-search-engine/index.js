const app = document.getElementById("app");
const output = document.getElementById("output");
const btnNama = document.getElementById("btn-1");
const img = document.querySelector("img")
const input = document.getElementById("input");


const tampilGambar = () => {
    var result = input.value.toUpperCase();
    console.log(result);
    if(result === "BURUNG"){
        img.src= "./img/burung.jpg"
    }
    else if(result === "HARIMAU"){
        img.src= "./img/harimau.jpg"
    }
    else if(result === "KUCING"){
        img.src= "./img/kucing.jpg"
    }
    else{
        img.src ="./img/manusia.jpg";
    }
};

btnNama.addEventListener("click", tampilGambar);