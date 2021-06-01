const advice=document.querySelector('#advice')

fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(adviceData =>{
    const adviceObj =adviceData.slip;
    advice.innerHTML=`<h4 style="margin: 0 auto; padding:15%"><em><i>${adviceObj.advice}</i></e></h4>`
}).catch(error =>{
    console.log(error);
})
// const axios = require('axios');

// axios.get('https://api.adviceslip.com/advice')
//   .then(function (response) {
//       const adviceObj=response.data.slip;
//       advice.innerHTML=`<h4>${adviceObj.advice}</h4>`
//       console.log(response.data.slip.advice);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })