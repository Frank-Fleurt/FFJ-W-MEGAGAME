class Spell {
	constructor(name, cost, effect, power, unlockLvl) {
		this.name = name;
		this.cost = cost;
		this.effect = effect;
		this.power = power;
		this.unlockLvl = unlockLvl;
	}

	getSpell() {
		return {cost: this.cost, effect: this.effect, power: this.power}
	}
}