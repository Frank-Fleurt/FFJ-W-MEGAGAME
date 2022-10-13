import guess from 'prompt-sync';
import {Aventurier} from "../Classes/Personnages/Aventurier.js";
import {Guerrier} from "../Classes/Personnages/Guerrier.js";
import {Mage} from "../Classes/Personnages/Mage.js";
import {Paladin} from "../Classes/Personnages/Paladin.js";
import {Monstres} from "../Classes/Monstres/Monstre.js";
let prompt = guess({sigint: true},);

export function play() {
	let character = classChoice();
	while (character.hp > 1) {
		playRound(character);
	}
}

function classChoice() {
	let choices = prettyClasses();
	Object.keys(choices).forEach(key => {
		console.log(`[${key}] ${choices[key].class[0]}`)
	})
	console.log(Object.keys(choices).length)
	let choice = prompt("Veuillez selectionner votre personnage parmis le choix au dessus : ")
	while (!(parseInt(choice) >= 0 && parseInt(choice) < Object.keys(choices).length)){
		console.log(`${parseInt(choice)} n'est pas un choix valide`)
		choice = prompt("Veuillez selectionner votre personnage parmis le choix au dessus : ")
	}
	return choices[choice]
}

function prettyClasses() {

	return {"0": new Guerrier("Gengis Khan"), "1": new Paladin("Galahd"),"2": new Aventurier("Mike Horn"), "3": new Mage("Ostanes")}
}

function playRound(character) {
	let moovs = {1: "Attaquer", 2: "Ne rien faire"}
	let monster = new Monstres()
	displayMoovs(moovs);
	let choice = prompt("Que voulez vous faire ?")
	if (choice === 1) {
		monster.display;
		monster.attack();
		character.attack();
	}else
	{
		monster.attack();
	}
}

function displayMoovs(moovs) {
	console.log("Actions disponibles")
	Object.keys(moovs).forEach(key => {
		console.log(`[${key}] ${moovs[key]}`)
	})
}