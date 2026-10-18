// PORTADA: videos de fondo que rotan (XV -> boda -> cumpleaños) + palabra animada + menú
(function () {
    const caja = document.querySelector('.hero-video');
    const rota = document.getElementById('rota');
    if (!caja || !rota) return;
    const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const vids = [...caja.querySelectorAll('video')];
    const eventos = vids.map(v => v.dataset.evento);   // ej: ["XV", "boda", "cumpleaños"]
    let i = 0;

    function cambiarPalabra(t) {
        if (rota.dataset.t === t) return;
        rota.classList.add('sale');
        setTimeout(() => { rota.textContent = t; rota.dataset.t = t; rota.classList.remove('sale'); }, 350);
    }
    function paso() {
        const ev = eventos[i % eventos.length];
        cambiarPalabra(ev);
        const v = vids.find(x => x.dataset.evento === ev && x.networkState !== 3 && !x.error);
        vids.forEach(x => { if (x !== v) x.classList.remove('activo'); });
        if (v && !reducido) { v.currentTime = 0; v.play().catch(() => {}); v.classList.add('activo'); }
        setTimeout(() => vids.forEach(x => { if (!x.classList.contains('activo')) x.pause(); }), 1400);
        i++;
    }
    setTimeout(() => { paso(); setInterval(paso, 6500); }, 900);   // si falta un video, la portada sigue con el degradado
})();

// MENÚ: resalta la sección donde estás
(function () {
    const links = [...document.querySelectorAll('nav .links a[href^="#"]')];
    const mapa = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const obs = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { links.forEach(a => a.classList.remove('activo')); const a = mapa.get(e.target.id); if (a) a.classList.add('activo'); }
    }), { rootMargin: '-45% 0px -50% 0px' });
    mapa.forEach((a, id) => { const s = document.getElementById(id); if (s) obs.observe(s); });
})();
