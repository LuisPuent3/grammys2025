document.addEventListener('DOMContentLoaded', function () {
  // Inicializar carrusel de Materialize
  var elems = document.querySelectorAll('.carousel');
  M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
  });

  // Cambio automático del carrusel cada 5 segundos
  setInterval(() => {
      var instance = M.Carousel.getInstance(document.querySelector('.carousel'));
      if (instance) {
          instance.next();
      }
  }, 5000);

  // Función para manejar cambio de secciones
  const menuItems = document.querySelectorAll(".menu li");
  const sections = document.querySelectorAll(".section");

  menuItems.forEach(item => {
      item.addEventListener("click", function () {
          // Remover la clase 'active' de todos los elementos del menú
          menuItems.forEach(i => i.classList.remove("active"));
          this.classList.add("active");

          // Obtener la sección a mostrar
          const sectionId = this.getAttribute("data-section");
          sections.forEach(sec => {
              sec.classList.remove("active");
              if (sec.id === sectionId) {
                  sec.classList.add("active");
              }
          });
      });
  });

  // Mostrar por defecto la primera sección
  document.querySelector(".section.active").classList.add("active");
});
