document.addEventListener('keydown', e =>{
    if(e.key == 'Escape'){

  document.getElementById('n1').value=""
  document.querySelector('.res').innerHTML='Resultado:'

    }
})
document.addEventListener('keydown', e =>{

  if(e.key == 'Enter'){
    
    let num = document.getElementById('n1')
    let res = document.querySelector('.res')
    if(num.value.length==0){
    alert("Erro Digite Um Numero")
    res.innerHTML="Impossivel Calcular"
    }else{  
    res.innerHTML="Calculando.."
    resultado=1
    let n = Number(num.value)
    for(let c = 1;c<=n;c++){
        resultado*=c
    }
res.innerHTML+=`<br> Fatorial de ${n} é  ${resultado}`
}
  }
})



function calcular(){
 let num = document.getElementById('n1')
 let res = document.querySelector('.res')
 if(num.value.length==0){
    alert("Erro Digite Um Numero")
    res.innerHTML="Impossivel Calcular"
 }else{  
    res.innerHTML="Calculando.."
    resultado=1
  let n = Number(num.value)
    for(let c = 1;c<=n;c++){
        resultado*=c
    }
res.innerHTML+=`<br> Fatorial de ${n} é  ${resultado}`
}
}
