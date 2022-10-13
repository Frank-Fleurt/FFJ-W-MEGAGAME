import { Character } from "./Character.js";

export class Guerrier extends Character {
	#rage = 20;
	#maxRage = 100;
	#strenght = 40;
	#hp = 150;
	constructor(nom) {
		super(nom);
		this.class = ["Guerrier"]
	}

	get_rage() {
		return this.#rage
	} 
	get_maxRage() {
		return this.#maxRage
	} 
	get_strenght() {
		return this.#strenght
	}
	get_hp() {
		return this.#hp
	}
}