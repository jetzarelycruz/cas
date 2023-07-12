const suma = () => {
    let n1 =document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;
    if(n1==""||n2==""){
      alert("Campo Vacio")
      return
    }
    csuma = (n1 * n2)/2;
    res.innerHTML = ` <h1>Resultados</h1>
      <h2>area: ${csuma}</h2>`
      
      const spinner = document.querySelector("#spinner");
      spinner.innerHTML = `<img src="gif.gif">`;
      
      
      setTimeout(() => {
        document.querySelector("#res").textContent = `El área del triángulo es: ${csuma}`;
        spinner.style.display = "none";
      }, 1000);
      
    }