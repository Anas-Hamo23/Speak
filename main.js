const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener('click',()=>{
    const utterance = new SpeechSynthesisUtterance(input.value);
    window.speechSynthesis.speak(utterance);
})