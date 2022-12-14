import {Aventurier} from "../Classes/Personnages/Aventurier.js";
import {Guerrier} from "../Classes/Personnages/Guerrier.js";
import {Mage} from "../Classes/Personnages/Mage.js";
import {Paladin} from "../Classes/Personnages/Paladin.js";
import {Monstres, randomMonster} from "../Classes/Monstres/Monstre.js";

export function play(character) {
  let monster = randomMonster();
  monster.display();

	}
}

function lancerpartieaventurier() {
	play("aventurier")
}

function classChoice() {
	let choices = prettyClasses();
	let message = ""
	Object.keys(choices).forEach(key => {
		message += `[${key}] ${choices[key].class[0]}\n`
	})

	// const a_choice = document.querySelectorAll(".choice")
	// a_choice[0].addEventListener("click",lancerpartiavecaventurier) // aventurier
	// a_choice[1].addEventListener("click") // guerrier
	// a_choice[2] // mage
	// a_choice[3] // paladin


	// a_choice.addEventListener("click", function(){
	// 	const choice_1 = document.getElementById("_1") 
	// 	const choice_2 = document.getElementById("_2")
	// 	const choice_3 = document.getElementById("_3")
	// 	const choice_4 = document.getElementById("_4")

		
	// })
	// let choice = prompt(message + "Veuillez selectionner votre personnage parmis le choix au dessus : ")
	// while (!(parseInt(choice) >= 0 && parseInt(choice) < Object.keys(choices).length)){
		// console.log(`${parseInt(choice)} n'est pas un choix valide`)
		// choice = prompt("Veuillez selectionner votre personnage parmis le choix au dessus : ")
	// }
	// return choices[choice]
}

function prettyClasses() {

	return {"0": new Guerrier("Gengis Khan"), "1": new Paladin("Galahd"),"2": new Aventurier("Mike Horn"), "3": new Mage("Ostanes")}
}

function playRound(character, monster) {
	let moovs = {1: "Attaquer", 2: "Ne rien faire"}
	displayMoovs(moovs);
	// let choice = prompt("Que voulez vous faire ?")
	if (parseInt(choice) === 1) {
		monster.attack(character);
		character.attack(monster);
	} else {
		monster.attack(character);
	}
}

function displayMoovs(moovs) {
	console.log("Actions disponibles")
	Object.keys(moovs).forEach(key => {
		console.log(`[${key}] ${moovs[key]}`)
	})
}

export function displayWelcome(){
    // console.log("???????????????????????????????????????????????????\n???????????????????????????????????????????????????\n???????????????????????????????????????????????????")

console.log('-------------------------------------------------------------------------')                                        
console.log(" /$$  /$$  /$$  /$$$$$$ | $$  /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$ ")
console.log("| $$ | $$ | $$ /$$__  $$| $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$")
console.log("| $$ | $$ | $$| $$$$$$$$| $$| $$      | $$    $$| $$   $$   $$| $$$$$$$$")
console.log("| $$ | $$ | $$| $$_____/| $$| $$      | $$  | $$| $$ | $$ | $$| $$_____/")
console.log("|  $$$$$/$$$$/|  $$$$$$$| $$|  $$$$$$$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$")
console.log("\_____/\___/  \_______/|__/ \_______/ \______/ |__/ |__/ |__/ \_______/")
console.log("")
console.log("")
console.log(" /$$      /$$ /$$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$  /$$      /$$ /$$$$$$$$")
console.log("| $$$    /$$$| $$_____/ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$| $$$    /$$$| $$_____/")
console.log("| $$$$  /$$$$| $$      | $$   __/| $$    $$| $$   __/| $$    $$| $$$$  /$$$$| $$      ")
console.log("| $$ $$/$$ $$| $$$$$   | $$ /$$$$| $$$$$$$$| $$ /$$$$| $$$$$$$$| $$ $$/$$ $$| $$$$$   ")
console.log("| $$  $$$| $$| $$__/   | $$|_  $$| $$__  $$| $$|_  $$| $$__  $$| $$  $$$| $$| $$__/   ")
console.log("| $$  $  | $$| $$      | $$    $$| $$  | $$| $$    $$| $$  | $$| $$   $ | $$| $$      ")
console.log("| $$ /   | $$| $$$$$$$$|  $$$$$$/| $$  | $$|  $$$$$$/| $$  | $$| $$  /  | $$| $$$$$$$$")
console.log("|__/     |__/|________/ \______/ |__/  |__/ \______/ |__/  |__/|__/     |__/|________/")
console.log('-------------------------------------------------------------------------')    
                                                                                
                  
}