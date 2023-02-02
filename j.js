const eligeAtaque = document.getElementById("elige-ataque")
const eligePokemon = document.getElementById("elige-pokemon")
const botonPokemonJugador = document.getElementById("boton-selecionar")
const botonReiniciar = document.getElementById("boton-reiniciar")
const botones = document.getElementById("contenedorBotones")
const pokemonJugador = document.getElementById("tu-pokemon")
const waifuElectaSrc = document.getElementById("WaifuElectaSrc")
const waifuElectaRivalSrc = document.getElementById("wifuElectaRival")

const spanPokemonRival = document.getElementById("pokemon-rival")

const spanTusVidas = document.getElementById("tus-vidas")
const spanVidasRival = document.getElementById("vida-rival")

const sectionMensajes=document.getElementById("mensajes")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
let opcionDeWaifus
let misWaifus = []
let ataqueJugador = []
let ataqueEnemigo =[]
let inputseibar 
let inputrias 
let ataqueDeWaifu
let inputrem
let inputseibarF
let inputseibarT
let inputriasF
let vidasJugador = 3
let vidasEnemigo = 3
let tuWaifu
let botonFuego
let botonTierra 
let botonAgua 
let botonDeLosAtaques = []
let atakRival 
let indexAtaqueEnemigo
let indexAtaqueJugador
let victoriasJugador = 0
let victoriasEnemigo = 0
let aleatorioRival


class Waifus {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let seibar = new Waifus('Seibar', '1.png', 5)
let rias = new Waifus('Rias', '2.png', 5)
let rem = new Waifus('Rem', '3.png', 5)
let seibar_f = new Waifus('Asuna', '4.png', 5)
let seibar_t = new Waifus('Marin', '5.png', 5)
let rias_f = new Waifus('ZeroTwo', '6.png', 5)

misWaifus.push(seibar, rias, rem, seibar_f, seibar_t, rias_f)

seibar.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

rias.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

rem.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
   
)

seibar_f.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

seibar_t.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

rias_f.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    
)
function iniciarJuego(){ 
    eligeAtaque.style.display = "none"

    misWaifus.forEach((misWaifus) =>{
        opcionDeWaifus = ` 
        <label class="pokemones" for=${misWaifus.nombre}>
        <p>${misWaifus.nombre}</p>
        <img src=${misWaifus.foto}  alt="${misWaifus.nombre}">
        </label>
        <input type="radio" name="pokemon" id=${misWaifus.nombre}>`
        contenedorTarjetas.innerHTML += opcionDeWaifus

        inputseibar = document.getElementById("Seibar")
        inputrias = document.getElementById("Rias")
        inputrem = document.getElementById("Rem")
        inputseibarF = document.getElementById("Asuna")
        inputseibarT = document.getElementById("Marin")
        inputriasF = document.getElementById("ZeroTwo")

    })

    eligePokemon.style.display = "flex"
    botonPokemonJugador.addEventListener("click", selecionarPokemon)
    
    botonReiniciar.style.display = "none"
}
function selecionarPokemon() { 
    eligeAtaque.style.display = "flex"
    eligePokemon.style.display = "none"
   
 
    if (inputseibar.checked){
       pokemonJugador.innerHTML = inputseibar.id
       tuWaifu = inputseibar.id
       waifuElectaSrc.src = seibar.foto
       
    }
    else if(inputrias.checked){
        pokemonJugador.innerHTML = inputrias.id
        tuWaifu = inputrias.id
        waifuElectaSrc.src = rias.foto
    }
    else if(inputrem.checked){
        pokemonJugador.innerHTML = inputrem.id
        tuWaifu = inputrem.id
        waifuElectaSrc.src = rem.foto
    }
    else if(inputseibarF.checked){
        pokemonJugador.innerHTML = inputseibarF.id
        tuWaifu = inputseibarF.id
        waifuElectaSrc.src = seibar_f.foto

    }
    else if(inputseibarT.checked){
        pokemonJugador.innerHTML = inputseibarT.id
        tuWaifu = inputseibarT.id
        waifuElectaSrc.src = seibar_t.foto
       
    }
    else if(inputriasF.checked){
        pokemonJugador.innerHTML = inputriasF.id
        tuWaifu = inputriasF.id
        waifuElectaSrc.src = rias_f.foto
        
    }
    else( alert("Elige algo"))
    
   
    extraerAtaque(tuWaifu)
    seleccionRival()
   

}



function extraerAtaque(tuWaifu){
    let ataques
    for (let i = 0; i < misWaifus.length; i++){
        if (tuWaifu === misWaifus[i].nombre){
            ataques = misWaifus[i].ataques
        }
    } mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((atak) => {
        ataqueDeWaifu = `
        <button class="botones-ataque BAtaques" id=${atak.id}>${atak.nombre}</button>
        `
        botones.innerHTML += ataqueDeWaifu
    })
botonDeLosAtaques = document.querySelectorAll(".BAtaques")
botonFuego = document.getElementById("boton-fuego")
botonTierra = document.getElementById("boton-tierra")
botonAgua = document.getElementById("boton-agua")

}

function secuenciaAtaque(){
    botonDeLosAtaques.forEach((boton) =>{
        // Aqui le damos utilidad a los botones, al darle click a los botones  buscara en el mismo elemento del boton el contenido de su texto y dependiendo del mismo se hara push con el nombre del ataque en el ataqueJugador y se cambiara el color del boton
        boton.addEventListener("click",(e) =>{
            if (e.target.textContent === "🔥"){
                ataqueJugador.push("Fuego")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                botonFuego.disabled = true
               
            }
             else if(e.target.textContent === "💧"){
                ataqueJugador.push("Agua")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"   
                botonAgua.disabled = true 
               
            }
            else{
                ataqueJugador.push("Tierra")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                botonTierra.disabled = true 
                
            }
            ataqueEnemigoAleatorio()
           
        }) 
    }) 
   
}

function seleccionRival() {
    aleatorioRival = aleatorio(0, misWaifus.length -1)

    spanPokemonRival.innerHTML = misWaifus[aleatorioRival].nombre
    atakRival = misWaifus[aleatorioRival].ataques
    waifuElectaRivalSrc.src = misWaifus[aleatorioRival].foto
    secuenciaAtaque()
}


 function ataqueEnemigoAleatorio(){
    let ataqueAletorio  = aleatorio(0, atakRival.length -1)

    if (ataqueAletorio == 0 || ataqueAletorio == 1){
        ataqueEnemigo.push("Fuego")
    }
    else if (ataqueAletorio == 3 || ataqueAletorio == 4){
        ataqueEnemigo.push("Agua")
    }
    else{ataqueEnemigo.push("Tierra")}
    console.log(ataqueEnemigo)
    finalizarPelea()
   
   
}
function finalizarPelea(){
    if(ataqueJugador.length === 5){
        combate() 
       revisarVidas()

    }
}
function indexAmbosOponenetes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate(){
    for (let index = 0; index < ataqueJugador.length; index++){
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponenetes(index,index)
            crearMensaje("Empate🤝")
        }
        else if(ataqueJugador[index] == "Fuego" && ataqueEnemigo[index] == "Tierra"){
            indexAmbosOponenetes(index,index)
            crearMensaje("Ganaste😁")
            victoriasJugador++
            spanTusVidas.innerHTML = victoriasJugador
        }
        else if(ataqueJugador[index] == "Agua" && ataqueEnemigo[index] == "Fuego"){
            indexAmbosOponenetes(index,index)
            crearMensaje("Ganaste😁")
            victoriasJugador++
            spanTusVidas.innerHTML = victoriasJugador
            
        }
        else if(ataqueJugador[index] == "Tierra" && ataqueEnemigo[index] == "Agua"){
            indexAmbosOponenetes(index,index)
            crearMensaje("Ganaste😁")
            victoriasJugador++
            spanTusVidas.innerHTML = victoriasJugador
        }
        else{
            indexAmbosOponenetes(index,index)
            crearMensaje("Perdiste😭")
        victoriasEnemigo++
        spanVidasRival.innerHTML = victoriasEnemigo}
        
    }
    
    
    
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Empate, sigue intentando")
    }
    else if(victoriasJugador < victoriasEnemigo){
        {crearMensajeFinal("Prediste por Mmgv")}
    }
    else{
        {crearMensajeFinal("Ganaste guapeton")}
    }
}

function crearMensaje(resultado)
{
let parrafo=document.createElement('p')
parrafo.innerHTML= `Tu waifu ${tuWaifu} atacó con ${indexAtaqueJugador} y tu rival ${misWaifus[aleatorioRival].nombre} atacó con ${indexAtaqueEnemigo}, ${resultado}`
sectionMensajes.appendChild(parrafo)}

function crearMensajeFinal(resultadoFinal){
    let parrafo=document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    botonReiniciar.addEventListener("click", reiniciarJuego)
    botonReiniciar.style.display = "flex"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

