const form = document.getElementById('trainerForm');
const btnActivar = document.getElementById('btnActivar');

const fields = {
    nombre: document.getElementById('nombre'),
    correo: document.getElementById('correo'),
    edad: document.getElementById('edad'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword')
};

const errors = {
    nombre: true,
    correo: true,
    edad: true,
    password: true,
    confirmPassword: true
};

function checkFormValidity() {
    const hasErrors = Object.values(errors).some(error => error === true);
    btnActivar.disabled = hasErrors;
}

function setFieldStatus(field, errorSpan, isValid, errorMsg) {
    if (isValid) {
        field.classList.remove('input-error');
        field.classList.add('input-success');
        errorSpan.textContent = "";
        errors[field.id] = false;
    } else {
        field.classList.remove('input-success');
        field.classList.add('input-error');
        errorSpan.textContent = errorMsg;
        errors[field.id] = true;
    }
    checkFormValidity();
}

fields.nombre.addEventListener('input', () => {
    const span = document.getElementById('errorNombre');
    const value = fields.nombre.value.trim();
    if (value === "") {
        setFieldStatus(fields.nombre, span, false, "El nombre es obligatorio");
    } else if (value.length < 4) {
        setFieldStatus(fields.nombre, span, false, "Debe tener al menos 4 caracteres");
    } else {
        setFieldStatus(fields.nombre, span, true);
    }
});

fields.correo.addEventListener('input', () => {
    const span = document.getElementById('errorCorreo');
    const value = fields.correo.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
        setFieldStatus(fields.correo, span, false, "El correo es obligatorio");
    } else if (!regexEmail.test(value)) {
        setFieldStatus(fields.correo, span, false, "Formato de correo invalido");
    } else {
        setFieldStatus(fields.correo, span, true);
    }
});

fields.edad.addEventListener('input', () => {
    const span = document.getElementById('errorEdad');
    const value = parseInt(fields.edad.value, 10);
    if (isNaN(value)) {
        setFieldStatus(fields.edad, span, false, "La edad es obligatoria");
    } else if (value < 10) {
        setFieldStatus(fields.edad, span, false, "Debes tener al menos 10 años para ser entrenador");
    } else {
        setFieldStatus(fields.edad, span, true);
    }
});

fields.password.addEventListener('input', () => {
    const span = document.getElementById('errorPassword');
    const value = fields.password.value;
    if (value === "") {
        setFieldStatus(fields.password, span, false, "La contraseña es obligatoria");
    } else if (value.length < 6) {
        setFieldStatus(fields.password, span, false, "Mínimo 6 caracteres");
    } else {
        setFieldStatus(fields.password, span, true);
    }
    
    fields.confirmPassword.dispatchEvent(new Event('input'));
});

fields.confirmPassword.addEventListener('input', () => {
    const span = document.getElementById('errorConfirm');
    if (fields.confirmPassword.value === "") {
        setFieldStatus(fields.confirmPassword, span, false, "Debes confirmar la contraseña");
    } else if (fields.confirmPassword.value !== fields.password.value) {
        setFieldStatus(fields.confirmPassword, span, false, "Las contraseñas no coinciden");
    } else {
        setFieldStatus(fields.confirmPassword, span, true);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    document.getElementById('registro-container').classList.add('hidden');
    document.getElementById('pokedex-container').classList.remove('hidden');
    
    console.log("Entrenador registrado");
    
    cargarPokemon();
});


async function cargarPokemon() {
    const listaPokemon = document.getElementById('lista-pokemon');
    listaPokemon.innerHTML = '<p style="text-align:center;">Cargando datos</p>';

    try {
        
        const respuesta = await fetch('pokemon.json');
        const datos = await respuesta.json();
        
        listaPokemon.innerHTML = ''; 

        for (let pokemon of datos) {
            crearTarjetaPokemon(pokemon);
        }

    } catch (error) {
        console.error("Error al cargar los Pokemon:", error);
        listaPokemon.innerHTML = '<p class="error-msg" style="text-align:center;">Error al cargar el archivo JSON local.</p>';
    }
}

function crearTarjetaPokemon(pokemon) {
    const listaPokemon = document.getElementById('lista-pokemon');

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('pokemon-card');

    const imagen = document.createElement('img');
    imagen.src = pokemon.imagen; 
    imagen.alt = pokemon.name;

    const nombre = document.createElement('h3');
    nombre.textContent = `${pokemon.id}. ${pokemon.name}`;

    const botonCapturar = document.createElement('button');
    botonCapturar.textContent = "Capturar";
    botonCapturar.classList.add('btn-capturar');
    
    botonCapturar.addEventListener('click', () => {
        alert(`Has atrapado a ${pokemon.name}`);
    });

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(botonCapturar);
    
    listaPokemon.appendChild(tarjeta);
}