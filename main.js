const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0; i < botoes.lenght; i++){
    botoes[i].onclick = function(){

        for(let j=0; j < botoes.lenght; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-12-05T00:00:00");
const tempoObjetivo3 = new Date("2024-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];




function calculaTempo(key){
    let tempoAtual = new Date();
    let tempoFinal = tempos[key] - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);        
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if(tempoFinal >= 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
        
    } else {
        "Acabou!!!"
    }
    
    
}

function atualizaCronometro(){
for (let i=0; i<contadores.length;i++){
    contadores[0].textContent = calculaTempo(1);
    contadores[1].textContent = calculaTempo(2);
    contadores[2].textContent = calculaTempo(3);
    contadores[3].textContent = calculaTempo(4);   
}
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();