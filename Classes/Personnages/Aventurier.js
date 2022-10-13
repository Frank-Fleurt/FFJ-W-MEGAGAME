import {Character} from "./Character.js";

export class Aventurier extends Character {
	xp = 0;
	level = 1;
	constructor(nom) {
		super(nom);
		this.class = ["Aventurier"];
	}


}