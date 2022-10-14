import { Aventurier } from "./Classes/Personnages/Aventurier.js";
import { Guerrier } from "./Classes/Personnages/Guerrier.js";
import { Mage } from "./Classes/Personnages/Mage.js";
import { Paladin } from "./Classes/Personnages/Paladin.js";
import {play, displayWelcome} from "./Partials/methodes.js";

// import {Character} from "./Classes/Personnages/Character.js";
// import {Aventurier} from "./Classes/Personnages/Aventurier.js";
// import { Guerrier } from "./Classes/Personnages/Guerrier.js";
// import { Mage } from "./Classes/Personnages/Mage.js";
// import { Paladin } from "./Classes/Personnages/Paladin.js";

displayWelcome();
function hideButtonsChoice() {
    let buttons = document.querySelectorAll(".choice_button");
    for (const button of buttons) {
        button.setAttribute("hidden","")
    }
}

document.querySelector("#aventurier").addEventListener("click",()=>{
    play(new Aventurier())
    // faire apparaitre la div cacher

    // supprimer les boutons
    hideButtonsChoice()
})

document.querySelector("#guerrier").addEventListener("click",()=>{
    play(new Guerrier())
    // faire apparaitre la div cacher

    // supprimer les boutons
    hideButtonsChoice()
})

document.querySelector("#mage").addEventListener("click",()=>{
    play(new Mage())
    // faire apparaitre la div cacher

    // supprimer les boutons
    hideButtonsChoice()
})

document.querySelector("#paladin").addEventListener("click",()=>{
    play(new Paladin())
    // faire apparaitre la div cacher

    // supprimer les boutons
    hideButtonsChoice()
})
