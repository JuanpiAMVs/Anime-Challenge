const Days7 = 604800000;
const Days6 = 518400000;
const Days5 = 432000000;
const Days4 = 345600000;
const Days3 = 259200000;
const Days2 = 172800000;
const Days1 = 86400000;
setTimeout(()=>{
        let week = document.getElementsByClassName('week');
        console.log(week)
        week[0].addEventListener('click', (e) => {      
            e.preventDefault()  
            let now = new Date();
            const suma = new Date(now.getTime() + 604800000);     //fecha futura 
            localStorage.setItem("fechactual", now.toString());
            localStorage.setItem('fechafutura', suma)

            fecha(Days7);
            window.location = "Easy/Episode 1.html";      
              
        })    
    }, 1000)
    
                function fecha(deadline){
                    fechafutura = localStorage.getItem('fechafutura');
                    let now = new Date();    
                    let futuro = new Date(fechafutura);   
                  /*   alert("Finaliza el reto antes de:" + "\n" +suma); */
                        let remainTime = (futuro.getTime() - now.getTime() + 1000) / 1000;
                        let segundos = ('0' + Math.floor(remainTime % 60)).slice(-2);
                        let minutos = ('0' + Math.floor(remainTime /60 % 60)).slice(-2);
                        let horas = ('0' + Math.floor(remainTime /3600 % 24)).slice(-2);
                        let dias = Math.floor(remainTime / (3600 * 24));            
                        return{
                            remainTime,
                            segundos,
                            horas,
                            minutos,
                            dias
                        }                                            
                }
const updateTime = setInterval ( () => {
 const reloj = document.getElementById('reloj');
 tiempo = fecha(Days7)
 reloj.innerHTML = tiempo.dias + ':D ' + tiempo.horas + 'H ' + tiempo.minutos + 'M ' + tiempo.segundos + 's ';
 if(tiempo.remainTime <= 1){
 clearInterval(updateTime)
}                        
}, 1000)

