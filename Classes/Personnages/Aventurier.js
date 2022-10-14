import {Character} from "./Character.js";
import {Weapon} from "../Combat/Weapon.js";

export class Aventurier extends Character {
	healing = 0;
	speed = 100;
	strength = 35;
	hp = 100;
  image = "upload/image/aventurierMikeHorn.png";
  actions = [
    new Weapon("Dague de l'ombre", 10, {affect: "hp", power:0.25}),
		new Weapon("Double dagues", 15, {affect: "hp", power:0.30}),
		new Weapon("Épée courte", 20, {affect: "hp", power:0.4}),
	]
  
	constructor(nom) {
		super(nom);
		this.class = ["Aventurier"];
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