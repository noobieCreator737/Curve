var playbutton = document.getElementById("play");
let forwardBtn = document.getElementById("forward");
let rewindBtn = document.getElementById("rewind");
var video = document.getElementById("video");
const values = 10;

playbutton.innerHTML = `<i class="fa-solid fa-play"></i>`;
playbutton.addEventListener("click",(e)=>{
    // alert("Video will now play");
    let isPlaying = false;
    if(!isPlaying && video.paused){
        playbutton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        video.play();
    }else if(!isPlaying && video.play){
        playbutton.innerHTML = `<i class="fa-solid fa-play"></i>`;
        video.pause();
        // isPlaying = false;
    }
    
});

forwardBtn.addEventListener('click',()=>{
    video.currentTime += values;
});

rewindBtn.addEventListener('click',()=>{
    video.currentTime -= values;
});