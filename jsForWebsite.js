let welcomeScreen =document.querySelector(".welcomeScreen");
let logo =document.querySelector(".welcomeScreen-header");
let logoSpan=document.querySelectorAll(".logo");
window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx+1)*50)
            })
        },2000)

        setTimeout(()=>{
            welcomeScreen.style.top= '-100vh';
        },2300)
    })
})









const people=[
    {
    firstName:"john",
    age:30,
    weight:170
},
{
    firstName:"sally",
    age:29,
    weight:5000
}
]
function printr(){
    for (let person of people){
        console.log(person.age)
    }
}
printr();
const mainbody = document.getElementById("mainBody");
const mainbodyTwo= document.querySelectorAll('li');
console.log(mainbodyTwo);