const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR: Operation symbol was in last";
		let audio = new Audio('./sfx/combobreak.mp3');
		audio.play();
    }
}