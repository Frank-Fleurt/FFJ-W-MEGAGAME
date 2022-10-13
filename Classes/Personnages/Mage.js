import {Aventurier} from "./Aventurier.js";

export class Mage extends Aventurier {
	maxMana = 100;
	mana = 100;
	sort = [];
	strength = 35;
	hp = 120;
	constructor(nom) {
		super(nom);
		this.class = ["Mage"]
	}

	decrire() {
		return `${super.decrire()} et ${this.mana} points de mana`
	}
	get_maxMana() {
		return this.maxMana
	} 
	get_mana() {
		return this.mana
	} 
	get_sort() {
		return this.sort
	}
	get_strength() {
		return this.strength
	}
	get_hp() {
		return this.hp
	}
}