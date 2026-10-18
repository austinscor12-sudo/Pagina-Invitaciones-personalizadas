// ============ TODO LO QUE TENÉS QUE EDITAR ESTÁ ACÁ ARRIBA ============
const CONFIG = {
    marca: "Umbral Invitaciones",         // nombre de tu marca
    whatsapp: "5493794860604",            // 549 + código de área + número, sin + ni espacios
    instagram: "eqmedina04",                // tu usuario de Instagram, sin @
    demoUrl: "https://demo.umbralinvitaciones.workers.dev/",                         // link de una invitación DE MUESTRA (con datos falsos). Dejalo en "#" y la sección se oculta
    demoNombre: "SOFÍA",
    demoFecha: "2027-03-20T21:00:00"
};

const EVENTOS = [['xv', 'XV años'], ['boda', 'Bodas'], ['cumple', 'Cumpleaños']];
const NOMBRE_EVENTO = { xv: 'XV años', boda: 'boda', cumple: 'cumpleaños' };

// Precios y planes por tipo de evento (editá los valores a gusto)
const PLANES_POR_EVENTO = {
    xv: [
        { nombre: "Esencial", precio: "$25.000", destacado: false,
          items: ["Diseño personalizado con tus fotos", "Música, cuenta regresiva y mapa", "Dress code y sección de regalos", "Trivia interactiva", "Álbum de fotos con link", "Confirmación por WhatsApp", "Envíos ilimitados"] },
        { nombre: "Con panel", precio: "$35.000", destacado: true,
          items: ["Todo lo del plan Esencial", "Confirmación dentro de la invitación", "Panel privado en tiempo real", "Menús especiales y canciones sugeridas", "Descarga de la lista en Excel", "Ajustes ilimitados hasta el evento"] }
    ],
    boda: [
        { nombre: "Esencial", precio: "$30.000", destacado: false,
          items: ["Diseño personalizado con la historia de la pareja", "Música, cuenta regresiva y mapa", "Dress code y sección de regalos", "Trivia interactiva sobre los novios", "Álbum de fotos con link", "Confirmación por WhatsApp", "Envíos ilimitados"] },
        { nombre: "Con panel", precio: "$42.000", destacado: true,
          items: ["Todo lo del plan Esencial", "Confirmación dentro de la invitación", "Panel privado en tiempo real", "Menús especiales y canciones sugeridas", "Descarga de la lista en Excel", "Ajustes ilimitados hasta el evento"] }
    ],
    cumple: [
        { nombre: "Esencial", precio: "$20.000", destacado: false,
          items: ["Diseño personalizado con tus fotos", "Música, cuenta regresiva y mapa", "Dress code y sección de regalos", "Trivia interactiva", "Álbum de fotos con link", "Confirmación por WhatsApp", "Envíos ilimitados"] },
        { nombre: "Con panel", precio: "$28.000", destacado: true,
          items: ["Todo lo del plan Esencial", "Confirmación dentro de la invitación", "Panel privado en tiempo real", "Menús especiales y canciones sugeridas", "Descarga de la lista en Excel", "Ajustes ilimitados hasta el evento"] }
    ]
};

// Imágenes y video de la galería por evento (si un archivo no existe, se ve un cartel "muy pronto")
const GALERIA = {
    xv:     { video: './video/demo.mp4',        imgs: [['./img/captura1.png', 'Portada'], ['./img/captura2.png', 'Cuenta regresiva'], ['./img/captura3.png', 'Regalos'], ['./img/captura4.png', 'Trivia']] },
    boda:   { video: './video/demo-boda.mp4',   imgs: [['./img/boda1.png', 'Portada'], ['./img/boda2.png', 'Cuenta regresiva'], ['./img/boda3.png', 'Regalos'], ['./img/boda4.png', 'Trivia']] },
    cumple: { video: './video/demo-cumple.mp4', imgs: [['./img/cumple1.png', 'Portada'], ['./img/cumple2.png', 'Cuenta regresiva'], ['./img/cumple3.png', 'Regalos'], ['./img/cumple4.png', 'Trivia']] }
};

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
    ["¿Cuánto tarda en estar lista?", "Hasta 5 días hábiles desde que recibimos todo el material. Si la necesitás antes, consultanos."],
    ["¿Tengo que pagar por cada invitado?", "No. Pagás un único valor según el plan y la mandás a todas las personas que quieras."],
    ["¿Cómo la comparto?", "Te damos un link. Lo mandás por WhatsApp, Instagram o donde prefieras."],
    ["¿Cómo veo quién confirmó?", "Con el plan Con panel o superior, tenés una página privada con usuario y contraseña donde ves las confirmaciones al instante."],
    ["¿Puedo pedir cambios después?", "Sí. Al ser una página web, podemos actualizar horarios, ubicación o cualquier dato y se ve al momento."],
    ["¿Cómo se paga?", "Con una seña del 50% para reservar y empezar, y el 50% restante al entregar. Coordinamos el medio de pago por WhatsApp."]
];

// ============ LÓGICA (no hace falta tocar) ============
const wa = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

document.querySelectorAll('[data-marca]').forEach(e => e.textContent = CONFIG.marca);
// logo: primera palabra grande, el resto chico debajo
const lg = document.querySelector('.logo');
if (lg) { const p = CONFIG.marca.split(' '); lg.innerHTML = `<span>${p[0]}</span>` + (p.length > 1 ? `<small>${p.slice(1).join(' ')}</small>` : ''); }
document.querySelectorAll('[data-wa]').forEach(e => { e.href = wa(e.dataset.wa); e.target = '_blank'; e.rel = 'noopener'; });
document.title = CONFIG.marca + ' · Invitaciones digitales para eventos';
document.getElementById('anio').textContent = new Date().getFullYear();
document.getElementById('link-ig').href = 'https://instagram.com/' + CONFIG.instagram;
document.getElementById('demo-nombre').textContent = CONFIG.demoNombre;
const hayDemo = CONFIG.demoUrl && CONFIG.demoUrl !== '#';
['btn-demo', 'btn-demo2'].forEach(id => { const b = document.getElementById(id); b.href = CONFIG.demoUrl; b.target = '_blank'; b.rel = 'noopener'; if (!hayDemo) b.style.display = 'none'; });
if (!hayDemo) document.getElementById('seccion-demo').style.display = 'none';

document.getElementById('grid-features').innerHTML = FEATURES.map(([i, t, d]) =>
    `<div class="feat rev"><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join('');

function crearTabs(contenedor, alElegir) {
    contenedor.innerHTML = EVENTOS.map(([k, t], i) => `<button class="tab ${i === 0 ? 'activo' : ''}" data-k="${k}">${t}</button>`).join('');
    contenedor.addEventListener('click', (e) => {
        const b = e.target.closest('.tab'); if (!b) return;
        contenedor.querySelectorAll('.tab').forEach(x => x.classList.toggle('activo', x === b));
        alElegir(b.dataset.k);
    });
}

// PLANES: una grilla por tipo de evento, se muestra la que elegís en las pestañas
const gridPlanes = document.getElementById('grid-planes');
gridPlanes.innerHTML = EVENTOS.map(([k], i) =>
    `<div class="planes" data-ev="${k}" ${i ? 'hidden' : ''}>` + PLANES_POR_EVENTO[k].map(p =>
    `<div class="plan rev ${p.destacado ? 'top' : ''}">
        <h3>${p.nombre}</h3>
        <div class="desde">Pago único</div>
        <div class="precio">${p.precio}</div>
        <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        <a class="btn ${p.destacado ? '' : 'sec'}" href="${wa('Hola! Me interesa el plan ' + p.nombre + ' para ' + NOMBRE_EVENTO[k])}" target="_blank" rel="noopener">Quiero este plan</a>
    </div>`).join('') + '</div>').join('');
crearTabs(document.getElementById('tabs-planes'), (k) => gridPlanes.querySelectorAll('.planes').forEach(g => { g.hidden = g.dataset.ev !== k; }));

// GALERÍA: un carrusel por evento
const carruseles = document.getElementById('carruseles');
const cartel = (k) => { const d = document.createElement('div'); d.className = 'ph'; d.textContent = 'Ejemplo de ' + NOMBRE_EVENTO[k] + ' · muy pronto'; return d; };
EVENTOS.forEach(([k], i) => {
    const g = GALERIA[k], c = document.createElement('div');
    c.className = 'carrusel rev'; c.dataset.ev = k; if (i) c.hidden = true;
    [['video', g.video, 'En movimiento'], ...g.imgs.map(([s, t]) => ['img', s, t])].forEach(([tipo, src, texto]) => {
        const fig = document.createElement('figure'); fig.className = 'cel';
        const marco = document.createElement('div'); marco.className = 'marco';
        let el;
        if (tipo === 'video') { el = document.createElement('video'); el.muted = true; el.loop = true; el.playsInline = true; el.preload = 'metadata'; el.setAttribute('muted', ''); el.setAttribute('playsinline', ''); }
        else { el = document.createElement('img'); el.alt = texto; el.loading = 'lazy'; }
        el.addEventListener('error', () => el.replaceWith(cartel(k)));
        el.src = src;
        const pie = document.createElement('figcaption'); pie.textContent = texto;
        marco.appendChild(el); fig.append(marco, pie); c.appendChild(fig);
    });
    carruseles.appendChild(c);
});
function reproducirVisibles(k) {
    carruseles.querySelectorAll('video').forEach(v => { if (v.closest('.carrusel').dataset.ev === k) v.play().catch(() => {}); else v.pause(); });
}
crearTabs(document.getElementById('tabs-galeria'), (k) => {
    carruseles.querySelectorAll('.carrusel').forEach(c => { c.hidden = c.dataset.ev !== k; });
    reproducirVisibles(k);
});
reproducirVisibles('xv');

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