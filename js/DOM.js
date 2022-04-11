const lista = document.querySelector('#EightySix')
 fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {
        
     animeDescription("EightySix")
        
      async  function animeDescription (nombre) {
          
        const arrays = await data;

            id = document.getElementById(nombre);
                const find = arrays.find(anime => anime.nombre === nombre);
                const find1 = Object.values(find)
                lista.innerHTML = `
                    <h1 class="fs-2">${find1[0]}</h1>
                    <h2 class="fs-3">${find1[1]}</h2>
                 <div class="difficulty d-flex flex-row  justify-content-evenly">
                    <ul class="col-xxl-7 ulDesc">
                  <li>Genre <span>${find1[2]}</span></li>
                  <li>Episodes <span>${find1[3]}</span></li>
                  <li>Duration <span>${find1[4]}</span></li>
                  <li>Seasons <span>${find1[5]}</span></li>
                    </ul>
                    <ul class="col-xxl-5 ulBTN">                
                    <li><a href="./Easy/Episode 1.html"><button type="button" class="btn btn-primary background-btn" style="background-image: url(./Easy/easy.jpg)">Easy / ${find1[6]}</button></a> </li>
                    <li><a href="./Medium/Episode 1.html"><button type="button" class="btn btn-primary background-btn" style="background-image: url(./Medium/medium.jpg)">Medium / ${find1[7]}</button></a> </li>
                    <li><a href="./Hard/Episode 1.html"><button type="button" class="btn btn-primary background-btn" style="background-image: url(./Hard/hard.jpg)">Hard / ${find1[8]}</button></a> </li>
                </div>
                `
       

            }
           
        }
    )



