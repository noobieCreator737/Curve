import * as MainScript from '../javascript/script.js';

const scriptObject = MainScript;
export function animateforward(){
    scriptObject.forwardSeq.style.display = "flex";
    scriptObject.forwardSeq.animate([
        {transform: 'translateX(0px)', opacity: 1},
        { transform: 'translateX(20px)', opacity: 0.5, offset: 0.5 }, 
  
        { transform: 'translateX(55px)', opacity: 1 }
    ], {
            // Animation settings
            duration: 1000,           // 1 second
            iterations: 1,     // Loop forever
            direction: 'normal',   // Go back and forth
            easing: 'ease-in-out'     // Timing function
    }).onfinish = () => {
        scriptObject.forwardSeq.style.display = "none"; // Automatically hide it when finished
    };
}