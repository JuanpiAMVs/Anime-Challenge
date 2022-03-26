const search = document.getElementById('search')
const user = document.createElement('p')

search.appendChild(user)
user.className = "user"

const userNameJson = JSON.parse(sessionStorage.getItem('email'))
const {clave:contraseña} = userNameJson
console.log(contraseña)
user.innerHTML = userNameJson.email[0].toUpperCase();


function changePassword(newP, numberUser){
    const newPassword = {
        ...usuarios[numberUser],
        clave: newP,
        
    }
    console.log(newPassword)
}

changePassword("mondongo", 0)