
document.querySelector('#listaTD').addEventListener('click', (e) =>{
    target = e.target;
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();

    }
});
function limpiarControles(){
    document.querySelector('#nombreTarea').value = '';
    document.querySelector('#descTarea').value = '';
    document.querySelector('#prioridadTarea').value = '';
}
document.querySelector('formulario').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombreTarea').value;
    const desc = document.querySelector('#descTarea').value;
    const prioridad = document.querySelector('#prioridadTarea').value;

    if(selectedRow == null){
        const list = document.querySelector('#listaTD');
        const row = document.createComment('tr');

        row.innerHTML = 
    }
});