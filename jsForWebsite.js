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