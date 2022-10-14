import { Character } from "./Character.js";
import {Spell} from "../Combat/Spell.js";

export class Mage extends Character {
	maxMana = 100;
	mana = 100;
	strength = 35;
	hp = 120;
	image = "upload/image/mage.png";

	constructor(nom) {
		super(nom);
		this.class = ["Mage"];
		this.actions = [
			new Spell("L'âme d'aire", 15, {affect: "hp", power:0.15}),
			new Spell("Pluie d'élues viennent", 20, {affect: "hp", power:0.20}),
			new Spell("Pic Pic de terre", 25, {affect: "hp", power:0.35}),
			new Spell("Embrasse ment", 25, {affect: "hp", power:0.35}),
		];
	}
	attack(ennemi, action) {
		super.attack(ennemi, action);
		this.mana -= action.cost
		if (this.mana + 20 > this.maxMana)
			this.mana = 100;
		else
			this.mana += 20;
	}

	displayAction(spell, container) {
		container.innerHTML = `Vous avez utilisé le sort ${spell.name} qui vous a couté ${spell.cost} point de mana il vous reste ${this.mana} points de mana`;
	}

}