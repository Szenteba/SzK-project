const autketgomb= document.getElementById('autketgomb');
autketgomb.addEventListener('click', () => {
    alert("hello")
})
const settingsgomb = document.getElementById('settingsgomb');
const tabla = document.getElementById('ticket');
settingsgomb.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/getTicket', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const ticket = await response.json();
        console.log(ticket);
        console.log(ticket[0].ar);
        tabla.innerHTML += `<ul>
                    <nev>${ticket[0].nev}</nev>
                    <leiras>${ticket[0].leiras}</leiras>
                    
                    <button id="licitgomb">Licit</button>
                    <ar>${ticket[0].ar}</ar>
                    <date>${ticket[0].lejarat}</date>
                    <helyszin>${ticket[0].helyszin}</helyszin>
                </ul>`;
    } catch (error) {
        console.error('Error fetching ticket:', error);
    }
});
const licitgomb = document.getElementById('licitgomb');
licitgomb.addEventListener('click', () => {
    alert("hellllo")
})

/*window.addEventListener('load', () => {
    console.log('Page loaded');
    const main = document.getElementById('ticket').children[0];
    main.style.display = 'none';
});*/