
const arrayCertificado=[];

//formulario
let fondoCertificado= document.getElementById('fondoCertificado'); 
let formCertificado=document.getElementById('formCertificado');
let tipo = document.getElementById('tipo');
let tipoValidacion=document.getElementById('tipoValidacion');
let institucion = document.getElementById('institucion');
let institucionValidacion=document.getElementById('institucionValidacion');
let motivo = document.getElementById('motivo');
let motivovalidacion=document.getElementById('motivovalidacion');
let firmas= document.getElementById('firmantes');
const formulario= document.getElementById('formCertificado');
let destinatarios = document.getElementById('destinatarios');
let destinatarioValidacion=document.getElementById('destinatarioValidacion');
const btnCrear = document.getElementById('crear');
let faltanCampos=document.getElementById('faltanCampos');
let firma1= document.getElementById('firmante1');
let firma2= document.getElementById('firmante2');
let firma3= document.getElementById('firmante3');

let graduacion= document.getElementById('graduacion');
let reconocimiento= document.getElementById('reconocimiento');
let participacion= document.getElementById('participacion');

const arrayUsuarios=[];
let listaDestinatarios;
let arrayDestinatarios=[];
let arrayFirmas=[];
let validarParaMostrar;
let valido=[];

let arrayTiposDeCertificado;

        


//------CLASE NUEVOCERTIFICADO------------//
class nuevoCertificado{
        
    constructor (fondo, tipo, motivo, destinatario, institucion, firmas){

    this.fondo=fondo;
    this.tipo=tipo;
    this.motivo=motivo;
    this.destinatario=destinatario;
    this.institucion=institucion;
    this.firmas=firmas;
  
    }
}
//MENÚ Crear Certificado
const crearCertificado=document.getElementById('crearCertificado');

crearCertificado.onclick = myFunction;

function myFunction() {
  localStorage.removeItem('certificadoCreado');
}

//BOTON CREAR
btnCrear.addEventListener('click', (e) => {
  e.preventDefault();

  selectFondo = document.getElementById('fondo');  
  tipo = document.getElementById('tipo');
  institucion = document.getElementById('institucion');
  motivo = document.getElementById('motivo');
  firmas= document.getElementById('firmantes');
  destinatarios = document.getElementById('destinatarios');

  valido=[];

  validoTipo();
  validoFondo();
  validandoCampos();
  fondo(selectFondo);

   validarParaMostrar= valido.some(elem => elem === false); 

  if (!validarParaMostrar) {

    mostrarCertificados();
    formCertificado.reset();
    formCertificado.classList.remove('formOn');
    formCertificado.classList.add('formOff');
  } 
  if (validarParaMostrar) {

    Toastify({
      text: "Asegurate de completar los campos",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #f77373, #d52727)",
      },
      gravity: "top",
  position: "left", 
    }).showToast();
  }
});

//VALIDACIONES
function validandoCampos(){

  institucion=validacionVacio(institucion.value);
  institucion(institucionValidacion);
  institucion = document.getElementById('institucion').value;

  motivo=validacionVacio(motivo.value);
  motivo(motivovalidacion);
  motivo = document.getElementById('motivo').value;

  destinatarios=validacionVacio(destinatarios.value);
  destinatarios(destinatarioValidacion);
  destinatarios = document.getElementById('destinatarios');

}

function validacionVacio(valor){

  const vacio= valor != '' && isNaN(valor) != false ;

  return function (texto){

    if (vacio===false) {
   
      texto.classList.remove('bienHecho');
      texto.classList.add('malHecho');
      texto.textContent='No olvides este campo. Ten en cuenta que No puede llevar números';
      valido.push(false);
      
    } 
    else {
      texto.textContent='Bien hecho!';
      texto.classList.remove('malHecho');
      texto.classList.add('bienHecho');
      valido.push(true);
      return valor;
      
    }
  }
}

let fondos;

///////CREANDO ARRAYS

function fondo(valor) {

   fondos=valor.value;
 
}

let arrayDeLista=[];

function crearArray(lista) {
  let i;
  let posicionInicial=0;
  let posicionFinal;
  do {

        for ( i = 0; i < lista.length; i++) {
        
          const element = lista[i];
          
           posicionFinal=i;

          if (element=== ",") {

            arrayDeLista.push(lista.slice(posicionInicial,posicionFinal));
            
            posicionInicial=posicionFinal+1;

          } 
    } 
  }while (i < lista.length);
  arrayDeLista.push(lista.slice(posicionInicial,posicionFinal+1));

};


///////MOSTRAR CERTIFICADOS
const arrayCertificadoFinal=[];

function mostrarCertificados() {

  listaDestinatarios=destinatarios.value;


  crearArray(listaDestinatarios);
  arrayDestinatarios=[...arrayDeLista];
  arrayDeLista=[];


  //GUARDAR firmas
  arrayFirmas.push(firma1.value,firma2.value,firma3.value );


  /// iterar array de DESTINATARIOS y CREO los certificados
  const cardCertificado= document.getElementById('fondoCertificado');
  let i;
    do {
      Swal.fire(
        '¡Felicitaciones!',
        'Terminaste tus certificados, vamos a verlos!',
        'success'
      )

          for ( i = 0; i < arrayDestinatarios.length; i++) {
          
            const item = arrayDestinatarios[i];

            arrayCertificadoFinal.push(new nuevoCertificado(tipo.value,motivo,item,institucion,arrayFirmas));
            localStorage.setItem('certificadoCreado', JSON.stringify(arrayCertificadoFinal));

            const element = arrayDestinatarios[i];

            cardCertificado.innerHTML = cardCertificado.innerHTML + 

            `
            <div id="fondoCertificado" class="" >
                <div  class=" text-center mb-1 certificadoStyle ${fondos}">
                <h2 id="certificadoTipo"  class="h2Tipo">
                ${tipo.value}
                </h2>
                <div class="">
                  <h3 id="certificadoInstitucion" class="card-title h3Institucion ">${institucion.toUpperCase()}</h3> <br>
                  <p class="card-text">le otorga este certificado a</p>
                  <h2 id="certificadoDestinatario" class="h2Destinatario">${element.toUpperCase()}</h2>
                </div>
            
                <h6 class="mb-4" >por <span id="certificadoMotivo">${motivo}</span> </h6> 
             
                <div class="container text-center text-body-secondary">
                <br>
                  <div class="row">
                  <br>
              
                    <div class="col mb-3 firmas">
                    ${arrayFirmas[1].toUpperCase()}
                    </div>
                    <div class="col firmas">
                    ${arrayFirmas[2].toUpperCase()}
                    </div>
                    <div class="col firmas">
                    ${arrayFirmas[0].toUpperCase()}
                    </div>
                  </div>
                </div> 
            </div>
         <br>
            `;
          

          };
      
      const mrSubmitCrearPresentacion=document.getElementById('mrSubmitCrearPresentacion');
      mrSubmitCrearPresentacion.remove();


      } while (i < arrayDestinatarios.length);

  };








