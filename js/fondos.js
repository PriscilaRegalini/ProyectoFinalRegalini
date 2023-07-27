let selectFondo = document.getElementById('fondo');
const fondoValidacion = document.getElementById('fondoValidacion');
let fondo1 = document.getElementById('fondo1');
let fondo2 = document.getElementById('fondo2');
let fondo3 = document.getElementById('fondo3');
let fondo4 = document.getElementById('fondo4');
let fondo5 = document.getElementById('fondo5');

let arrayDeFondos;

let opcion;
////PETICION PARA CARGAR FONDOS AL FORMULARIO Y EVENTOS
fetch('../json/fondos.json')
        .then((response) => {
            if (response.ok) {
                return response.json(); 
            } else {
              Toastify({
                text: 'Error al cargar "Fondos". Vuelve a intentarlo más tarde',
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
       
        .then((fondos) => {
            arrayDeFondos=fondos;
            fondos.forEach(({nombre,id, valor}) => {
              let option = document.createElement('option');
              option.textContent = `${nombre}`;
              option.value = `${valor}`; 
              option.id= `${id}`; 
              selectFondo.appendChild(option);
              option.addEventListener('click', (e) => {e.preventDefault()

                switch (id) {

                  case "fondo1":
                      Swal.fire({
                        title: 'Fondo con marco',
                        text: 'Nada mejor que un clásico',
                        imageUrl: '../img/fondo1.webp',
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                      })
                  
                    break;
                    case "fondo2":
                    
                    Swal.fire({
                      title: 'Fondo en rojo y azul',
                      text: 'Discreto esta bueno',
                      imageUrl: '../img/fondo2.webp',
                      imageWidth: 300,
                      imageHeight: 200,
                      imageAlt: 'Custom image',
                    });
                  
                    break;
                    case "fondo3":
                    
                    Swal.fire({
                      title: 'Fondo en Colores',
                      text: 'Alégre!',
                      imageUrl: '../img/fondo3.webp',
                      imageWidth: 300,
                      imageHeight: 200,
                      imageAlt: 'Custom image',
                    });
                  
                    break;
                    case "fondo4":
                    
                    Swal.fire({
                      title: 'Fondo en azul',
                      text: 'Muy bueno!',
                      imageUrl: '../img/fondo4.webp',
                      imageWidth: 300,
                      imageHeight: 200,
                      imageAlt: 'Custom image',
                    });
                  
                    break;
                    case "fondo5":
                    
                    Swal.fire({
                      title: 'Fondo sweet',
                      text: 'Lindos colores pastel',
                      imageUrl: '../img/fondo5.webp',
                      imageWidth: 300,
                      imageHeight: 200,
                      imageAlt: 'Custom image',
                    });
                  
                    break;
                
                  default:
                    console.log('no entró en ningun caso');
                    break;
                }
             
              });
              
            });
            
        });
        

  //VALIDACIÓN

function validoFondo() {
  const ValidandoFondo= selectFondo.value != 'sinFondo';
  let fondoValidacion= document.getElementById('fondoValidacion');  
    if(!ValidandoFondo){
      fondoValidacion.classList.remove('bienHecho');
      fondoValidacion.classList.add('malHecho');
      fondoValidacion.textContent='Selecciona un Fondo';
      valido.push(false);   
    }else {
      fondoValidacion.textContent='Bien hecho!';
      fondoValidacion.classList.remove('malHecho');
      fondoValidacion.classList.add('bienHecho');
      valido.push(true);
      
    }
}
