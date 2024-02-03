window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const nombreCompleto = urlParams.get('nombreCompleto');
    const imagenURL = urlParams.get('imagenURL');
    const numeroTelefono = urlParams.get('numeroTelefono');
    const direccion = urlParams.get('direccion');
    const correo = urlParams.get('correo');
    const edad = urlParams.get('edad');

    if (nombre === 'shakira') {
        shakira();
    } else if (nombre === 'bernardo') {
        bernardo();
    } else if (nombre === 'adolfo') {
        adolfo();
    } else if (nombre === 'donald') {
        donald();
    } else if (nombre === 'arjona') {
        arjona();
    }
};
function shakira(){
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const nombreCompleto = urlParams.get('nombreCompleto');
    const imagenURL = urlParams.get('imagenURL');
    const numeroTelefono = urlParams.get('numeroTelefono');
    const direccion = urlParams.get('direccion');
    const correo = urlParams.get('correo');
    const edad = urlParams.get('edad');
    document.getElementById('nombreCon').innerText = 'Shakira';
    document.getElementById('nombreC').innerHTML = 'Shakira Isabel Ripoll';
    document.getElementById('telefono').innerHTML = '2459 8695';
    document.getElementById('direccion').innerHTML = 'Estados Unidos, Los Ángeles';
    document.getElementById('correo').innerHTML = 'realshakira@hotmail.com';
    document.getElementById('edad').innerHTML = '47 años';
    document.getElementById('fotoS').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg/240px-2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg';
}
function bernardo(){
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const nombreCompleto = urlParams.get('nombreCompleto');
    const imagenURL = urlParams.get('imagenURL');
    const numeroTelefono = urlParams.get('numeroTelefono');
    const direccion = urlParams.get('direccion');
    const correo = urlParams.get('correo');
    const edad = urlParams.get('edad');
    document.getElementById('nombreCon').innerText = 'Bernardo Arévalo';
    document.getElementById('nombreC').innerHTML = 'César Bernardo Arévalo';
    document.getElementById('telefono').innerHTML = '7851 2458';
    document.getElementById('direccion').innerHTML = 'Guatemala, Ciudad de Guatemala';
    document.getElementById('correo').innerHTML = 'eltiobenny@hotmail.com';
    document.getElementById('edad').innerHTML = '65 años';
    document.getElementById('fotoS').src = 'https://guatemalavisible.net/wp-content/uploads/2023/06/Bernardo_Arevalo_SEMILLA.jpg';
}
function adolfo(){
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const nombreCompleto = urlParams.get('nombreCompleto');
    const imagenURL = urlParams.get('imagenURL');
    const numeroTelefono = urlParams.get('numeroTelefono');
    const direccion = urlParams.get('direccion');
    const correo = urlParams.get('correo');
    const edad = urlParams.get('edad');
    document.getElementById('nombreCon').innerText = 'Adolfo Gonzáles';
    document.getElementById('nombreC').innerHTML = 'Adolfo Gonzáles Juárez';
    document.getElementById('telefono').innerHTML = '6832 5798';
    document.getElementById('direccion').innerHTML = 'Guatemala, Ciudad de Guatemala';
    document.getElementById('correo').innerHTML = 'agonzalez-2022256@kinal.edu.gt';
    document.getElementById('edad').innerHTML = '18 años';
    document.getElementById('fotoS').src = './adolfo.jpg';
}
function donald(){
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const nombreCompleto = urlParams.get('nombreCompleto');
    const imagenURL = urlParams.get('imagenURL');
    const numeroTelefono = urlParams.get('numeroTelefono');
    const direccion = urlParams.get('direccion');
    const correo = urlParams.get('correo');
    const edad = urlParams.get('edad');
    document.getElementById('nombreCon').innerText = 'Donald Trump';
    document.getElementById('nombreC').innerHTML = 'Donal John Trump';
    document.getElementById('telefono').innerHTML = '5912 6753';
    document.getElementById('direccion').innerHTML = 'Estados Unidos, Washinton D.C';
    document.getElementById('correo').innerHTML = 'donaldtrump@hotmail.com';
    document.getElementById('edad').innerHTML = '77 años';
    document.getElementById('fotoS').src = 'https://i.natgeofe.com/k/5e4ea67e-2219-4de4-9240-2992faef0cb6/trump-portrait_2x3.jpg';
}
function arjona(){
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const nombreCompleto = urlParams.get('nombreCompleto');
    const imagenURL = urlParams.get('imagenURL');
    const numeroTelefono = urlParams.get('numeroTelefono');
    const direccion = urlParams.get('direccion');
    const correo = urlParams.get('correo');
    const edad = urlParams.get('edad');
    document.getElementById('nombreCon').innerText = 'Ricardo Arjona';
    document.getElementById('nombreC').innerHTML = 'Édgar Ricardo Arjona Morales';
    document.getElementById('telefono').innerHTML = '8421 1338';
    document.getElementById('direccion').innerHTML = 'Guatemala, Jocotenango';
    document.getElementById('correo').innerHTML = 'theonlyarjona@hotmail.com';
    document.getElementById('edad').innerHTML = '60 años';
    document.getElementById('fotoS').src = 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Concierto_Ricardo_Arjona_Miami_2009_crop.jpg';
}
