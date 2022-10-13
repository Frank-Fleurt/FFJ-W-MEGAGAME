import {Character} from "./Character.js";

export class Aventurier extends Character {
	#rage = 50;
	#maxRage = 100;
	#strenght = 35;
	#hp = 100;
	constructor(nom) {
		super(nom);
		this.class = ["Aventurier"];
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