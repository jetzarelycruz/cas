let a=document.querySelector("#r1")
let va=document.querySelector("#vr1")
let b=document.querySelector("#r2")
let vb=document.querySelector("#vr2")
let c=document.querySelector("#r3")
let vc=document.querySelector("#vr3")
let res=document.querySelector("#valores")
let resultado=document.querySelector("#resultado")

a.oninput=()=>{
    va.innerHTML=a.value
    calcular();
  }
b.oninput=()=>{
    vb.innerHTML=b.value
    calcular();
  }
c.oninput=()=>{
    vc.innerHTML=c.value
    calcular();
  }

const calcular=()=>{
    let ax= parseInt(a.value)
    let bx= parseInt(b.value)
    let cx= parseInt(c.value)

    let as=(ax>=0)?'+${ax}':'${ax}'
    let bs=(bx>=0)?'+${bx}':'${bx}'
    let cs=(cx>=0)?'+${cx}':'${cx}'

    document.querySelector("#valores").innerHTML="<tr><td>"+a.value+"x<sup>2</sup> + "+b.value+"x + "+c.value+" =0"+"</td></tr>"
    let factor=(bx*bx)-(4*ax*cx)
    let x1=0
    let x2=0
    if (factor==0){
      document.querySelector("#resultado").innerHTML=(-a.value+(Math.sqrt((Math.pow(b.value,2)-(4*a.value*c.value)))))/(2*a.value)
    }else if(factor>0){
      document.querySelector("#resultado").innerHTML=(-b.value+(Math.sqrt((Math.pow(b.value,2)-(4*a.value*c.value)))))/(2*a.value)
      document.querySelector("#resultado2").innerHTML=(-b.value-(Math.sqrt((Math.pow(b.value,2)-(4*a.value*c.value)))))/(2*a.value)
    }else{
        resultado.innerHTML='<h1>NO HAY SOLUCION</h1>'
        document.querySelector("#resultado2").innerHTML=" "
    }
}