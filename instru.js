
document.addEventListener('keydown', function(e){
    var key = document.querySelector(`[data-key="${e.keyCode}"]`);
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!key || !audio) return;

        audio.currentTime = 0;
        audio.play();

        key.classList.add("playing");

        setTimeout(() => {
            key.classList.remove("playing");
        }, 150);
    });
console.log(e.keycode);


    


