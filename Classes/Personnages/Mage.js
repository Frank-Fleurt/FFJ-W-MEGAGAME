//import {Aventurier} from "./Aventurier.js";
import { Character } from "./Character.js";

export class Mage extends Character {
	maxMana = 100;
	mana = 20;
	sort = [];
	strength = 35;
	hp = 120;
	image = "upload/image/mage.png";
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
	get_strenght() {
		return this.strength
	}
	get_hp() {
		return this.hp
	}
}