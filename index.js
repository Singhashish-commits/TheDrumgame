
var allbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < allbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);

        
    });
}
document.addEventListener("keydown" ,function(event){
    makesound(event.key);
});

function makesound(key){


        switch (key) {
            case "w":
                var audio = new Audio("https://whimsical-malabi-33179d.netlify.app/sounds/crash.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("https://whimsical-malabi-33179d.netlify.app/sounds/kick-bass.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("https://whimsical-malabi-33179d.netlify.app/sounds/snare.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("https://whimsical-malabi-33179d.netlify.app/sounds/tom-1.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("https://whimsical-malabi-33179d.netlify.app/sounds/tom-2.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("https://whimsical-malabi-33179d.netlify.app/sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("https://whimsical-malabi-33179d.netlify.app/sounds/tom-4.mp3");
                audio.play();
                break;

            default:
                console.log(buttonInnerHtml);

        }

}
