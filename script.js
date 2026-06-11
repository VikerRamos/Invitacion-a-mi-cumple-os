
const FECHA_CUMPLE = new Date('2025-06-28T19:00:00');

function actualizarCuentaRegresiva() {
  const ahora = new Date();
  const diferencia = FECHA_CUMPLE - ahora;

  if (diferencia <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p style="font-size:1.5rem; color: var(--terra)">¡Hoy es el gran día! </p>';
    return;
  }

  const dias    = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas   = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos= Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('days').textContent    = String(dias).padStart(2, '0');
  document.getElementById('hours').textContent   = String(horas).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutos).padStart(2, '0');
  document.getElementById('seconds').textContent = String(segundos).padStart(2, '0');
}


actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);


function confirmar(respuesta) {
  const msg = document.getElementById('rsvpMsg');
  const btnSi = document.querySelector('.btn-yes');
  const btnNo = document.querySelector('.btn-no');

  if (respuesta === 'si') {
    msg.textContent = '¡Genial! Te esperamos.';
    msg.style.color = 'var(--sage-dark)';
    btnSi.style.background = 'var(--sage-dark)';
    btnSi.style.borderColor = 'var(--sage-dark)';
    btnNo.style.opacity = '0.4';
  } else {
    msg.textContent = 'Qué pena, Igual gracias.';
    msg.style.color = 'var(--terra-dark)';
    btnNo.style.background = 'var(--cream-dark)';
    btnSi.style.opacity = '0.4';
  }
}
