let headingone=document.querySelector(".heading")
let inputone=document.querySelector(".input")
let inputtwo=document.querySelector(".input_two")
let buttonone=document.querySelector(".btn")
let errorone=document.querySelector(".error")


buttonone.addEventListener("click",()=>{

    if(inputone.value==""  ){
        errorone.innerHTML="Your number is not valide man"
    }
    if(!(inputone.value-0) ){
          errorone.innerHTML="Enter a valid number man"
    }
    if(inputone.value>10||  inputone.value<1){
        errorone.innerHTML="Your number is not valide man third "
    }else{
      headingone.innerHTML = "Player Two";
inputone.style.display = "none";
inputtwo.style.display = "block";

    }
    if(inputone.value=inputtwo.value){
        headingone.innerHTML="Player one is winner"
    }else{
        headingone.innerHTML="Player two is winner "
    }
    


})