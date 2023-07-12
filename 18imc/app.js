let peso=document.querySelector("#peso")
let altura=document.querySelector("#alt")
let vpeso=document.querySelector("#vpeso")
let valtura=document.querySelector("#valt")
let imc=document.querySelector("#imc")
let condi=document.querySelector("#condi")

peso.oninput=()=>{
    vpeso.innerHTML=peso.value
    calcular();
  }
  altura.oninput=()=>{
    valtura.innerHTML=altura.value
    calcular();
  }

  const calcular=()=>{
    condi.innerHTML="<img src='esperando.png' width='400px' height='400px'>"
    let p=parseInt(document.querySelector("#peso").value)
    let a=parseFloat(document.querySelector("#alt").value)

    let r=p/(a*a)

    imc.innerHTML=r.toFixed(2)

    setTimeout(()=>{
    if(r<=18.5){
    condi.innerHTML="PESO INFERIOR AL NORMAL"
    }
    else if(r>=18.5 &&r<=24.9){
        condi.innerHTML="PESO NORMAL"
   }
   else if(r>=25.0 &&r<=29.9){
    condi.innerHTML="PESO SUPERIOR AL NORMAL"
   }
   else if(r>=30.0 &&r<=34.9){
    condi.innerHTML="OBESIDAD"
   }
   else if(r>=35.0 &&r<=39.9){
    condi.innerHTML="OBESIDAD TIPO 2"
   }
   else if(r>=40){
    condi.innerHTML="OBESIDAD"
   }
},2000)
  }