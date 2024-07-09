var numOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonClicked=this.innerHTML;
        makeSound(buttonClicked);
        makeAnimation(buttonClicked);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})


function makeSound(key){
    switch (key) {
        case "q":var audio=new Audio('./sound/a1_bassdrum.mp3');
                 audio.play();
                 break;
        
        case "w":var audio=new Audio('./sound/a2_bassdrum.mp3');
                 audio.play();
                 break;

        case "e":var audio=new Audio('./sound/a3_bassdrum.mp3');
                 audio.play();
                 break;

        case "r":var audio=new Audio('./sound/a4_bassdrum.mp3');
                 audio.play();
                 break;

        case "t":var audio=new Audio('./sound/a5_bassdrum.mp3');
                 audio.play();
                 break;

        case "y":var audio=new Audio('./sound/a6_snaredrum.mp3');
                 audio.play();
                 break;

        case "u":var audio=new Audio('./sound/a7_snaredrum.mp3');
                 audio.play();
                 break;

        case "i":var audio=new Audio('./sound/a8_snaredrum.mp3');
                 audio.play();
                 break;

        case "o":var audio=new Audio('./sound/a9_snaredrum.mp3');
                 audio.play();
                 break;

        case "p":var audio=new Audio('./sound/a10_snare_drum.mp3');
                 audio.play();
                 break;

        case "a":var audio=new Audio('./sound/b1_cymbal.mp3');
                 audio.play();
                 break;

        case "s":var audio=new Audio('./sound/b2_cymbal.mp3');
                 audio.play();
                 break;

        case "d":var audio=new Audio('./sound/b3_cymbal.mp3');
                 audio.play();
                 break;

        case "f":var audio=new Audio('./sound/b4_cymbal.mp3');
                 audio.play();
                 break;

        case "g":var audio=new Audio('./sound/b5_cymbal.mp3');
                 audio.play();
                 break;

        case "h":var audio=new Audio('./sound/b6_stick.mp3');
                 audio.play();
                 break;

        case "j":var audio=new Audio('./sound/b7_stick.mp3');
                 audio.play();
                 break;

        case "k":var audio=new Audio('./sound/b8_sticks.mp3');
                 audio.play();
                 break;

        case "l":var audio=new Audio('./sound/b9_stick.mp3');
                 audio.play();
                 break;

        case "z":var audio=new Audio('./sound/c1_hihat.mp3');
                 audio.play();
                 break;

        case "x":var audio=new Audio('./sound/c2_hihat.mp3');
                 audio.play();
                 break;

        case "c":var audio=new Audio('./sound/c3_hihat.mp3');
                 audio.play();
                 break;

        case "v":var audio=new Audio('./sound/c4_hihat.mp3');
                 audio.play();
                 break;

        case "b":var audio=new Audio('./sound/c5_floortom.mp3');
                 audio.play();
                 break;

        case "n":var audio=new Audio('./sound/c6_medtom.mp3');
                 audio.play();
                 break;

        case "m":var audio=new Audio('./sound/c7_smalltom.mp3');
                 audio.play();
                 break;


        default:console.log(button.innerHTML);
    }
}

function makeAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}