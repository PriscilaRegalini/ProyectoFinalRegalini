
//PETICION PARA CARGAR TIPOS DE CERTIFICADO AL FORMULARIO

fetch('../json/tiposDeCertificados.json')
.then((response) => {
    if (response.ok) {
        return response.json(); 
    } else {
        Toastify({
            text: 'Error al cargar "Tipos de Certificados". Vuelve a intentarlo más tarde',
            duration: 5000,
            style: {
              background: "linear-gradient(to right, #f77373, #d52727)",
            },
            offset: {
              x: 0, 
              y: 250 
            },
            position: "left", 
          }).showToast();
    }
})
.then((tipos) => {

  arrayTiposDeCertificado= tipos;

  tipos.forEach(({nombre,id, valor}) => {
    let option = document.createElement('option');
    option.textContent = `${nombre}`;
    option.value = `${valor}`; 
    option.id= `${id}`; 
    tipo.appendChild(option);

  });

});

//VALIDACION
function validoTipo() {
    const validandoTipo= tipo.value === 'Seleccione el tipo de certificado';
      if(validandoTipo){
        tipoValidacion.classList.remove('bienHecho');
        tipoValidacion.classList.add('malHecho');
        tipoValidacion.textContent='Selecciona un Tipo';
        valido.push(false);  
      
      }else {
        tipoValidacion.textContent='Bien hecho!';
        tipoValidacion.classList.remove('malHecho');
        tipoValidacion.classList.add('bienHecho');
        valido.push(true);
        
      }
  }