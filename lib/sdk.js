import { PAYMENT_SERVICE_URL } from 'constants'

const createIFrame = (url) => {
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

export const snap = () => {
  const popup = createIFrame(PAYMENT_SERVICE_URL);
  document.body.appendChild(popup)
}