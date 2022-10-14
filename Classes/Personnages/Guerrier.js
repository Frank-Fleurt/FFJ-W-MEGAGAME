import { Character } from "./Character.js";

export class Guerrier extends Character {
	rage = 20;
	maxRage = 100;
	strength = 40;
	hp = 150;
	image = "upload/image/Guerrier.png";
	constructor(nom) {
		super(nom);
		this.class = ["Guerrier"]
	}

	get_rage() {
		return this.rage
	} 
	get_maxRage() {
		return this.maxRage
	} 
	get_strenght() {
		return this.strength
	}
	get_hp() {
		return this.hp
	}
}