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