// ============ TODO LO QUE TENÉS QUE EDITAR ESTÁ ACÁ ARRIBA ============
const CONFIG = {
    marca: "Estampa",                     // nombre de tu marca
    whatsapp: "5493790000000",            // tu número: 549 + código de área + número, sin + ni espacios
    instagram: "estampa.invitaciones",    // tu usuario de Instagram, sin @
    demoUrl: "#",                         // link de tu invitación de ejemplo (la de Lizul en Vercel)
    demoNombre: "LIZUL",
    demoFecha: "2026-11-06T22:30:00"
};

const PLANES = [
    {
        nombre: "Esencial", precio: "$00.000", destacado: false,
        items: ["Diseño personalizado", "Música, cuenta regresiva y mapa", "Dress code y sección de regalos", "Confirmación por WhatsApp", "Envíos ilimitados"]
    },
    {
        nombre: "Con panel", precio: "$00.000", destacado: true,
        items: ["Todo lo del plan Esencial", "Confirmación dentro de la invitación", "Panel privado en tiempo real", "Menús especiales y canciones sugeridas", "Descarga de la lista en Excel"]
    },
    {
        nombre: "Experiencia total", precio: "$00.000", destacado: false,
        items: ["Todo lo del plan Con panel", "Trivia interactiva personalizada", "Álbum de fotos con QR", "Invitación con el nombre de cada invitado", "Ajustes ilimitados antes del evento"]
    }
];

const FEATURES = [
    ["🎵", "Música de fondo", "El tema que elijas suena al abrir la invitación."],
    ["⏳", "Cuenta regresiva", "Los días, horas y minutos que faltan, en vivo."],
    ["📍", "Ubicación", "Botón directo a Google Maps para que lleguen sin perderse."],
    ["✅", "Confirmación", "Tus invitados confirman sin salir de la invitación."],
    ["🎮", "Trivia", "Preguntas sobre vos para que jueguen mientras esperan."],
    ["🎁", "Regalos", "Alias y CBU en una ventana prolija."],
    ["👗", "Dress code", "Contales cómo vestirse para la ocasión."],
    ["📸", "Álbum de fotos", "Tu book o las fotos que elijas, para compartir."],
    ["🎧", "Canciones sugeridas", "Ellos proponen, vos armás la lista."],
    ["📊", "Panel en vivo", "Mirá quién confirmó, cuántos van y qué menú necesitan."]
];

const FAQ = [
    ["¿Cuánto tarda en estar lista?", "Depende de la cantidad de secciones, pero normalmente en pocos días desde que recibimos todo el material. Consultanos por urgencias."],
    ["¿Tengo que pagar por cada invitado?", "No. Pagás un único valor según el plan y la mandás a todas las personas que quieras."],
    ["¿Cómo la comparto?", "Te damos un link. Lo mandás por WhatsApp, Instagram o donde prefieras."],
    ["¿Cómo veo quién confirmó?", "Con el plan Con panel o superior, tenés una página privada con usuario y contraseña donde ves las confirmaciones al instante."],
    ["¿Puedo pedir cambios después?", "Sí. Al ser una página web, podemos actualizar horarios, ubicación o cualquier dato y se ve al momento."],
    ["¿Cómo se paga?", "Con una seña para empezar y el saldo al entregar. Coordinamos los medios de pago por WhatsApp."]
];

// ============ LÓGICA (no hace falta tocar) ============
const wa = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

document.querySelectorAll('[data-marca]').forEach(e => e.textContent = CONFIG.marca);
document.querySelectorAll('[data-wa]').forEach(e => { e.href = wa(e.dataset.wa); e.target = '_blank'; e.rel = 'noopener'; });
document.getElementById('anio').textContent = new Date().getFullYear();
document.getElementById('link-ig').href = 'https://instagram.com/' + CONFIG.instagram;
document.getElementById('demo-nombre').textContent = CONFIG.demoNombre;
['btn-demo', 'btn-demo2'].forEach(id => { const b = document.getElementById(id); b.href = CONFIG.demoUrl; b.target = '_blank'; b.rel = 'noopener'; });

document.getElementById('grid-features').innerHTML = FEATURES.map(([i, t, d]) =>
    `<div class="feat rev"><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join('');

document.getElementById('grid-planes').innerHTML = PLANES.map(p =>
    `<div class="plan rev ${p.destacado ? 'top' : ''}">
        <h3>${p.nombre}</h3>
        <div class="desde">Pago único</div>
        <div class="precio">${p.precio}</div>
        <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        <a class="btn ${p.destacado ? '' : 'sec'}" href="${wa('Hola! Me interesa el plan ' + p.nombre)}" target="_blank" rel="noopener">Quiero este plan</a>
    </div>`).join('');

document.getElementById('lista-faq').innerHTML = FAQ.map(([q, a]) =>
    `<details class="rev"><summary>${q}</summary><p>${a}</p></details>`).join('');

// cuenta regresiva del celular de muestra
const destino = new Date(CONFIG.demoFecha).getTime();
const dos = (n) => String(n).padStart(2, '0');
function tick() {
    const d = Math.max(0, destino - Date.now());
    document.getElementById('d-d').textContent = dos(Math.floor(d / 864e5));
    document.getElementById('d-h').textContent = dos(Math.floor(d % 864e5 / 36e5));
    document.getElementById('d-m').textContent = dos(Math.floor(d % 36e5 / 6e4));
    document.getElementById('d-s').textContent = dos(Math.floor(d % 6e4 / 1e3));
}
tick(); setInterval(tick, 1000);

// aparición al hacer scroll
const obs = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('ok'); obs.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll('.rev').forEach(el => obs.observe(el));