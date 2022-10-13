import {Aventurier} from "./Aventurier.js";

export class Paladin extends Aventurier {
	#speed = 20;
	#rage = 50;
	#strenght = 40;
	#hp = 120;
	constructor(nom) {
		super(nom);
		this.class = ["Paladin"]

	}

	get_speed() {
	return this.#speed
	} 
	get_rage() {
		return this.#rage
	}
	get_strenght() {
		return this.#strenght
	}
	get_hp() {
		return this.#hp
	}

}