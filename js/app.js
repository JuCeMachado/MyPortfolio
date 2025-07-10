document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbar = document.getElementById('mainNav');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.navbar a');
  let lastScrollY = window.scrollY;
  
  // Toggle del menú móvil
  navbarToggle.addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  navbar.classList.toggle('show');
  // Eliminamos la línea que bloqueaba el scroll: document.body.style.overflow = isExpanded ? '' : 'hidden';
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
  // Cerrar menú al hacer clic en un enlace (móvil)
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 767) {
        navbarToggle.setAttribute('aria-expanded', 'false');
        navbar.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Efecto de scroll en el header
  let lastScroll = 0;
  const scrollThreshold = 100;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Header con fondo al hacer scroll
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Ocultar/mostrar header al hacer scroll
    if (currentScroll <= 0) {
      header.classList.remove('hide');
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
      // Scroll hacia abajo
      header.classList.add('hide');
    } else if (currentScroll < lastScroll) {
      // Scroll hacia arriba
      header.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
  });
  
  // Cerrar menú con tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navbar.classList.contains('show')) {
      navbarToggle.setAttribute('aria-expanded', 'false');
      navbar.classList.remove('show');
      document.body.style.overflow = '';
    }
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


