import { Aventurier } from "./Classes/Personnages/Aventurier.js";
import { Mage } from "./Classes/Personnages/Mage.js";
import {play, displayWelcome} from "./Partials/methodes.js";

// import {Character} from "./Classes/Personnages/Character.js";
// import {Aventurier} from "./Classes/Personnages/Aventurier.js";
// import { Guerrier } from "./Classes/Personnages/Guerrier.js";
// import { Mage } from "./Classes/Personnages/Mage.js";
// import { Paladin } from "./Classes/Personnages/Paladin.js";

displayWelcome();


document.querySelector("#aventurier").addEventListener("click",()=>{
    play(new Aventurier())
    // faire apparaitre la div cacher
    document.querySelector("sectionCArd").removeAttr(hidden)
    // supprimer les boutons
})
document.querySelector("#_2")
document.querySelector("#_3")
document.querySelector("#_4")