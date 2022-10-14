class Spell {
	specialAbility = 1;
	constructor(name, cost, effect) {
		this.name = name;
		this.cost = cost;
		this.affect = effect.affect;
		this.power = effect.power;
		this.specialPower = this.power * 2
	}

	display() {
		return `Vous avez utilisé le sort ${this.name} qui vous as couté ${this.cost} point de mana`
	}

	displaySpecial() {
		return `Vous vous avez utiliser l'attaque spéciale de du sort augmentant les effet par 2 avec la même utilisation d'énergie`
	}
}