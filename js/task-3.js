const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
    nameOutput.textContent = e.target.value.trim() || 'Anonymous';
});