let saludo = "Hola Clientes😊" ;
console.log(saludo) ;


// boton suscripcion(alerta y confirmacion)
function alHcerClick(){
    document.getElementById('suscripcion').style.display = alert("las suscripciones se habilitaran pronto")
    let confirmar = confirm("¿Desea dejar una consulta online?");
    if(confirmar == true) {
        window.location.replace("contacto.html")
    }
}
// boton enviar (alerta)
let nombre = "joaquin"
function alHcerClickEnviar(){
    document.getElementById('enviar').style.display = alert("Estas seguro de querer enviar este mensaje?")
    let confirmar = alert("Gracias por tu mensaje!,  "  +nombre);
    if(confirmar == true) {
        window.location.replace("contacto.html")
    }
}

// boton modo oscuro
const btn = document.querySelector(".btn-toggle");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});














    

 
