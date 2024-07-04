
const firebaseConfig = {
  
    apiKey: "AIzaSyDr8OFatm_gT0UQxDoZW-3shkXerfpahN8",
  authDomain: "dawinformulario.firebaseapp.com",
  projectId: "dawinformulario",
  storageBucket: "dawinformulario.appspot.com",
  messagingSenderId: "546988408453",
  appId: "1:546988408453:web:f5e50b01384002461033ec",
  measurementId: "G-2R767MYV2K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();




document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()


    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){

    errorNombre.textContent = 'Por favor introduzca un nombre'
    errorNombre.classList.add('error-message');

    }else{
    errorNombre.textContent = '';
    errorNombre.classList.remove('error-message');

    }

    let entradaEmail = document.getElementById('email');
    let errorEmail = document.getElementById('emailError');
    let emailPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!emailPattern.test(entradaEmail.value)){
    errorEmail.textContent = "Por favor digite un email valido";
    errorEmail.classList.add('error-message');

    }else{
    errorEmail.textContent= '';
    errorEmail.classList.remove('error-message');

    }

  
    let entradaConstrasena = document.getElementById('password');
    let errorContrasena = document.getElementById('passwordError');
let contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if(!contrasenaRegex.test(entradaConstrasena.value)){

        errorContrasena.textContent="Por favor digite una contraseña de 8 digitos, una mayúscula,una miniscula,un digito y un caracter especial.";
        errorContrasena.classList.add('error-message');
    }else{
    errorContrasena.textContent='';
    errorContrasena.classList.remove('error-message');

    }

    if(!errorNombre.textContent && !errorEmail.textContent && !errorContrasena.textContent){

        db.collection("users").add({
            name: entradaNombre.value,
            email: entradaEmail.value,
            password: entradaConstrasena.value,
        })
        .then((docRef) => {
            alert('Se ha registrado con exito!!',docRef.id);
        document.getElementById('formulario').reset();
            
        })
        .catch((error) => {
            alert(error);
        });



        
        
    }


});
