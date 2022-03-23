


                                                                /* EVENTOS */

let createAccount = document.getElementById("cr_A");
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

}

                                                                        /* DOM */


let descriptions = desc("Demon Slayer", "After a family faces demons and only two members survive, Tanjiro and his sister Nezuko, who is slowly turning into a demon, go on a mission to avenge their family.", "Action", 26, 24, 1 )

function desc( nombre, desc, genre, episodes, duration, seasons){
    let titulo = document.createElement('h1');
    let descr = document.createElement('h2');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    let span4 = document.createElement('span');

    titulo.className = "fs-2"
    titulo.innerHTML = nombre;
    descr.className = "fs-3"
    descr.innerHTML = desc;
    li1.innerHTML = "Genre"
    span1.innerHTML = genre;
    li2.innerHTML = "Episodes"
    span2.innerHTML = episodes;
    li3.innerHTML = "Duration"
    span3.innerHTML = duration;
    li4.innerHTML = "Seasons"
    span4.innerHTML = seasons;
 

    let padreTitulo = document.querySelector('.anime_desc');
    padreTitulo.append(titulo, descr, ul)
    ul.append(li1, li2, li3, li4)
    li1.appendChild(span1);
    li2.appendChild(span2);
    li3.appendChild(span3);
    li4.appendChild(span4);
}