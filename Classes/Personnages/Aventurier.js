import {Personnage} from "../../Cours";

export class Aventurier extends Personnage {
	xp = 0;
	level = 1;
	constructor(nom) {
		super(nom);
		this.class = ["Aventurier"];
	}


}