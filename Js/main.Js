// Datos de los proyectos
const proyectos = [
    {
        titulo: "Calculadora Interactiva",
        descripcion: "Una calculadora funcional desarrollada con JavaScript puro y manipulación del DOM. Permite realizar operaciones básicas como suma, resta, multiplicación y división con una interfaz intuitiva y fácil de usar.",
        tecnologias: ["HTML5", "CSS3", "JavaScript", "DOM"],
        icono: "fa-calculator"
    },
    {
        titulo: "Lista de Tareas",
        descripcion: "Aplicación para gestionar tareas con almacenamiento local. Incluye funcionalidades como agregar, marcar como completadas, editar y eliminar tareas. Los datos persisten incluso después de cerrar el navegador.",
        tecnologias: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        icono: "fa-tasks"
    },
    {
        titulo: "Clima App",
        descripcion: "Aplicación del clima que consume una API externa para mostrar el pronóstico del tiempo en tiempo real. Incluye búsqueda por ciudad y muestra detalles como temperatura, humedad y velocidad del viento.",
        tecnologias: ["JavaScript", "API REST", "Bootstrap 5", "Fetch API"],
        icono: "fa-cloud-sun"
    },
    {
        titulo: "E-commerce Básico",
        descripcion: "Tienda en línea desarrollada con Angular y Bootstrap. Incluye catálogo de productos, carrito de compras y un sistema de checkout básico. Diseño completamente responsivo y adaptado a móviles.",
        tecnologias: ["Angular", "TypeScript", "Bootstrap 5", "RxJS"],
        icono: "fa-shopping-cart"
    }
];

// Cargar proyectos dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    const proyectosContainer = document.getElementById('proyectos-container');
    
    // Generar los proyectos
    proyectos.forEach((proyecto, index) => {
        const proyectoHTML = `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card project-card h-100">
                    <div class="card-body d-flex flex-column text-center p-4">
                        <div class="mb-3">
                            <i class="fas ${proyecto.icono} fa-4x mb-3" style="color: var(--primary-color);"></i>
                            <h5 class="card-title fw-bold">${proyecto.titulo}</h5>
                        </div>
                        <p class="card-text flex-grow-1">${proyecto.descripcion}</p>
                        <div class="mb-3">
                            ${proyecto.tecnologias.map(tech => 
                                `<span class="badge bg-light text-dark border me-1 mb-2">${tech}</span>`
                            ).join('')}
                        </div>
                        <button class="btn btn-outline-primary btn-sm ver-mas mt-auto" data-bs-toggle="modal" data-bs-target="#modalProyecto${index}">
                            Ver detalles
                        </button>
                    </div>
                </div>
            </div>
            <!-- Modal para mostrar más detalles -->
            <div class="modal fade" id="modalProyecto${index}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${proyecto.titulo}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-4">
                            <div class="row align-items-center">
                                <div class="col-md-4 text-center mb-3 mb-md-0">
                                    <i class="fas ${proyecto.icono} fa-5x mb-3" style="color: var(--primary-color);"></i>
                                    <div class="d-flex flex-wrap justify-content-center">
                                        ${proyecto.tecnologias.map(tech => 
                                            `<span class="badge bg-primary me-1 mb-2">${tech}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <h5 class="mb-3">Descripción del Proyecto</h5>
                                    <p>${proyecto.descripcion}</p>
                                    <div class="mt-4">
                                        <h6>Características principales:</h6>
                                        <ul class="list-unstyled">
                                            ${proyecto.tecnologias.map(tech => 
                                                `<li class="mb-2">
                                                    <i class="fas fa-check-circle text-success me-2"></i>
                                                    ${tech === 'JavaScript' ? 'Interactividad con JavaScript' : 
                                                      tech === 'Bootstrap 5' ? 'Diseño responsive con Bootstrap 5' : 
                                                      tech === 'Angular' ? 'Desarrollo de SPA con Angular' : 
                                                      tech === 'API REST' ? 'Consumo de API REST' : 
                                                      tech === 'LocalStorage' ? 'Almacenamiento local' : 
                                                      tech === 'TypeScript' ? 'Tipado estático con TypeScript' : 
                                                      tech === 'HTML5' ? 'Estructura semántica HTML5' : 
                                                      tech === 'CSS3' ? 'Estilos avanzados con CSS3' : 
                                                      tech === 'DOM' ? 'Manipulación del DOM' : 
                                                      tech === 'Fetch API' ? 'Peticiones HTTP con Fetch API' : 
                                                      tech === 'RxJS' ? 'Programación reactiva con RxJS' : tech}
                                                </li>`
                                            ).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        proyectosContainer.innerHTML += proyectoHTML;
    });

    // Validación del formulario de contacto
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }

    // Efecto smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Cerrar el menú móvil si está abierto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // Efecto de carga suave para las secciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cada sección
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});