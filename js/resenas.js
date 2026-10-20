// RESEÑAS REALES (Firestore, proyecto web-invitaciones-pers).
// Solo se muestran las reseñas que vos aprobás (aprobada = true) desde la consola de Firebase.
(function () {
    if (typeof firebase === 'undefined' || !document.getElementById('resenas')) return;
    const db = firebase.firestore();
    const $ = (id) => document.getElementById(id);
    const esc = (t) => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const colores = ['#7b94a8', '#ff7a59', '#8a9a7b', '#8e6bbf', '#c08552', '#4f9a9a'];
    let lista = [], idx = 0, timer;

    const estrellas = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);
    function hace(d) {
        if (!d) return '';
        const dias = Math.floor((Date.now() - d.getTime()) / 864e5);
        if (dias < 1) return 'hoy';
        if (dias === 1) return 'hace 1 día';
        if (dias < 30) return 'hace ' + dias + ' días';
        const m = Math.floor(dias / 30);
        return m === 1 ? 'hace 1 mes' : 'hace ' + m + ' meses';
    }

    function mostrar(i, dir) {
        idx = (i + lista.length) % lista.length;
        const r = lista[idx], sl = $('res-slide');
        sl.classList.remove('entra-der', 'entra-izq'); void sl.offsetWidth;
        sl.classList.add(dir < 0 ? 'entra-izq' : 'entra-der');
        sl.innerHTML = '<div class="res-av" style="background:' + colores[(r.nombre.charCodeAt(0) || 0) % colores.length] + '">' + esc(r.nombre.trim()[0].toUpperCase()) + '</div>' +
            '<div class="res-nombre">' + esc(r.nombre) + '</div><div class="res-fecha">' + esc(hace(r.fecha)) + '</div>' +
            '<div class="res-estrellas" aria-label="' + r.estrellas + ' de 5 estrellas">' + estrellas(r.estrellas) + '</div><p>' + esc(r.texto) + '</p>';
        $('res-puntos').innerHTML = lista.map((_, k) => '<i class="' + (k === idx ? 'on' : '') + '" data-k="' + k + '"></i>').join('');
    }
    function auto() { clearInterval(timer); if (lista.length > 1) timer = setInterval(() => mostrar(idx + 1, 1), 6500); }

    function dibujar() {
        if (!lista.length) { $('res-vacio').hidden = false; $('res-carrusel').hidden = true; $('res-resumen').textContent = ''; return; }
        $('res-vacio').hidden = true; $('res-carrusel').hidden = false;
        const prom = lista.reduce((t, r) => t + r.estrellas, 0) / lista.length;
        $('res-resumen').innerHTML = '<b>' + prom.toFixed(1).replace('.', ',') + '</b> de 5 · ' + lista.length + (lista.length === 1 ? ' reseña' : ' reseñas');
        mostrar(0, 1); auto();
    }

    db.collection('resenas').where('aprobada', '==', true).get().then(s => {
        lista = s.docs.map(d => {
            const x = d.data();
            return { nombre: String(x.nombre || 'Cliente'), estrellas: Math.min(5, Math.max(1, parseInt(x.estrellas, 10) || 5)), texto: String(x.texto || ''), fecha: x.creado && x.creado.toDate ? x.creado.toDate() : null };
        }).filter(r => r.texto).sort((a, b) => (b.fecha || 0) - (a.fecha || 0));
        dibujar();
    }).catch(() => { $('res-vacio').hidden = false; });

    $('res-prev').addEventListener('click', () => { mostrar(idx - 1, -1); auto(); });
    $('res-next').addEventListener('click', () => { mostrar(idx + 1, 1); auto(); });
    $('res-puntos').addEventListener('click', (e) => { const k = e.target.dataset.k; if (k !== undefined) { mostrar(+k, +k < idx ? -1 : 1); auto(); } });
    $('res-carrusel').addEventListener('mouseenter', () => clearInterval(timer));
    $('res-carrusel').addEventListener('mouseleave', auto);

    // ----- escribir una reseña -----
    const modal = $('modal-res'); let nota = 0;
    $('btn-escribir-res').addEventListener('click', () => modal.classList.add('activo'));
    $('res-cerrar').addEventListener('click', () => modal.classList.remove('activo'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('activo'); });
    const estr = document.querySelectorAll('#res-estrellas button');
    estr.forEach(b => b.addEventListener('click', () => { nota = +b.dataset.n; estr.forEach(x => x.classList.toggle('on', +x.dataset.n <= nota)); }));

    $('form-res').addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target, msg = $('res-msg');
        const m = (t, ok) => { msg.textContent = t; msg.className = 'estado ' + (ok ? 'ok' : 'mal'); };
        if (f.sitio.value) return m('¡Gracias! Tu reseña se publicará cuando la revisemos.', true);   // trampa para robots
        const nombre = f.nombre.value.trim(), texto = f.texto.value.trim();
        if (nombre.length < 2) return m('Escribí tu nombre.', false);
        if (!nota) return m('Elegí cuántas estrellas le das.', false);
        if (texto.length < 5) return m('Contanos un poco más sobre tu experiencia.', false);
        try { if (Date.now() - (+localStorage.getItem('ultimaResena') || 0) < 60000) return m('Ya enviaste una reseña. Esperá un minuto.', false); } catch (_) {}
        const btn = $('res-enviar'); btn.disabled = true;
        try {
            await db.collection('resenas').add({ nombre, estrellas: nota, texto, aprobada: false, creado: firebase.firestore.FieldValue.serverTimestamp() });
            try { localStorage.setItem('ultimaResena', Date.now()); } catch (_) {}
            f.reset(); nota = 0; estr.forEach(x => x.classList.remove('on'));
            m('¡Gracias! Tu reseña se publicará cuando la revisemos.', true);
        } catch (err) { console.error(err); m('No pudimos enviar tu reseña. Probá de nuevo más tarde.', false); }
        finally { btn.disabled = false; }
    });
})();
