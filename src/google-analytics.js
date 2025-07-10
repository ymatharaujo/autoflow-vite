const measurementId = 'G-SEUCODIGO';

const script = document.createElement('script');
script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
script.async = true;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', measurementId);

console.log(`Google Analytics 4 configurado com o ID: ${measurementId}`);
