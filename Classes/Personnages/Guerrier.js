import { Character } from "./Character.js";
import {Weapon} from "../Combat/Weapon.js";

export class Guerrier extends Character {
	rage = 20;
	maxRage = 100;
	strength = 40;
	hp = 150;
  image = "upload/image/Guerrier.png";

  constructor(nom) {
		super(nom);
		this.class = ["Guerrier"];
		this.actions = [
			new Weapon("Katana", 20, {affect: "hp", power:0.35}),
			new Weapon("Ache de barbar", 25, {affect: "hp", power:0.4}),
			new Weapon("Épée à deux mains", 35, {affect: "hp", power:0.5}),
		];
	}

	attack(ennemi) {
		super.attack(ennemi);
		if (this.stamina + 20 > this.maxStamina)
			this.stamina = 100;
		else
			this.stamina += 20;
	}

	displayAction(weapon, container) {
		container.innerHTML = ` <div> Vous avez utilisé l'arme ${weapon.name} qui vous a couté ${weapon.cost} point de mana il vous reste ${this.stamina} points d'endurance </div>`;
	}
}