const search = document.getElementById('search')
const user = document.createElement('p')

search.appendChild(user)
user.className = "user"

const userNameJson = JSON.parse(sessionStorage.getItem('email'))
user.innerHTML = userNameJson.email[0].toUpperCase()
