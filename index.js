

let buttons = document.querySelectorAll('.drum-pad'); 

buttons.forEach(btn => {

    function powerOff(){
                if(btn.style.color != "white"){
        btn.style.color = "white";
        document.getElementById('display').style.color = "white";
        document.getElementById('display').style.boxShadow = "none";
        document.getElementById('padsContainer').style.boxShadow = "none";
        document.getElementById('power').style.boxShadow = "none";
        document.getElementById('power').style.color = "white";
        [].slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
            audio.muted = true;
        });
    }
    else if(btn.style.color == "white"){
        btn.style.color = "black";
        document.getElementById('display').style.color = "black";
        document.getElementById('display').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
        document.getElementById('padsContainer').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
        document.getElementById('power').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
        document.getElementById('power').style.color = "black";
        [].slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
            audio.muted = false;
        });
    }
    }


btn.addEventListener('click', (event) => {

    if(btn == document.getElementsByClassName('drum-pad')[0]){
        changeToQ();
    }
    else if(btn == document.getElementsByClassName('drum-pad')[1]){
        changeToW();
    }
    else if(btn == document.getElementsByClassName('drum-pad')[2]){
        changeToE();
    }
    else if(btn == document.getElementsByClassName('drum-pad')[3]){
        changeToA();
    }
    else if(btn == document.getElementsByClassName('drum-pad')[4]){
        changeToS();
    }
    else if(btn == document.getElementsByClassName('drum-pad')[5]){
        changeToD();
    }
    else if(btn == document.getElementsByClassName('drum-pad')[6]){
        changeToZ();
    }
    else if(btn == document.getElementsByClassName('drum-pad')[7]){
        changeToX();
    }
    else if(btn == document.getElementsByClassName('drum-pad')[8]){
        changeToC();
    }

  }, false);

  document.getElementById('power').addEventListener('click', (event) => {
    powerOff();
}, false);


  document.addEventListener('mouseup', (event) => {

    btn.style.backgroundColor = "white";
    btn.style.transform = "scale(1.0)";

  }, false);
  

  document.addEventListener('keydown', (event) => {


    var keyboy = event.keyCode;
    
    if(keyboy == 81){
        changeToQ();
    }
    else if(keyboy == 87){
        changeToW();
    }
    else if(keyboy == 69){
        changeToE();
    }
    else if(keyboy == 65){
        changeToA();
    }
    else if(keyboy == 83){
        changeToS();
    }
    else if(keyboy == 68){
        changeToD();
    }
    else if(keyboy == 90){
        changeToZ();
    }
    else if(keyboy == 88){
        changeToX();
    }
    else if(keyboy == 67){
        changeToC();
    }
    else if(keyboy == 13){
        powerOff();
    }else {}

  }, false);

  document.addEventListener('keyup', (event) => {

    btn.style.backgroundColor = "white";
    btn.style.transform = "scale(1.0)";

  }, false);

});




function changeToQ(){
    document.getElementById('display').innerHTML = 'Heater 1';
    document.getElementById('Q').load();
    document.getElementById('Q').play();
    document.getElementsByClassName('drum-pad')[0].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[0].style.transform = "scale(0.9)";
}

function changeToW(){
    document.getElementById('display').innerHTML = 'Heater 2';
    document.getElementById('W').load();
    document.getElementById('W').play();
    document.getElementsByClassName('drum-pad')[1].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[1].style.transform = "scale(0.9)";
}

function changeToE(){
    document.getElementById('display').innerHTML = 'Heater 3';
    document.getElementById('E').load();
    document.getElementById('E').play();
    document.getElementsByClassName('drum-pad')[2].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[2].style.transform = "scale(0.9)";
}

function changeToA(){
    document.getElementById('display').innerHTML = 'Heater 4';
    document.getElementById('A').load();
    document.getElementById('A').play();
    document.getElementsByClassName('drum-pad')[3].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[3].style.transform = "scale(0.9)";
}

function changeToS(){
    document.getElementById('display').innerHTML = 'Clap';
    document.getElementById('S').load();
    document.getElementById('S').play();
    document.getElementsByClassName('drum-pad')[4].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[4].style.transform = "scale(0.9)";
}

function changeToD(){
    document.getElementById('display').innerHTML = 'Open-HH';
    document.getElementById('D').load();
    document.getElementById('D').play();
    document.getElementsByClassName('drum-pad')[5].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[5].style.transform = "scale(0.9)";
}

function changeToZ(){
    document.getElementById('display').innerHTML = 'Kick-n-Hat';
    document.getElementById('Z').load();
    document.getElementById('Z').play();
    document.getElementsByClassName('drum-pad')[6].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[6].style.transform = "scale(0.9)";
}

function changeToX(){
    document.getElementById('display').innerHTML = 'Kick';
    document.getElementById('X').load();
    document.getElementById('X').play();
    document.getElementsByClassName('drum-pad')[7].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[7].style.transform = "scale(0.9)";
}

function changeToC(){
    document.getElementById('display').innerHTML = 'Closed-HH';
    document.getElementById('C').load();
    document.getElementById('C').play();
    document.getElementsByClassName('drum-pad')[8].style.backgroundColor = "#ffa500";
    document.getElementsByClassName('drum-pad')[8].style.transform = "scale(0.9)";
}





let volume = document.getElementById("volume");
volume.addEventListener("change", function(e) {
    [].slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
        audio.volume = e.currentTarget.value / 100;
    });
})