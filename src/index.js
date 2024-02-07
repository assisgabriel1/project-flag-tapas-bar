import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
AOS.refresh();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

const image = document.getElementById('#container2 img');
const options = {
	rootMargin: '0px',
	threshold: 0.5 /* Ajustar o valor de threshold conforme necessário */,
};
/*
const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			image.style.transform = 'scale(1.1)'; /*Aumenta o tamanho da imagem*/
/*		} else {
			image.style.transform = 'scale(1)'; /*Retorna ao tamanho original*/
/*	}
	});
}, options);

observer.observe(image);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
