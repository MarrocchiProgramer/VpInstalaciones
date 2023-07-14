
function redirigirWhatsApp() {
  var numero = "+5491166143033"; // Reemplaza con el número de teléfono de destino
  
  var enlaceWhatsApp = "https://wa.me/" + numero;
  window.open(enlaceWhatsApp, "_blank");
}

if (window.innerWidth <= 767) {
    var elemento = document.querySelector('.elemento');
    elemento.setAttribute('data-aos-delay', '0');
    elemento.setAttribute('data-aos', '0');
  }