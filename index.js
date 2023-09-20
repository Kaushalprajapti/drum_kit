var number_of_button = document.querySelectorAll(".drum").length;
for (var i = 0; i < number_of_button; i++)
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        makesound(button);
        addnimation(button);
    });

    document.addEventListener("keypress",function(event){
        makesound(event.key);
        addnimation(event.key);
    })
    function makesound(button)
    {
        switch (button) {
            case "w":
                var audio = new Audio('tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('snare.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('crash.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('kick-bass.mp3');
                audio.play();
                break;
        }
    }

    function addnimation(id) {
        var name = document.querySelector("."+id);
        name.classList.add("press");
        setTimeout(function(){
            name.classList.remove("press");
        },200);
    }
// var audio = new Audio('crash.mp3');
// audio.play();
