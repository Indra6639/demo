document.addEventListener('DOMContentLoaded', () => {
    const localValueElement = document.getElementById('localValue');
    const sessionValueElement = document.getElementById('sessionValue');
    const localButton = document.getElementById('localButton');
    const sessionButton = document.getElementById('sessionButton');

    let localValue = parseInt(localStorage.getItem('localValue')) || 0;
    let sessionValue = parseInt(sessionStorage.getItem('sessionValue')) || 0;

    localValueElement.textContent = localValue;
    sessionValueElement.textContent = sessionValue;

    localButton.addEventListener('click', () => {
        localValue++;
        localStorage.setItem('localValue', localValue);
        localValueElement.textContent = localValue;
    });
    sessionButton.addEventListener('click', () => {
        sessionValue++;
        sessionStorage.setItem('sessionValue', sessionValue);
        sessionValueElement.textContent = sessionValue;
    });
});
