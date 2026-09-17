document.getElementById('btnConvertir').addEventListener('click', function(){
    let inputMX = document.getElementById('pesos').value;

    if(inputMX.trim()==='' || isNaN(inputMX) || parseFloat(inputMX)<=0){
        alert('Por favor ingrese una cantidad valida.')
        return;
    }

    let mxn= parseFloat(inputMX);
    const tasaCambio= 0.055;
    let usd = mxn * tasaCambio;
    
    document.getElementById('dolares').value = usd.toFixed(2)+ " USD";
})