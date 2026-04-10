function enviarWhatsApp() {
  const numero = '526561491339';
  const mensaje = encodeURIComponent('Hola, quiero una página premium para mi negocio');
  window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
}