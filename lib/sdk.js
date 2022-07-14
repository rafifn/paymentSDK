const constants = require('./constants')

const { PAYMENT_SERVICE_URL } = constants

function createIFrame (url) {
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.name = 'frame';
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.position = 'absolute';
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.border = 0;
  iframe.style.zIndex = '99999';
  return iframe
}

module.exports = function snap () {
  const popup = createIFrame(PAYMENT_SERVICE_URL);
  document.body.appendChild(popup)
}