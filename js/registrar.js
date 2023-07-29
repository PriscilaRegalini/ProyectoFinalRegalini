
let nombreUsuario = document.getElementById('nombreUsuario');
let email = document.getElementById('email');
let password = document.getElementById('Password1');
const idRegistroUsuario= document.getElementById('idRegistroUsuario');
const idFormRegistro2=document.getElementById('idFormRegistro2');
const btnRegistrarme = document.getElementById('registrarme');
const formRegistro = document.getElementById('formRegistro');
const NavMenuCerrarSesion= document.getElementById('cerrarSesion');
const NavMenuCrear= document.getElementById('crearCertificado');
const btnCrearCertificado= document.getElementById('btnCrearCertificado');
let h3Index=document.getElementById('h3Index');
let usuarioValidacion = document.getElementById('usuarioValidacion');
let emailValidacion = document.getElementById('emailValidacion');
let passwordValidacion = document.getElementById('passwordValidacion');
localStorage.clear();
let usuario;
let validoRegistro=[];

//------CLASE NUEVO USUARIO------------//
class nuevoUsuario{
        
  constructor (nombreUsuario, email , password){

  this.nombreUsuario=nombreUsuario;
  this.email=email;
  this.password=password;

  }
}

const idMenuMrSubmit=document.getElementById('idMenuMrSubmit');
idMenuMrSubmit.onclick = limpiarRegistro;
function limpiarRegistro() {
  localStorage.removeItem('usuario');
}

///  REGISTROS

//BOTÓN REGISTRARME
let ok=true;
const btnRegistrarUsuario = document.getElementById('btnRegistrarUsuario');
btnRegistrarUsuario.addEventListener('click', (e) => {e.preventDefault();
  registrarUsuario();
  async function registrarUsuario() {
    try {
      const { value: text } = await Swal.fire({
        title: 'Ingresa un nombre de usuario',
        input: 'text',
        inputPlaceholder: 'Tu nombre'
      })
      
      if (text) {
        Swal.fire(`El nombre ingresado es: ${text}`)
        nombreUsuario=text;
      }

      const { value: email } = await Swal.fire({
        title: 'Ingresa tu email',
        input: 'email',
        inputPlaceholder: 'ejemplo@ejemplo.com'
      })   
      if (email) {
        Swal.fire(`El email ingresado es: ${email}`)

      }
      const { value: password } = await Swal.fire({
        title: 'Ingresa una contraseña',
        input: 'password',
        inputPlaceholder: 'Ingresa contraseña',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })  
      usuario=new nuevoUsuario(nombreUsuario, email, password);
      console.log(usuario)
      localStorage.setItem('usuario', JSON.stringify(usuario));
      
      Swal.fire(
                 `Felicitaciones ${text}`,
                 'Te registraste con éxito. Puedes comenzar a crear',
                 'success'
               )   
        idRegistroUsuario.remove();
        h3Index.textContent = 
              ` Te registraste con éxito, ya puedes comenzar a crear!
              `;
        const mrSubmit=document.getElementById('mrSubmit');
        mrSubmit.remove();
        enlaceCrear(); 
        return registrosOk(ok);
      
    } catch (error) {
      return registrosOk(ok===false); 
    }      
   }  
});

function registrosOk(ok){
  if(ok===false){
    idRegistroUsuario.classList.remove('registroUsuarioOn');
    idRegistroUsuario.classList.add('registroUsuarioOff');
    idFormRegistro2.classList.remove('registroUsuarioOff');
    idFormRegistro2.classList.add('registroUsuarioOn');
  }
  if(ok===true){
    idRegistroUsuario.classList.remove('registroUsuarioOn');
    idRegistroUsuario.classList.add('registroUsuarioOff');
    idFormRegistro2.classList.remove('registroUsuarioOn');
    idFormRegistro2.classList.add('registroUsuarioOff');
  }
}
let caracteres=0;
//BOTÓN REGISTRARME2
  btnRegistrarme.addEventListener('click', (e) => {
  e.preventDefault();
  nombreUsuario = document.getElementById('nombreUsuario').value;
  email = document.getElementById('email').value;
  password = document.getElementById('Password1').value;
  validoRegistro=[];
  validandoPassword();
  validandoEmail()
  validandoNombreUsuario()
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
});
  NavMenuCerrarSesion.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
});


//VALIDACIONES
function validandoPassword(){
  password = document.getElementById('Password1').value;
  const vacio= password != '';
   caracteres= password.length < 8;
    if (!vacio) {
          passwordValidacion.classList.remove('bienHecho');
          passwordValidacion.classList.add('malHecho');
          passwordValidacion.textContent='Contraseña inválida. Complete este campo';
          validoRegistro.push(false);     
    } else { 
          if (caracteres) {
            console.log(password.charAt())
            passwordValidacion.classList.remove('bienHecho');
            passwordValidacion.classList.add('malHecho');
            passwordValidacion.textContent='Debe contener 8 caracteres o más';
            validoRegistro.push(false);       
          }
          if (!caracteres) {       
            passwordValidacion.textContent='Bien hecho!';
            passwordValidacion.classList.remove('malHecho');
            passwordValidacion.classList.add('bienHecho');
            validoRegistro.push(true);
            password = document.getElementById('Password1').value;     
          }  
        }
}

function validandoEmail() {
    email = document.getElementById('email');
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validEmail.test(email.value) ){
      emailValidacion.textContent='Bien hecho!';
      emailValidacion.classList.remove('malHecho');
      emailValidacion.classList.add('bienHecho');
      validoRegistro.push(true);
      email = document.getElementById('email').value;    
    }else{
      emailValidacion.classList.remove('bienHecho');
      emailValidacion.classList.add('malHecho');
      emailValidacion.textContent='Email inválido. Asegurate de escribirlo correctamente.';
      validoRegistro.push(false);
      }
    }

    function validandoNombreUsuario() {
      nombreUsuario = document.getElementById('nombreUsuario');
      var validNombreUsuario =/^[a-zA-Z0-9]+$/;
      if( validNombreUsuario.test(nombreUsuario.value) ){
        usuarioValidacion.textContent='Bien hecho!';
        usuarioValidacion.classList.remove('malHecho');
        usuarioValidacion.classList.add('bienHecho');
        validoRegistro.push(true);
        nombreUsuario = document.getElementById('nombreUsuario').value;     
      }else{
        usuarioValidacion.classList.remove('bienHecho');
        usuarioValidacion.classList.add('malHecho');
        usuarioValidacion.textContent='Nombre de Usuario inválido. Asegurate de escribirlo correctamente.';
        validoRegistro.push(false);
        }
      }
//
function registrarUsuario() {
usuario=new nuevoUsuario(nombreUsuario, email, password);
localStorage.setItem('usuario', JSON.stringify(usuario));
}

function verificarLogeo() {
    traigoUsuario= JSON.parse(localStorage.getItem('usuario'));
    console.log(traigoUsuario.email.value)
    emailUsuario=traigoUsuario.email;
    passwordUsuario=traigoUsuario.password;  
const validacion = email=== emailUsuario && password === passwordUsuario;
  if (!validacion) {
    Toastify({
      text: "Uno o más campos incorrectos",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #f77373, #d52727)",
      },
      gravity: "top", 
      position: "left", 
    }).showToast();
  }else {
      formRegistro.remove();
      const h3Index=document.getElementById('h3Index');
      h3Index.textContent = 
            `${nombreUsuario.toUpperCase()}, te registraste con éxito, ya puedes comenzar a crear!
            `;
      const mrSubmit=document.getElementById('mrSubmit');
      mrSubmit.remove();
      enlaceCrear();
  }    
}
//MENÚ
function enlaceCrear() {
NavMenuCrear.classList.remove('noLogeado');
NavMenuCrear.classList.add('logeado');
NavMenuCerrarSesion.classList.remove('noLogeado');
NavMenuCerrarSesion.classList.add('logeado');
btnCrearCertificado.classList.remove('noLogeado');
btnCrearCertificado.classList.add('logeado');
};


