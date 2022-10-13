import {Aventurier} from "./Aventurier.js";

export class Mage extends Aventurier {
	#maxMana = 100;
	#mana = 100;
	#sort = [];
	constructor(nom) {
		super(nom);
		this.class = ["Mage"]
	}

	decrire() {
		return `${super.decrire()} et ${this.mana} points de mana`
	}
}