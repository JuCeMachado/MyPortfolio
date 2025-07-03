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
    if (navbar.classList.contains('show')) return;

    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }

    lastScrollY = window.scrollY;
  });

  // Enviar formulario a mi correo
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const mailtoLink = `mailto:Ju.Ce.Ma456@gmail.com?subject=Mensaje de ${encodeURIComponent(nombre)}&body=${encodeURIComponent(mensaje + "\n\nEmail: " + email)}`;

    window.location.href = mailtoLink;
  });
});


