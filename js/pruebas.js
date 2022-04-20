import * as Toastify from './../node_modules/toastify-js/src/toastify-es.js'


let index = document.getElementById('index');
index.addEventListener("dblclick", ()=>{
    Toastify.default({       
        close: true,
        text: "Erza wants to meet you",
        destination: 'https://www.patreon.com/juanpiamvs',
        backgroundColor: 'red',
        avatar: '../Assets/Erza-Scarlet-E23jUcUYn-b.jpg',     
        duration: 10000
        
        }).showToast();
})


                                                                /* EVENTOS */

/* let createAccount = document.getElementById("cr_A");
createAccount.addEventListener("submit", datos)

function datos (e){
    e.preventDefault();
    let form = e.target
    console.log(form.children[1].value); 
    console.log(form.children[3].value); 
    let alert = document.createElement('div');
    alert.className = "alert alert-primary"
    let text = document.createElement('p')
    text.innerHTML = "account created successfully";
    let create = document.getElementById("create");
    let formulario = document.getElementById("form");
    alert.appendChild(text)
    create.insertBefore(alert, formulario);

} */




 