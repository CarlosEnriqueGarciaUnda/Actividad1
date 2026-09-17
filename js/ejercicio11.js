document.getElementById('btndeconvertir').addEventListener('click', function(){
    let inputKm= document.getElementById('kilometros').value;
    if(inputKm.trim()=== '' || isNaN(inputKm)){
        alert('Por favor, ingresar un valor valido.')
        return;
    }

    let km= parseFloat(inputKm)
    let millas= km * 0.621371;

    document.getElementById('millas').value = millas.toFixed(5) + " millas";
});