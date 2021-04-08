const bankOne = [
    {
        audio_id: "Q",
        div_id: "Heater-1",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        audio_id: "W",
        div_id: "Heater-2",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        audio_id: "E",
        div_id: "Heater-3",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        audio_id: "A",
        div_id: "Heater-4",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        audio_id: "S",
        div_id: "Clap",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        audio_id: "D",
        div_id: "Open-HH",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        audio_id: "Z",
        div_id: "Kick-n'-Hat",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        audio_id: "X",
        div_id: "Kick",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        audio_id: "C",
        div_id: "Closed-HH",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
];
const bankTwo = [
    {
        audio_id: "Q",
        div_id: "Chord-1",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {
        audio_id: "W",
        div_id: "Chord-2",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {
        audio_id: "E",
        div_id: "Chord-3",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {
        audio_id: "A",
        div_id: "Shaker",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {
        audio_id: "S",
        div_id: "Open-HH",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {
        audio_id: "D",
        div_id: "Closed-HH",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {
        audio_id: "Z",
        div_id: "Punchy-Kick",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {
        audio_id: "X",
        div_id: "Side-Stick",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {
        audio_id: "C",
        div_id: "Snare",
        audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }];
const bankBtn = getElementById('bank-btn-slider');
const powerBtn = getElementById('power-btn-slider');
const display = getElementById('display');
const buttons = document.getElementsByClassName('btns-container')[0].getElementsByTagName('li');
const volumeSlider = getElementById('volume-slider');
let allAudio = document.getElementsByTagName("audio");

let power;

bankBtn.addEventListener('click', onBankChange);
powerBtn.addEventListener('click', onPower);
volumeSlider.addEventListener('change', ( event) => { setVolume(event.currentTarget.value); });

function setVolume( volume ) {
    for (let i = 0; i < allAudio.length ; i++) {
        allAudio[i].volume = volume;
    }
}
function volumeMute() {
    setVolume( 0 );
    volumeSlider.value = 0;
}
function volumeMax() {
    setVolume( 1 );
    volumeSlider.value = 1;
}
function getElementById( id ) {
    return document.getElementById(id);
}
function getParent( element ) {
    return element.parentNode;
}
function setParentStyle( eventType, element ) {
    let parentElement = getParent(element);

    if (eventType === 'keydown') {
        display.innerText = parentElement.id;
        parentElement.style.fontSize = "xx-large";
        parentElement.style.boxShadow = "0 0 0";
    }
    if(eventType === 'keyup') {
        parentElement.style.fontSize = "x-large";
        parentElement.style.boxShadow = "#222f3e 3px 3px 5px";
    }
}
function play( element ) {
    element.play();
}
function buttonEvents() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mousedown', () => {
            buttons[i].style.boxShadow = "0 0 0";
            if (power) {
                play(buttons[i].getElementsByTagName("audio")[0]);
                display.innerHTML = buttons[i].id;
            }
        });
        buttons[i].addEventListener('mouseup', () => {
            buttons[i].style.boxShadow =  "3px 3px 5px #222f3e";
        });
    }
}
function giveProperties( arr ) {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].id = arr[i].div_id;
        const audio = getElementById(arr[i].audio_id);
        audio.src = arr[i].audio_src;
    }
}
function onBankChange() {

    if (bankBtn.style.float === 'left'){

        bankBtn.style.float = 'right';
        giveProperties(bankTwo);

    } else {
        bankBtn.style.float = 'left';
        giveProperties(bankOne);
    }

}
function onPower() {
    if( power ){
        powerBtn.style.float = 'right';
        power = false;
        display.innerHTML = '';

    } else {
        powerBtn.style.float = 'left';
        power = true;
    }
}
function keyListeners() {
    let element;

    document.addEventListener('keydown', (eventDown) => {
        switch (eventDown.code) {
            case 'KeyQ':
                element =  getElementById('Q');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
            case 'KeyW':
                element =  getElementById('W');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
            case 'KeyE':
                element =  getElementById('E');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
            case 'KeyA':
                element =  getElementById('A');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
            case 'KeyS':
                element =  getElementById('S');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
            case 'KeyD':
                element =  getElementById('D');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
            case 'KeyZ':
                element =  getElementById('Z');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
            case 'KeyX':
                element =  getElementById('X');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
            case 'KeyC':
                element =  getElementById('C');
                setParentStyle(eventDown.type, element);
                play(element);
                break;
        }
    });
    document.addEventListener('keyup', (eventUp) => {
        switch (eventUp.code) {
            case 'KeyQ':
                element =  getElementById('Q');
                setParentStyle(eventUp.type, element);
                break;
            case 'KeyW':
                element =  getElementById('W');
                setParentStyle(eventUp.type, element);
                break;
            case 'KeyE':
                element =  getElementById('E');
                setParentStyle(eventUp.type, element);
                break;
            case 'KeyA':
                element =  getElementById('A');
                setParentStyle(eventUp.type, element);
                break;
            case 'KeyS':
                element =  getElementById('S');
                setParentStyle(eventUp.type, element);
                break;
            case 'KeyD':
                element =  getElementById('D');
                setParentStyle(eventUp.type, element);
                break;
            case 'KeyZ':
                element =  getElementById('Z');
                setParentStyle(eventUp.type, element);
                break;
            case 'KeyX':
                element =  getElementById('X');
                setParentStyle(eventUp.type, element);
                break;
            case 'KeyC':
                element =  getElementById('C');
                setParentStyle(eventUp.type, element);
                break;
        }
    })
}
function onStartup() {
    power = true;
    bankBtn.style.float = 'left';
    buttonEvents();
    giveProperties(bankOne);
    setVolume( volumeSlider.value );
    keyListeners();
}

onStartup();
