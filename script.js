let heart_btn=document.getElementsByClassName("heart_btn")
let plus=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus=document.getElementsByClassName("minus-btn")
let Item=document.getElementsByClassName("Item")
let deletee=document.getElementsByClassName("delete")
for (let index = 0; index < heart_btn.length; index++) {
    
    heart_btn[index].addEventListener("click",function(){
        if(heart_btn[index].style.color==="red"){
            heart_btn[index].style.color="black"
        }
        else{
            heart_btn[index].style.color="red"
        }
    })

    plus[index].addEventListener("click",function(){
        Quant[index].value=Number(Quant[index].value)+1
    })

    minus[index].addEventListener("click",function(){
        if (Quant[index].value!=="0"){
            Quant[index].value=Number(Quant[index].value)-1
        }
        
    })

    deletee[index].addEventListener("click",function(){
        Item[index].style.display="none"
    })

}
