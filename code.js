const pattern = ["rock", "scissors", "paper"];
let win = 0;
let lose = 0;
let tie = 0;
let start01 = new Audio('./asset/sound/079 sfx/pass1.mp3');
let start02 = new Audio('./asset/sound/079 sfx/pass2.mp3');
const resetPlayer  = '';
const resetComputer = '';

systemStartUp()
// this function is automaly skip to systemStartUP2
function systemStartUp() {
    const mainOverley = document.getElementById("main-overley")
    mainOverley.innerHTML = `
    <img class="white-frame" src="./asset/overley/white-frame-new.png" alt="white frame">
            <img class="grid-filter-overley" src="./asset/overley/scanlines-overlay.png" alt="">
            <img class="monitor-overlay" src="./asset/overley/bezel-overlay-2.png" alt="" >
            <img src="./asset/bg/tv-static.gif" alt="" class="old-tv-gif">
    `;

    const chat01 = document.getElementById("interect-input-container")
    chat01.innerHTML = `
    <p class="typed-out">System startup</p>
    <br>
    <p class="typed-out">EXITY BIOS</p>
    <p class="typed-out">VERSION 1.0</p>
    <p class="typed-out">COPYRIGHT (C) 1978 BY EXITY TECHNOLOGY.</p>
    <br>
    <p class="typed-out">System self-check</p>
    <br>
    <p class="typed-out">BEGIN MEMORY BOARD. Memory Address [ <span class="green">OK</span> ]</p>
    <p class="typed-out margin-left-2rem">THE TOP OF RAM IS 7FFF HEX.</p>
    <p class="typed-out margin-left-2rem">STACK BEGINS FROM 7F90 HEX.</p>
    <br>
    <p class="typed-out">BEGIN CPU/SYSTEM BOARDS. LINE Exchange [ <span class="green">OK</span> ]</p>
    <br>
    <p class="typed-out margin-left-2rem">Started Initialize ExtIDSteam</p>
    <p class="typed-out margin-left-2rem">External Stroage Device Detevted 0 SF HEX.</p>
    <p class="typed-out margin-left-2rem">Mountins /boot..</p>
    <p class="typed-out margin-left-2rem">Mountins /boot [ <span class="green">OK</span> ]</p>
    <p class="typed-out margin-left-2rem">Started Apply Kernel Variables</p>
    <p class="typed-out margin-left-2rem">Running 'init.s'..</p>
    `;
    
    setTimeout(systemStartUp2, 4000);
    console.log("system 2 started")
}
// chain automatic from systemStartup1
function systemStartUp2() {
    const mainOverley = document.getElementById("main-overley")
    mainOverley.innerHTML = `
    <img class="white-frame" src="./asset/overley/white-frame-new.png" alt="white frame">
            <img class="grid-filter-overley" src="./asset/overley/scanlines-overlay.png" alt="">
            <img class="monitor-overlay" src="./asset/overley/bezel-overlay-2.png" alt="" >
            <img src="./asset/bg/tv-static.gif" alt="" class="old-tv-gif">
    `;
    const chat02 = document.getElementById("interect-input-container")
    chat02.innerHTML = `
    <p class="typed-out">> start Psu_Pas_re9.s</p>
    <p class="typed-out">No var detected. Supply=DC Freq=n/a Stable=yes.</p>
    <p class="typed-out">Ready to receive.</p>
    <br>
    <p class="typed-out">> Port 21</p>
    <p class="typed-out">Port 21 is currently closed.</p>
    <br>
    <p class="typed-out">> Port open 21</p>
    <p class="typed-out">Port 21 has been opened.</p>
    <br>
    <p class="typed-out">> ping 275.6.92.157</p>
    <p class="typed-out">Pinging 275.6.92.157 with 64 bits of data.</p>
    <p class="typed-out">Reply from 275.6.92.157: Bits=64 Time=12ms</p>
    <p class="typed-out">Sent=1 Received=1 Lost=0 Av9Time=12ms</p>
    <p class="typed-out">FTP connection request at PORT 21 from 275.6.92.157. Accapt <span class="green">y</span> / <span class="red">n</span> ?</p>
    <br>
    <div id="user-input-box" class="user-input-box">
    <p class="user">User : </p><input autocomplete="off" id="player-text-input" class="player-input-text" size="100"  type="text"></input><button  class="enter-input" type="submit" id="submit-button">sumbit</button>
    </div>
    `;
    const playerInput = document.getElementById("player-text-input")
    const submitButton = document.getElementById("submit-button")
    submitButton.addEventListener('click', () => {
        if(playerInput.value === "y" || playerInput.value === "yes" || playerInput.value === "Y" || playerInput.value === "Y") {
            console.log("system start")
            const chat02 = document.getElementById("interect-input-container")
            chat02.innerHTML = ``;
            mainSystem()
        }
});
}

// this function is the bigest in this progarm
function mainSystem() {
    const mainOverley = document.getElementById("main-overley")
    mainOverley.innerHTML = `
    <img class="white-frame" src="./asset/overley/white-frame-new.png" alt="white frame">
            <img class="grid-filter-overley" src="./asset/overley/scanlines-overlay.png" alt="">
            <img class="monitor-overlay" src="./asset/overley/bezel-overlay-2.png" alt="" >
    `;

    const chat01 = document.getElementById("interect-input-container")
    chat01.innerHTML = ` 
    <p class="typed-out">System Start <span class="green">Complete</span></p>
    <div id="user-input-box" class="user-input-box">
    <p class="user">User : </p><input autocomplete="off" id="player-text-input" class="player-input-text" size="100"  type="text"></input><button  class="enter-input" type="submit" id="submit-button">sumbit</button>
    </div>`;

    // get player input and submit button
    const playerInput = document.getElementById("player-text-input")
    const submitButton = document.getElementById("submit-button")
    submitButton.addEventListener('click', () => {
    if (playerInput.value === "play rps" || playerInput.value === "play rock") {
        console.log("now playing rps")
        start01.play();
        gameAsk()
        finalResult();
    }
});
}



// fianl output function
function finalResult() {
    console.log("You Score :",win ,"   PC Score :",lose)
}
// random function
function comRandomInput(max) {
    let random = Math.floor(Math.random() *max);
    return random
}
// game RPS with input parameter
function game(input) {
    let player = input;
    console.log(player)
    const chat02 = document.getElementById("interect-input-container")
        chat02.innerHTML = ` 
        <p class="typed-out">Select Choice : (rock, scissors, paper)</p>
        <p class="typed-out"><p class="user">User : </p>${player}</p>`;

     // computer input 
     let computerInput = pattern[comRandomInput(pattern.length)];
     console.log("Computer :",computerInput)

     const chat03 = document.getElementById("interect-input-container")
     chat03.innerHTML = ` 
     <p >Select Choice : (rock, scissors, paper)</p>
     <p class="user typed-out">User : ${player}</p>
     <p class="user typed-out">079 : ${computerInput}</p>`;
     console.log("player is ",player);
     // if else condition player win
     if(player === "rock" && computerInput === "scissors" || player === "scissors" && computerInput === "paper" || player === "paper" && computerInput === "rock") {
        const elementP = document.createElement("p")
        const textPlayer = document.createTextNode("You Win")
        elementP.appendChild(textPlayer)
        elementP.setAttribute("class", "user typed-out")
        document.getElementById("interect-input-container").appendChild(elementP)
         win++;
     // else if player lose
     }else if (player === "scissors" && computerInput === "rock" || player === "paper" && computerInput === "scissors" || player === "rock" && computerInput === "paper") {
        const elementP = document.createElement("p")
        const textPlayer = document.createTextNode("079 Win")
        elementP.appendChild(textPlayer)
        elementP.setAttribute("class", "user typed-out")
        document.getElementById("interect-input-container").appendChild(elementP) 
        lose++;
     // else if player Tie
     }else if(player === "scissors" && computerInput === "scissors" || player === "paper" && computerInput === "paper" || player === "rock" && computerInput === "rock") {
        const elementP = document.createElement("p")
        const textPlayer = document.createTextNode("tie")
        elementP.appendChild(textPlayer)
        elementP.setAttribute("class", "user typed-out")
        document.getElementById("interect-input-container").appendChild(elementP) 
         tie++;
     }else {
         console.log("warning : Wrong Input")
     }

}


function gameAsk() {
    const chat01 = document.getElementById("interect-input-container");
        chat01.innerHTML = ` 
        <p class="typed-out">Select Choice : (rock, scissors, paper)</p>
        <div id="user-input-box" class="user-input-box">
            <p class="user">User : </p><input autocomplete="off" id="player-text-input" class="player-input-text" size="100"  type="text"></input><button  class="enter-input" type="submit" id="submit-button">sumbit</button>
        </div>`;
    const playerInput = document.getElementById("player-text-input");
    const submitButton = document.getElementById("submit-button");
        submitButton.addEventListener('click', () => {
        let input = playerInput.value;
        game(input)
        
    });
}




