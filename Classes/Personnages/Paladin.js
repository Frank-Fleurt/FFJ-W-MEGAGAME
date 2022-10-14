//import {Aventurier} from "./Aventurier.js";
import { Character } from "./Character.js";

export class Paladin extends Character {
	defense = 20;
	faith = 0;
	maxFaith = 100;
	strength = 40;
	hp = 120;
	image = "upload/image/Paladin.jpg";
	constructor(nom) {
		super(nom);
		this.class = ["Paladin"]

	}

	get_defense() {
	return this.defense
	} 
	get_faith() {
		return this.faith
	}
	get_maxFaith() {
		return this.faith
	}
	get_strenght() {
		return this.strength
	}
	get_hp() {
		return this.hp
	}

}