import {Character} from "./Character.js";

export class Aventurier extends Character {
	healing = 0;
	speed = 100;
	strength = 35;
	hp = 100;
	image = "upload/image/aventurierMikeHorn.png";
	constructor(nom) {
		super(nom);
		this.class = ["Aventurier"];
	}
	get_healing() {
		return this.healing
	} 
	get_speed() {
		return this.speed
	} 
	get_strenght() {
		return this.strength
	}
	get_hp() {
		return this.hp
	}

	
}