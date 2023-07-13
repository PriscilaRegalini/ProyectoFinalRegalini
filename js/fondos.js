
const fondoValidacion = document.getElementById('fondoValidacion');
const fondo1 = document.getElementById('fondo1');
const fondo2 = document.getElementById('fondo2');
const fondo3 = document.getElementById('fondo3');
const fondo4 = document.getElementById('fondo4');
const fondo5 = document.getElementById('fondo5');

fondo1.addEventListener('click', (e) => {e.preventDefault();
  Swal.fire({
    title: 'Fondo con marco',
    text: 'Nada mejor que un clásico',
    imageUrl: '../img/fondo1.webp',
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
});

fondo2.addEventListener('click', (e) => {e.preventDefault();
  Swal.fire({
    title: 'Fondo en rojo y azul',
    text: 'Discreto esta bueno',
    imageUrl: '../img/fondo2.webp',
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
});

fondo3.addEventListener('click', (e) => {e.preventDefault();
    Swal.fire({
      title: 'Fondo en Colores',
      text: 'Alégre!',
      imageUrl: '../img/fondo3.webp',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  });

  fondo4.addEventListener('click', (e) => {e.preventDefault();
    Swal.fire({
      title: 'Fondo en azul',
      text: 'Muy bueno!',
      imageUrl: '../img/fondo4.webp',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  });

  fondo5.addEventListener('click', (e) => {e.preventDefault();
    Swal.fire({
      title: 'Fondo sweet',
      text: 'Lindos colores pastel',
      imageUrl: '../img/fondo5.webp',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  });