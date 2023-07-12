let d=document.querySelector("#dia")
let vdia=document.querySelector("#vdia")
let m=document.querySelector("#mes")
let fecha=document.querySelector("#fecha")
let signo=document.querySelector("#signo")

d.oninput=()=>{
    vdia.innerHTML=d.value
    lafecha() 
}
m.onchange=()=>{
    lafecha()
}
const lafecha=()=>{

    
    dia=parseInt(d.value)
    mes=parseInt(m.value)
    var me=""

if(mes==1){
me="enero"
}
else if(mes==2){
    me="febrero"
}
else if(mes==3){
me="marzo"
}
else if(mes==4){
    me="abril"
}
else if(mes==5){
    me="mayo"
}
else if(mes==6){
    me="junio"
 }
else if(mes==7){
    me="julio"
}
else if(mes==8){
me="agosto"
}
else if(mes==9){
 me="septiembre"
}
else if(mes==10){
    me="octubre"
}
else if(mes==11){
    me="noviembre"
}
else if(mes==12){
    me="diciembre"
    }
    fecha.innerHTML="fecha "+d.value+" de "+me

    
if((dia>=20 && mes==1)||(dia<=18 && mes==2)){
    signo.innerHTML="ACUARIO"
}
else if((dia>=19 && mes==2)||(dia<=20 && mes==3)){
    signo.innerHTML="PISCIS"
}
else if((dia>=21 && mes==3)||(dia<=19 && mes==4)){
    signo.innerHTML="ARIES"
}
else if((dia>=20 && mes==4)||(dia<=20 && mes==5)){
    signo.innerHTML="TAURO"
}
else if((dia>=21 && mes==5)||(dia<=20 && mes==6)){
    signo.innerHTML="GEMINIS"
}
else if((dia>=21 && mes==6)||(dia<=22 && mes==7)){
    signo.innerHTML="CANCER"
}
else if((dia>=23 && mes==7)||(dia<=22 && mes==8)){
    signo.innerHTML="LEO"
}
else if((dia>=23 && mes==8)||(dia<=22 && mes==9)){
    signo.innerHTML="VIRGO"
}
else if((dia>=23 && mes==9)||(dia<=22 && mes==10)){
    signo.innerHTML="LIBRA"
}
else if((dia>=23 && mes==10)||(dia<=21 && mes==11)){
    signo.innerHTML="ESCORPIO"
}
else if((dia>=22 && mes==11)||(dia<=21 && mes==12)){
    signo.innerHTML="SAGITARIO"
}
else if((dia>=22 && mes==12)||(dia<=19 && mes==1)){
    signo.innerHTML="CAPRICORNIO"



}


}