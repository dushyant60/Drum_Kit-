// For Button Clicked.
var numberOfDrums = document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrums;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", firstClick);
function firstClick(){
var buttonInnerHTML = this.innerHTML;
  makeSounds(buttonInnerHTML);
  animatedButton(buttonInnerHTML);
}};

document.addEventListener("keydown", function(event){
    makeSounds(event.key);
    animatedButton(event.key);
});

function makeSounds(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();  
            break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
                
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break; 
            
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
         
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
                
        case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    
    
        default:
            break;
    }
}

function animatedButton(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 120);
}
