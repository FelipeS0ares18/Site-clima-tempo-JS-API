const chaveapi = "f934ee4017d4cf1fcd0c0ab017b5b007"; 

const cidadeinput = document.querySelector("#cidade-input");
const buscabtn = document.querySelector("#busca");


const elementocidade = document.querySelector("#cidade");
const elementotemp = document.querySelector("#temperatura span");
const elementodesc = document.querySelector("#descricao");
const elementoclimaicon = document.querySelector("#clima-icone");
const elementopais = document.querySelector("#pais");
const elementoumidade = document.querySelector("#humidity span");
const elementovento = document.querySelector("#vento span");


const getclimaData = async (cidade) =>{
const apiclimalink = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chaveapi}&lang=pt_br`;

 const res = await fetch(apiclimalink);
 const data = await res.json();

return data
};


const mostrarcondicoes = async (cidade) => {

   const data = await getclimaData(cidade);

   elementocidade.innerText = data.name;
   elementotemp.innerText = parseInt(data.main.temp);
   elementodesc.innerText = data.weather[0].description;
   elementoclimaicon.setAttribute(
     "src",
     `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
   );
     
    
     elementoumidade.innerText = `${data.main.humidity}%`;
  elementovento.innerText = `${data.wind.speed}km/h`;

};

buscabtn.addEventListener("click", (e) => {
e.preventDefault();

const cidade = cidadeinput.value;

mostrarcondicoes(cidade);

});

