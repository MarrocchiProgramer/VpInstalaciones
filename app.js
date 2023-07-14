
function redirigirWhatsApp() {
    var numero = "+5491166143033"; // Reemplaza con el número de teléfono de destino

    var enlaceWhatsApp = "https://wa.me/" + numero;
    window.open(enlaceWhatsApp, "_blank");
}

var contactoCelular = document.querySelector('.contacto-celular');
var lastScrollTop = 0;

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        contactoCelular.classList.remove('fixed');
    } else {
        contactoCelular.classList.add('fixed');
    }

    lastScrollTop = scrollTop;
});
