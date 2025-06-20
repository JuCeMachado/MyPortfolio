//funcion para enviar whatsapp
function enviarWhatsapp(event){
    event.preventDefault();
    //obtener los valores de entrada
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if(name.trim() === "" || mensaje.trim() === ""){
        alert("Por favor, completa todos los campos");
        return;
    }
    // Número de teléfono al que se enviará el mensaje (debe incluir el código de país si es necesario)
    const telefono = "5493751578133"; // Reemplaza con el número de teléfono
    
    // Mensaje predeterminado que se abrirá en WhatsApp
    const mensajeWhatsapp = `Hola ${name}, ${mensaje}`;
    
    // Construir el enlace de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensajeWhatsapp)}`;
    //
    window.open(url, "_blank");
}

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  // Mostrar/ocultar navbar móvil
  navbarToggle.addEventListener('click', function () {
    navbar.classList.toggle('show');
  });

  // Ocultar header al hacer scroll hacia abajo
  window.addEventListener('scroll', function () {
    // Si el navbar está abierto, no ocultar el header
    if (navbar.classList.contains('show')) return;

    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }

    lastScrollY = window.scrollY;
  });

  // Formulario WhatsApp
  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', enviarWhatsapp);
  }
});


