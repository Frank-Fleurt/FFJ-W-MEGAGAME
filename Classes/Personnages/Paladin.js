import {Aventurier} from "./Aventurier.js";

export class Paladin extends Aventurier {
	constructor(nom) {
		super(nom);
		this.class = ["Paladin"]

	}

	decrire() {
		return `${super.decrire()} et ${this.vertue} points de vertue`
	}
}