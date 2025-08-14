let heading=document.querySelector("h1")
let input=document.querySelector("input")
let button=document.querySelector("button")

button.addEventListener("click",()=>{


})

const man={
    lastname:"islam",
    firstnam:"siaful",
    fullname:function(){
        console.log(this.firstnam+ this.lastname)
    }
}
man.fullname()

console.log(man)

const oli=["sai","islam","rakib","sakib","rani","bakir","rakib"]

oli.push("hello")

console.log(oli)