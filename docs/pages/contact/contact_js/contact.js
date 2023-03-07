
'use strict'

let apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
   .then(response => response.json())
   .then(data => mostrarData(data))
   .catch(error => console.log(error)
   )

   const mostrarData = (data) => {
      console.log(data)
      let body = ''
      for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].phone}</td></tr>`
      }

      document.getElementById("data").innerHTML = body
   }

   let getName = localStorage.getItem("nombre")
   console.log(getName);

   /*const container = document.getElementsByClassName('container');

   const newh1 = document.createElement('h1')

   const texth1 = `Hola ${getName}`;

   container.innerHTML = texth1;*/

   //segundo intento

   /*const body = document.body;
   const nuevoH1 = document.createElement('h1');
   const textoH1 = document.createTextNode('Este es el nuevo título');
   nuevoH1.appendChild(textoH1);
   body.appendChild(nuevoH1);*/

// Obtener el elemento h1 existente
const miH1 = document.getElementById("miH1");

// Reemplazar su contenido utilizando la propiedad textContent
miH1.textContent = `Hola`;


