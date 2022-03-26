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
    let emailLog = usuarios.find(usuario => usuario.email === email.value);
    let find = Object.entries(emailLog)

        if(!emailLog){
            let error = document.createElement('h5')
            form.appendChild(error)
            error.innerHTML = "El correo o contraseña ingresado con incorrectos"
        }else if (!find){
             let errorClave = document.createElement('h5')
             form.appendChild(errorClave)
             errorClave.innerHTML = "El correo o contraseña ingresado con incorrectoss"
           
    
        }else if (emailLog && find){
            finds()
            
            sessionStorage.setItem('email', JSON.stringify(emailLog))       
          
        }
        function finds ()  {
          const search = (password.value === find[1][1]) ?  window.location="../index.html" : alert("nelprro")
       }
}

submit.onclick = login
