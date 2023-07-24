
const muestraIndex=document.getElementById('muestraIndex');
const muestraIndex2=document.getElementById('muestraIndex2');

function certificadoOn1() {

    muestraIndex2.classList.remove('muestraIndexOn2');
    muestraIndex2.classList.add('muestraIndexOff2');
    muestraIndex.classList.remove('muestraIndexOff');
    muestraIndex.classList.add('muestraIndexOn');
  
}

function certificadoOn2() { 
    muestraIndex.classList.remove('muestraIndexOn');
    muestraIndex.classList.add('muestraIndexOff');
    muestraIndex2.classList.remove('muestraIndexOff2');
    muestraIndex2.classList.add('muestraIndexOn2');
}

let certificado2 = setInterval(certificadoOn2,5000);
let certificado = setInterval(certificadoOn1,9000);
