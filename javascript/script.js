var playbutton = document.getElementById("play");
var video = document.getElementById("video");


playbutton.addEventListener("click",(e)=>{
    // alert("Video will now play");
    let isPlaying = false;
    if(!isPlaying && video.paused){
        video.play();
    }else if(!isPlaying && video.play){
        video.pause();
        // isPlaying = false;
    }
    
});