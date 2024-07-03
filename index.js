import { city } from "./city.js";
import {popularcity} from "./popular city.js"


let localities_containerEl = document.querySelector(".localities_container")

let htmlLocalitiesList = city.map((el)=>{
    return `
       <div class="localities_list">
            <div class="localities_card">
                <h3>${el.name}</h3>
                <p>${el.place ? el.place + " places": ""}  </p>
            </div>
            <i class="fa-solid fa-angle-right"></i>
        </div>
          
        ` 
}).join("")

localities_containerEl.innerHTML = htmlLocalitiesList

/// popularcity///
let popularCityHTML = document.getElementById("popularcityId")

let popularCityHTMLLInk = "";

for(let i = 0 ; i <  popularcity.length ; i++){ 
    console.log(popularcity[i])
    popularCityHTMLLInk += `
    <a class="popularcityName" href=${popularcity[i].link}>${popularcity[i].desc}</a>
    
    `
    

}
popularCityHTML.innerHTML = popularCityHTMLLInk;



console.log(popularcity)
