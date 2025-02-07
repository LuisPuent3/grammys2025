// Selección de elementos
const menuItems = document.querySelectorAll('.menu li');
const sections = document.querySelectorAll('.section');

// Función para manejar el cambio de sección
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Eliminar la clase activa de todas las secciones y elementos del menú
    menuItems.forEach(menu => menu.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Añadir la clase activa a la sección y al menú seleccionados
    item.classList.add('active');
    const sectionId = item.getAttribute('data-section');
    document.getElementById(sectionId).classList.add('active');
  });
});
