// Imports
import * as Anim from './animation.js';

// Variables
var playbutton = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
let rewindBtn = document.getElementById("rewind");
let title = document.getElementById("title");
var video = document.getElementById("video");
export const forwardSeq = document.getElementById("forwardSeq");

const values = 5;

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
    
    
    Anim.animateforward();
});


rewindBtn.addEventListener('click',()=>{
    video.currentTime -= values;
});



// animateforward()

function styleCheckFunction(element,value){
    if(!element) return;
    const check = window.getComputedStyle(element);
    if(check.display.includes(value) ){
        alert("Hello world");
        return;
    }
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


// Commented Codes
// if(styleCheckFunction(forwardSeq).check.display === "flex"){
//         alert("Hello forward sequence is active")
//     }

// console.log( video.currentTime += video.currentTime + values);

