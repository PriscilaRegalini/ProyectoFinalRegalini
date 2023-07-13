
let nombreUsuario = document.getElementById('nombreUsuario');
let email = document.getElementById('email');
let password = document.getElementById('Password1');

const btnRegistrarme = document.getElementById('registrarme');
const formRegistro = document.getElementById('formRegistro');
const NavMenuCerrarSesion= document.getElementById('cerrarSesion');
const NavMenuCrear= document.getElementById('crearCertificado');
const btnCrearCertificado= document.getElementById('btnCrearCertificado');

let usuarioValidacion = document.getElementById('usuarioValidacion');
let emailValidacion = document.getElementById('emailValidacion');
let passwordValidacion = document.getElementById('passwordValidacion');

localStorage.clear();
let usuario;

let validoRegistro=[];


btnRegistrarme.addEventListener('click', (e) => {
  e.preventDefault();
  nombreUsuario = document.getElementById('nombreUsuario');
  email = document.getElementById('email');
  password = document.getElementById('Password1');
  
  validoRegistro=[];

  validandoCamposRegistro();

  validarParaMostrar= validoRegistro.some(elem => elem === false); 


  if (!validarParaMostrar) {

    registrarUsuario();
    verificarLogeo();
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
  function validandoCamposRegistro(){

    nombreUsuario=validacionCampos(nombreUsuario.value);
    nombreUsuario(usuarioValidacion);
    nombreUsuario = document.getElementById('nombreUsuario').value;

    email=validacionCampos(email.value);
    email(emailValidacion);
    email = document.getElementById('email').value;

    password=validacionCampos(password.value);
    password(passwordValidacion);
    password = document.getElementById('Password1').value;

  }
});

NavMenuCerrarSesion.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
 
});


//validaciones
function validacionCampos(valor){

  const vacio= valor != '';

  return function (texto){

    if (!vacio) {
      texto.classList.remove('bienHecho');
      texto.classList.add('malHecho');
      texto.textContent='No olvides este campo. Ten en cuenta que No puede llevar números';
      validoRegistro.push(false);

      
    } else {
      texto.textContent='Bien hecho!';
      texto.classList.remove('malHecho');
      texto.classList.add('bienHecho');
      validoRegistro.push(true);

      return valor;
      
    }
  }
}
//

function registrarUsuario() {

usuario=new nuevoUsuario(nombreUsuario, email, password);

localStorage.setItem('usuario', JSON.stringify(usuario));

}

function verificarLogeo() {

    traigoUsuario= JSON.parse(localStorage.getItem('usuario'));

    emailUsuario=traigoUsuario.email;
    passwordUsuario=traigoUsuario.password;

    
const validacion = email=== emailUsuario && password === passwordUsuario;

  if (!validacion) {
      console.log('campos incorrectos, vuelva a intentarlo');
  }else {
      formRegistro.remove();
      const h3Index=document.getElementById('h3Index');
      h3Index.textContent = 
            ` Te registraste con éxito, ya puedes comenzar a crear!
            `;
      const mrSubmit=document.getElementById('mrSubmit');
      mrSubmit.remove();
      enlaceCrear();
  }
    
}

function enlaceCrear() {

NavMenuCrear.classList.remove('noLogeado');
NavMenuCrear.classList.add('logeado');
NavMenuCerrarSesion.classList.remove('noLogeado');
NavMenuCerrarSesion.classList.add('logeado');
btnCrearCertificado.classList.remove('noLogeado');
btnCrearCertificado.classList.add('logeado');

};

//------CLASE NUEVO USUARIO------------//
class nuevoUsuario{
        
    constructor (nombreUsuario, email , password){

    this.nombreUsuario=nombreUsuario;
    this.email=email;
    this.password=password;
  
  }
}

