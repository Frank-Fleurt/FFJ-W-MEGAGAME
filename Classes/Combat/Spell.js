export class Spell {
	specialAbility = 1;
	constructor(name, cost, effect) {
		this.name = name;
		this.cost = cost;
		this.affect = effect.affect;
		this.power = effect.power;
		this.specialPower = this.power * 2
	}
}