// EFECTOS VISUALES (sin librerías). Se carga después de app.js
const puedeHover = window.matchMedia('(hover: hover)').matches;
const sinMov = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1) Titular que aparece palabra por palabra
(function () {
    const h1 = document.querySelector('.hero h1'); if (!h1) return;
    let i = 0;
    (function rec(n) {
        [...n.childNodes].forEach(c => {
            if (c.nodeType === 3) {
                const f = document.createDocumentFragment();
                c.textContent.split(/(\s+)/).forEach(t => {
                    if (!t) return;
                    if (/^\s+$/.test(t)) f.appendChild(document.createTextNode(' '));
                    else { const s = document.createElement('span'); s.className = 'w'; s.style.setProperty('--i', i++); s.textContent = t; f.appendChild(s); }
                });
                n.replaceChild(f, c);
            } else rec(c);
        });
    })(h1);
})();

// 2) Barra de progreso + menú que se achica al hacer scroll
const barra = document.getElementById('progreso'), nav = document.querySelector('nav');
function alScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    barra.style.transform = 'scaleX(' + (max > 0 ? scrollY / max : 0) + ')';
    nav.classList.toggle('scrolled', scrollY > 30);
}
addEventListener('scroll', alScroll, { passive: true }); alScroll();

// 3) Cinta infinita de textos
const pista = document.querySelector('.marquee-track');
if (pista) pista.innerHTML += pista.innerHTML;

// 4) Aparición escalonada en grillas
['#grid-features', '.pasos', '#grid-planes', '.carrusel'].forEach(sel => document.querySelectorAll(sel).forEach(g =>
    [...g.children].forEach((c, i) => { c.style.transitionDelay = (i * 90) + 'ms'; })));

if (puedeHover && !sinMov) {
    // 5) Celular 3D que sigue al mouse
    const hero = document.querySelector('.hero'), phone = document.querySelector('.phone');
    if (hero && phone) hero.addEventListener('mousemove', e => {
        const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
        phone.style.setProperty('--ry', (-12 + x * 20) + 'deg');
        phone.style.setProperty('--rx', (6 - y * 16) + 'deg');
        phone.style.setProperty('--gx', (x * 140) + '%');
    });

    // 6) Tarjetas con inclinación 3D
    document.querySelectorAll('.paso, .plan, .feat').forEach(c => {
        c.classList.add('tilt');
        c.addEventListener('mousemove', e => {
            const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
            c.style.transform = `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-4px)`;
        });
        c.addEventListener('mouseleave', () => { c.style.transform = ''; });
    });

    // 7) Luz que sigue al mouse dentro de las tarjetas y de la sección oscura
    document.querySelectorAll('.feat, .paso').forEach(c => {
        c.classList.add('spot');
        c.addEventListener('mousemove', e => {
            const r = c.getBoundingClientRect();
            c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
        });
    });
    const osc = document.querySelector('.oscura');
    if (osc) osc.addEventListener('mousemove', e => {
        const r = osc.getBoundingClientRect();
        osc.style.setProperty('--gx', (e.clientX - r.left) + 'px'); osc.style.setProperty('--gy', (e.clientY - r.top) + 'px');
    });
}

// Después de aparecer, las tarjetas dejan de tener retraso (para que el hover responda al instante)
document.querySelectorAll('.rev').forEach(el => el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true }));