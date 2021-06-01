const advice=document.querySelector('#advice')
const advbt=document.querySelector('#bt')

advbt.addEventListener('click', () =>{
    getAdvice();
})
window.onload =() =>{
    getAdvice();
}
function getAdvice ()  {
    fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(adviceData =>{
    const adviceObj =adviceData.slip;
    advice.innerHTML=`<h4 style="margin: 0 auto; padding:15%"><em><i>${adviceObj.advice}</i></e></h4>`
}).catch(error =>{
    console.log(error);
})
}
