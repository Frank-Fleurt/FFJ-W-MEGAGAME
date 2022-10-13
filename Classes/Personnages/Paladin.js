import {Aventurier} from "./Aventurier.js";

export class Paladin extends Aventurier {
	speed = 20;
	rage = 50;
	strength = 40;
	hp = 120;
	constructor(nom) {
		super(nom);
		this.class = ["Paladin"]

	}

	get_speed() {
	return this.speed
	} 
	get_rage() {
		return this.rage
	}
	get_strength() {
		return this.strength
	}
	get_hp() {
		return this.hp
	}

}