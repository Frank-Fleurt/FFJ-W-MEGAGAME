class Weapon {
	specialAbility = 1;
	constructor(name, cost, effect) {
		this.name = name;
		this.cost = cost;
		this.affect = effect.affect;
		this.power = effect.power;
		this.specialPower = this.power * 2
	}

	display() {
		return `Vous avez utilisé l'arme ${this.name} qui vous as couté ${this.cost} point d'endurance`
	}

	displaySpecial() {
		return `Vous vous avez utiliser l'attaque spéciale de l'arme augmentant les effet par 2 avec la même utilisation d'énergie`
	}
}