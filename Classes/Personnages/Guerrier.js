import {Aventurier} from "./Aventurier.js";

export class Guerrier extends Aventurier {
	#rage = 0;
	#maxRage = 100;
	#strenght = 30;
	constructor(nom) {
		super(nom);
		this.class = ["Guerrier"]
	}

}