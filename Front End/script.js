const autketgomb= document.getElementById('autketgomb');
autketgomb.addEventListener('click', () => {
    alert("hello")
})
const settingsgomb = document.getElementById('settingsgomb');
settingsgomb.addEventListener('click', () => {
    alert("helllo")
})
const licitgomb = document.getElementById('licitgomb');
licitgomb.addEventListener('click', () => {
    alert("hellllo")
})

window.addEventListener('load', () => {
    console.log('Page loaded');
    const main = document.getElementById('ticket').children[0];
    main.style.display = 'none';
});