//import {Aventurier} from "./Aventurier.js";
import { Character } from "./Character.js";
import {Weapon} from "../Combat/Weapon.js";

export class Paladin extends Character {
	defense = 20;
	faith = 0;
	maxFaith = 100;
	strength = 40;
	hp = 120;
	image = "upload/image/Paladin.jpg";
	maxStamina = 100
	stamina = 100


	constructor(nom) {
		super(nom);
		this.class = ["Paladin"]
		this.actions = [
			new Weapon("Bouclier de la justice", 20, {affect: "hp", power:0.35}),
			new Weapon("Ache de barbar", 25, {affect: "hp", power:0.4}),
			new Weapon("Épée à deux mains", 35, {affect: "hp", power:0.5}),
		];
	}

	attack(ennemi, action) {
		super.attack(ennemi, action);
		if (this.stamina + 20 > this.maxStamina)
			this.stamina = 100;
		else
			this.stamina += 20;
	}

	displayAction(weapon, container) {
		container.innerHTML = ` <div> Vous avez utilisé l'arme ${weapon.name} qui vous a couté ${weapon.cost} point de mana il vous reste ${this.stamina} points d'endurance </div>`;
	}

}