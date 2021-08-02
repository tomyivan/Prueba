document.getElementById('iniciar').style.display = 'none';
document.getElementById('registro').style.display = 'none';

function iniciar() {
    document.getElementById('iniciar').style.display = 'block';
    document.getElementById('registro').style.display = 'none';
    document.getElementById('control').style.display = 'none';

}

function registrate() {
    document.getElementById('registro').style.display = 'block';
    document.getElementById('iniciar').style.display = 'none';
    document.getElementById('control').style.display = 'none';

}

function cancelar() {
    document.getElementById('iniciar').style.display = 'none';
    document.getElementById('registro').style.display = 'none';
    document.getElementById('control').style.display = 'block';


}