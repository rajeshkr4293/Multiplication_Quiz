let num1= Math.floor(Math.random()*10);
let num2= Math.floor(Math.random()*10);

let questionEl= document.getElementById("question");
let formEl = document.getElementById("form");
let inputEl= document.getElementById("input");
let scorEl= document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));


if(!score){
    score=0;
}

questionEl.innerHTML=`What is ${num1} multiple of ${num2}?`;
scorEl.innerText= `score : ${score}`

let correctAns= num1 * num2;

formEl.addEventListener("submit",()=>{
    let userAns= +inputEl.value
    // console.log(userAns + typeof + userAns);
    if(userAns===correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
});

// In the context of localStorage, all data is stored as strings. This is a fundamental design choice of the Web Storage API. Here’s why you need to convert numbers (or other non-string data types) into string format when using localStorage:
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}