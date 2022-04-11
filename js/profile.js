const search = document.getElementById('search')
const user = document.createElement('p')

search.appendChild(user)
user.className = "user"

const userNameJson = JSON.parse(sessionStorage.getItem('email'))
const {clave:contraseña} = userNameJson
console.log(contraseña)
user.innerHTML = userNameJson.email[0].toUpperCase();


if(user === undefined){
    
}   else{
    const drop1 = document.getElementById('drop1')
    drop1.innerHTML = "Profile"
    const drop2 = document.getElementById('drop2')
    drop2.innerHTML = "Log out"
    drop2.addEventListener('click', sessionStorage.clear() )

}


/* 
                            crea otro array con la nueva clave pero no reemplaza la original */
function changePassword(newP, numberUser){
    const newPassword = {
        ...usuarios[numberUser],
        clave: newP,
        
    }
    console.log(newPassword)
}

changePassword("mondongo", 0)
