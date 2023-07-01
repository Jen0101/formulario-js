export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input)
    }
}
const tipoDeErrores = {
    "valueMising":
    "typeMIsmatch",
    "patternMismatch":
    "customError",
};

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "el correo no es valido"
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres maximo 12 debe contener una letra minuscula, una letra mayuscula, un numero y no debe contener caracteres especiales"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError:  "Debes tener al menos 18 años de edad"
    },
    numero:{
        valueMising: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es xxxxxxxxxx 10 numeros"
    },
    direccion: {
        valueMising: "Este campo no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres",
    },
    ciudad: {
        valueMising: "Este campo no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres",
    },
    estado: {
        valueMising: "Este campo no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres",
    },
};


const validadores = {
    nacimiento: input => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
           console.log(input.validity[error]);
           console.log(mensajesDeError[tipoDeInput][error]);
           mensaje = mensajesDeError[tipoDeInput][error];
        };
    });

    return mensaje
}

function validarNacimiento(input){
    const fecha = new Date(input.value);
    let mensaje = ""
   if(!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
   }

    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date
    (fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(),
     fecha.getUTCDate()
     );
    return diferenciaFechas <= fechaActual;
}