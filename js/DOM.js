fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {
        function animeDescription (clase) {
            id = document.getElementById(clase);
                const find = data.find(anime => anime.clase === clase);
                const lista = document.querySelector('#' + clase)
                lista.innerHTML = `
                    <h1 class="fs-2">${find.nombre}</h1>
                    <h2 class="fs-3">${find.description}</h2>
                    <div class="difficulty d-flex flex-row  justify-content-evenly">
                    <ul class="col-xxl-7 ulDesc">
                    <li>Genre <span>${find.Genre}</span></li>
                    <li>Episodes <span>${find.Episodes}</span></li>
                    <li>Duration <span>${find.Duration}</span></li>
                    <li>Seasons <span>${find.Seasons}</span></li>
                    </ul>
                    <ul class="col-xxl-5 ulBTN">                
                    <li><a href="./Easy/Episode 1.html" class="${find.Easy}" ><button type="button" class="btn btn-primary background-btn" style="background-image: url(./Easy/easy.jpg)">Easy / ${find.Easy}</button></a> </li>
                    <li><a href="./Medium/Episode 1.html"><button type="button" class="btn btn-primary background-btn" style="background-image: url(./Medium/medium.jpg)">Medium / ${find.Medium}</button></a> </li>
                    <li><a href="./Hard/Episode 1.html"><button type="button" class="btn btn-primary background-btn" style="background-image: url(./Hard/hard.jpg)">Hard / ${find.Hard}</button></a> </li>
                </div>
                `
        }
        animeDescription(animeId);
    });