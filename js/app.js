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
          items: ["Todo lo del plan Esencial", "Confirmación dentro de la invitación", "Panel privado en tiempo real", "Menús especiales y canciones sugeridas", "Descarga de la lista en Excel", "Links personalizados por invitado", "Ajustes ilimitados hasta el evento"] }
    ],
    boda: [
        { nombre: "Esencial", precio: "$30.000", destacado: false,
          items: ["Diseño personalizado con la historia de la pareja", "Música, cuenta regresiva y mapa", "Dress code y sección de regalos", "Trivia interactiva sobre los novios", "Álbum de fotos con link", "Confirmación por WhatsApp", "Envíos ilimitados"] },
        { nombre: "Con panel", precio: "$42.000", destacado: true,
          items: ["Todo lo del plan Esencial", "Confirmación dentro de la invitación", "Panel privado en tiempo real", "Menús especiales y canciones sugeridas", "Descarga de la lista en Excel", "Links personalizados por invitado", "Ajustes ilimitados hasta el evento"] }
    ],
    cumple: [
        { nombre: "Esencial", precio: "$20.000", destacado: false,
          items: ["Diseño personalizado con tus fotos", "Música, cuenta regresiva y mapa", "Dress code y sección de regalos", "Trivia interactiva", "Álbum de fotos con link", "Confirmación por WhatsApp", "Envíos ilimitados"] },
        { nombre: "Con panel", precio: "$28.000", destacado: true,
          items: ["Todo lo del plan Esencial", "Confirmación dentro de la invitación", "Panel privado en tiempo real", "Menús especiales y canciones sugeridas", "Descarga de la lista en Excel", "Links personalizados por invitado", "Ajustes ilimitados hasta el evento"] }
    ]
};

// Imágenes y video de la galería por evento (si un archivo no existe, se ve un cartel "muy pronto")
const GALERIA = {
    xv:     { video: './video/demo.mp4',        imgs: [['./img/captura1.png', 'Portada'], ['./img/captura2.png', 'Cuenta regresiva'], ['./img/captura3.png', 'Regalos'], ['./img/captura4.png', 'Trivia']] },
    boda:   { video: './video/demo-boda.mp4',   imgs: [['./img/boda1.png', 'Portada'], ['./img/boda2.png', 'Cuenta regresiva'], ['./img/boda3.png', 'Regalos'], ['./img/boda4.png', 'Trivia']] },
    cumple: { video: './video/demo-cumple.mp4', imgs: [['./img/cumple1.png', 'Portada'], ['./img/cumple2.png', 'Cuenta regresiva'], ['./img/cumple3.png', 'Regalos'], ['./img/cumple4.png', 'Trivia']] }
};

const FEATURES = [
    ["sobre", "Sobre de bienvenida", "Una pantalla que se abre antes de entrar a la invitación."],
    ["music", "Música de fondo", "El tema que elijas suena al abrir la invitación."],
    ["clock", "Cuenta regresiva", "Los días, horas y minutos que faltan, en vivo."],
    ["pin", "Ubicación", "Botón directo a Google Maps para que lleguen sin perderse."],
    ["check", "Confirmación", "Tus invitados confirman sin salir de la invitación."],
    ["persona", "Links por invitado", "Cada familia recibe su link con su nombre y sus lugares."],
    ["help", "Trivia", "Preguntas sobre vos para que jueguen mientras esperan."],
    ["gift", "Regalos", "Alias y CBU en una ventana prolija."],
    ["star", "Dress code", "Contales cómo vestirse para la ocasión."],
    ["camera", "Álbum de fotos", "Un botón al álbum compartido que armes para el evento."],
    ["head", "Canciones sugeridas", "Ellos proponen, vos armás la lista."],
    ["chart", "Panel en vivo", "Mirá quién confirmó, cuántos van y qué menú necesitan."]
];

const BENEFICIOS = [
    ["link", "Un solo link", "Se comparte por WhatsApp, Instagram o donde quieras. Tus invitados no instalan nada."],
    ["users", "Sin límite de invitados", "Pagás una vez y la enviás a todas las personas que quieras, sin costos extra por invitado."],
    ["clock", "Lista en pocos días", "Hasta 5 días hábiles desde que recibimos tu material. Ideal si el evento está cerca."],
    ["layers", "Todo en un mismo lugar", "Confirmación, mapa, música, regalos y trivia viven dentro de la invitación, sin formularios externos."],
    ["heart", "Hecha a tu medida", "Diseñada con tus fotos, tu música y tus colores, según el tipo de evento."],
    ["refresh", "Siempre actualizada", "Si cambia un horario o el lugar, lo actualizamos y todos lo ven al instante."]
];
const ICONOS = {
    link: '<path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>'
};

Object.assign(ICONOS, {
    sobre: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    persona: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    gift: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    head: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'
});

// Preguntas frecuentes por tema. Poné visible: false en un tema para ocultarlo.
const FAQ_CATEGORIAS = [
    { titulo: "Planes", visible: true, preguntas: [
        ["¿Cuál es la diferencia entre los planes?", "El plan Esencial incluye la invitación completa (música, cuenta regresiva, mapa, regalos, trivia y álbum con link) y las confirmaciones te llegan por WhatsApp. El plan Con panel suma la confirmación dentro de la invitación, un panel privado para ver quién confirmó, menús especiales, canciones sugeridas, descarga en Excel, links personalizados por invitado y ajustes ilimitados hasta el evento."],
        ["¿Cuál me conviene?", "Si preferís que tus invitados te escriban por WhatsApp, alcanza con el Esencial. Si querés llevar la lista ordenada y ver todo en un solo lugar, el plan Con panel te ahorra mucho trabajo."],
        ["¿Cuántas fotos puedo incluir?", "Hasta 10 fotos. Si querés incluir más, consultanos y lo vemos."],
        ["¿Puede ser una invitación sin fotos?", "Sí. Podemos armarla con fondos, colores y diseños en lugar de fotos. Consultanos cómo la imaginás."],
        ["¿Cómo funciona el álbum de fotos?", "La invitación tiene un botón que abre el álbum compartido que vos armes, por ejemplo en Google Fotos, para que tus invitados vean y suban fotos de la fiesta."],
        ["¿Puedo elegir los colores y la música?", "Sí. Definimos juntos las fotos, los colores y la canción de fondo antes de empezar."]
    ]},
    { titulo: "Confirmación", visible: true, preguntas: [
        ["¿Cuál es la diferencia entre confirmar por WhatsApp y el sistema de confirmación?", "Con WhatsApp, el invitado te escribe y vos anotás cada respuesta. Con el sistema de confirmación, el invitado completa un formulario dentro de la propia invitación y sus datos quedan guardados en tu panel."],
        ["¿Puedo ver quién confirmó?", "Sí, con el plan Con panel. Entrás con tu usuario y contraseña y ves en tiempo real quién asiste, cuántas personas son, los menús especiales y las canciones sugeridas. También podés descargar la lista en Excel."],
        ["¿Cómo funcionan los links personalizados por invitado?", "Cada invitado o familia recibe su propio link, con su nombre y la cantidad de lugares reservados. Te damos una herramienta para generarlos y mandarlos por WhatsApp de a uno."]
    ]},
    { titulo: "Entrega", visible: true, preguntas: [
        ["¿Cuánto tarda en estar lista?", "Hasta 5 días hábiles desde que recibimos todo el material completo (fotos, datos del evento, canción y demás)."],
        ["¿Pueden entregarla más rápido?", "Si tu fecha está cerca, escribinos y vemos qué disponibilidad tenemos."],
        ["¿Con cuánta anticipación conviene pedirla?", "Cuanto antes mejor: así la mandás con tiempo y tus invitados confirman sin apuros."],
        ["¿Puedo pedir cambios después de recibirla?", "Sí. Los cambios de datos (horario, lugar, alias) se actualizan sin límite hasta el día del evento."]
    ]},
    { titulo: "Pagos", visible: true, preguntas: [
        ["¿Cómo se paga?", "Con una seña del 50% para reservar y empezar, y el 50% restante al entregar."],
        ["¿Qué medios de pago aceptan?", "Los coordinamos por WhatsApp según lo que te resulte más cómodo."],
        ["¿Hay costos extra por invitado?", "No. Pagás un único valor y la enviás a todas las personas que quieras."]
    ]},
    { titulo: "En dúo", visible: true, preguntas: [
        ["¿Qué es una invitación en dúo?", "Una sola invitación con dos festejados: dos quinceañeras, una pareja de novios, hermanos o un cumpleaños compartido. Los nombres aparecen juntos y los invitados confirman una sola vez."],
        ["¿Cambia el precio?", "Consultanos y te pasamos el presupuesto según lo que necesites."]
    ]},
    // Activalo (visible: true) solo cuando ofrezcas este servicio
    { titulo: "Save the date", visible: false, preguntas: [
        ["¿Qué es un save the date?", "Un aviso corto que se envía antes de la invitación completa, con la fecha del evento y una cuenta regresiva, para que tus invitados reserven el día."]
    ]}
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

document.getElementById('grid-features').innerHTML = FEATURES.map(([ic, t, d], i) =>
    `<div class="feat rev" style="transition-delay:${i * 70}ms"><div class="ico"><svg class="ico-draw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="--d:${i}">${ICONOS[ic]}</svg></div><h3>${t}</h3><p>${d}</p></div>`).join('');
document.querySelectorAll('.ico-draw *').forEach(e => e.setAttribute('pathLength', '1'));

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

const faqVisibles = FAQ_CATEGORIAS.filter(c => c.visible);
const tabsFaq = document.getElementById('tabs-faq'), listaFaq = document.getElementById('lista-faq');
tabsFaq.innerHTML = faqVisibles.map((c, i) => `<button class="tab ${i === 0 ? 'activo' : ''}" data-i="${i}">${c.titulo}</button>`).join('');
listaFaq.innerHTML = faqVisibles.map((c, i) => `<div class="faq-grupo" data-i="${i}" ${i ? 'hidden' : ''}>` +
    c.preguntas.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('') + '</div>').join('');
tabsFaq.addEventListener('click', (e) => {
    const b = e.target.closest('.tab'); if (!b) return;
    tabsFaq.querySelectorAll('.tab').forEach(x => x.classList.toggle('activo', x === b));
    listaFaq.querySelectorAll('.faq-grupo').forEach(g => { g.hidden = g.dataset.i !== b.dataset.i; });
});

document.getElementById('grid-beneficios').innerHTML = BENEFICIOS.map(([ic, t, d], i) =>
    `<div class="benef rev" style="transition-delay:${i * 90}ms"><div class="benef-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONOS[ic]}</svg></div><h3>${t}</h3><p>${d}</p></div>`).join('');

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