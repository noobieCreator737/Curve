var playbutton = document.getElementById("play");
let forwardBtn = document.getElementById("forward");
let rewindBtn = document.getElementById("rewind");
let title = document.getElementById("title");
var video = document.getElementById("video");
const forwardSeq = document.getElementById("forwardSeq");
const values = 10;

const icon = document.createElement('i');


icon.src = "media/image/Pause.svg";

playbutton.innerHTML = `<i class="fa-solid fa-play"></i>`;
playbutton.style.color ="#3CB371";
playbutton.addEventListener("click",(e)=>{
    // alert("Video will now play");
    let isPlaying = false;
    if(!isPlaying && video.paused){
        // playbutton.style.backgroundImage ="url('media/image/Pause.svg')";
        // playbutton.style.backgroundSize ="20px";
        // playbutton.style.backgroundSize = "contain";
        // playbutton.style.backgroundRepeat = "no-repeat";
        // playbutton.style.backgroundPosition = "cover";
        // playbutton.style.width = "20px"; 
        // playbutton.style.height = "20px";
        // playbutton.style.color ="white";
        // playbutton.style.padding = "0.5rem";
        playbutton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        
        playbutton.style.color ="#CD5C5C";
        video.play();
    }else if(!isPlaying && video.play){
        playbutton.innerHTML = `<i class="fa-solid fa-play"></i>`;
        playbutton.style.color ="#3CB371";
        video.pause();
        // isPlaying = false;
    }
    
});

forwardBtn.addEventListener('click',()=>{
    video.currentTime += values;
    
    // const styeCheck = getComputedStyle();
    if(styleCheckFunction().check(forwardSeq) === "flex"){
        alert("Hello forward sequence is active")
    }

    forwardSeq.style.display = "flex";
});

rewindBtn.addEventListener('click',()=>{
    video.currentTime -= values;
});

function styleCheckFunction(){
    const value = null;
    let check = window.getComputedStyle(value).display;
}

function videoFileName(){
    let videoSource = video.currentSrc;
    let videoExt = videoSource.split("/").pop();
    let videoName = videoExt.substring(0, videoExt.lastIndexOf('.'));
    const videoNm = decodeURIComponent(videoName);
    title.innerText = videoNm;
}

function clipSkip(){
    forwardSeq.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
}



clipSkip();

videoFileName();
