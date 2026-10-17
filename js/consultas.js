// FORMULARIO DE CONSULTAS -> Firestore (proyecto: web-invitaciones-pers)
const firebaseConfigConsultas = {
    apiKey: "AIzaSyDbNoWulr7rYDbxN7RfbHOT5heE8mf_t00",
    authDomain: "web-invitaciones-pers.firebaseapp.com",
    projectId: "web-invitaciones-pers",
    storageBucket: "web-invitaciones-pers.firebasestorage.app",
    messagingSenderId: "476368909231",
    appId: "1:476368909231:web:301ece4da791aad9d5755a"
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfigConsultas);
const dbConsultas = firebase.firestore();

const formC = document.getElementById('form-consulta');
if (formC) {
    const estado = document.getElementById('form-estado');
    const btnC = document.getElementById('form-enviar');
    const msg = (t, ok) => { estado.textContent = t; estado.className = 'estado ' + (ok ? 'ok' : 'mal'); };

    formC.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (formC.sitio.value) { msg('¡Gracias! Te respondemos a la brevedad.', true); return; } // trampa para robots

        const datos = {
            nombre: formC.nombre.value.trim(),
            contacto: formC.contacto.value.trim(),
            evento: formC.evento.value,
            fecha: formC.fecha.value,
            mensaje: formC.mensaje.value.trim()
        };
        if (datos.nombre.length < 2) return msg('Escribí tu nombre.', false);
        if (datos.contacto.length < 6) return msg('Escribí un WhatsApp o email para poder responderte.', false);

        try { const ult = +localStorage.getItem('ultimaConsulta') || 0; if (Date.now() - ult < 60000) return msg('Ya enviaste una consulta. Esperá un minuto para enviar otra.', false); } catch (_) {}

        btnC.disabled = true; btnC.textContent = 'Enviando...'; msg('', true);
        try {
            await dbConsultas.collection('consultas').add({ ...datos, creado: firebase.firestore.FieldValue.serverTimestamp() });
            try { localStorage.setItem('ultimaConsulta', Date.now()); } catch (_) {}
            formC.reset();
            msg('¡Listo! Recibimos tu consulta y te respondemos a la brevedad.', true);
        } catch (err) {
            console.error(err);
            msg('No pudimos enviar el formulario. Escribinos por WhatsApp y te atendemos igual.', false);
        } finally { btnC.disabled = false; btnC.textContent = 'Enviar consulta'; }
    });
}
