const radieInput = document.querySelector('#input-field');

const radie = radieInput.value;

const area = Math.PI * radie * radie;

const out = document.querySelector('#out');
const message = document.createElement('p');
message.textContent = 'Arean är ${area} cm';
out.appendChild(message);