const brushButton = document.getElementById('pinkPaint');
const headerState = document.getElementById('headerColor');
const footerState = document.getElementById('footerColor');
const listenButton = document.getElementById('listen');

function changeColor() {
    headerState.style.backgroundColor = '#8ca4d4';
    footerState.style.backgroundColor = '#8ca4d4';
    document.body.style.backgroundColor = '#d46b6c';
    listenButton.style.backgroundColor = '#8ca4d4';
}

brushButton.addEventListener('click', changeColor); 