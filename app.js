const advice=document.querySelector('#advice')
const advbt=document.querySelector('#bt')
const searchBtn=document.querySelector('#searchBtn')
const form=document.querySelector('#form')

form.addEventListener("submit", function(event){
    event.preventDefault(); 
  })

searchBtn.addEventListener('click', () =>{
    const searchField=document.getElementById('navBarSearchForm');
    console.log(searchField.value);
    searchAdvice(searchField.value);
})

advbt.addEventListener('click', () =>{
    getAdvice();
})

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

window.onload = () => {
    getAdvice();
    const searchField=document.getElementById('navBarSearchForm');
    searchField.onkeyup = (event) =>{
         searchAdvice(searchField.value);
     }
}

function renderResults(res) {
        let s=res.length;
        let y;
        if(s==0)
        {
        console.log("Nothing entered");
        }
        else{
        y=Math.floor(Math.random() * s);
        const element = res[y];
        console.log(element)
        advice.innerHTML=`<h4 style="margin: 0 auto; padding:15%"><em><i>${element}</i></e></h4>`    ;
        }
}

function searchAdvice(query){
    const url=`https://api.adviceslip.com/advice/search/${query}`;
    fetch(url)
    .then(response => response.json())
    .then((adviceData) =>{
        const res=adviceData.slips.map(el => el.advice);
    renderResults(res);
}).catch(error =>{
    console.log(error);
})
}

