const advice=document.querySelector('#advice')
advice.innerHTML='do backend first';

fetch('https://api.adviceslip.com/advice').then(response => {
    return console.log(response.json());
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