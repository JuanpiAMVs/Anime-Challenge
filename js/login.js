const usuarios = [
    { email: "juan@hotmail.com", clave:"098765"},
    { email: "ignacio@hotmail.com", clave: "culele"}
]

let email = document.getElementById('exampleInputEmail1')
let password = document.getElementById('exampleInputPassword1')
let form = document.getElementById('form')
let submit = document.getElementById('submit')

const login = (e) => {
    e.preventDefault();
    emailLog = usuarios.find(usuario => usuario.email === email.value);
    claveLog = usuarios.find(usuario => usuario.clave === password.value);

        if(!emailLog){
            let error = document.createElement('h5')
            form.appendChild(error)
            error.innerHTML = "El correo o contraseña ingresado con incorrectos"
        }else if (!claveLog){
             let errorClave = document.createElement('h5')
             form.appendChild(errorClave)
             errorClave.innerHTML = "El correo o contraseña ingresado con incorrectoss"
           
    
        }else if (emailLog && claveLog){
            alert('Login Success')
            window.location="../index.html"
            sessionStorage.setItem('email', JSON.stringify(emailLog))      
          
        }
       
}

submit.onclick = login
