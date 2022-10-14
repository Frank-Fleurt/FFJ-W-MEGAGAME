export class Character {
	strength = 10;
	hp = 100;
	class = ["NPC"]
	actions = [{name: "test", power: 1.5}];
	constructor(name) {
		this.name = name;
	}

	getCharacter() {
		return {name: this.name, hp: this.hp, strength: this.strength, class: this.class[0]};
	}

	displayCharacter() {
		console.log(`----------------[ ${this.name} ]---------------- \n
			Point de vies: ${this.hp}
		`)
		console.log(``)
	}

	attack(ennemi, action){
		ennemi.hp -= this.strength
		let power = action.power * this.strength
		console.log(`${this.name} lance son attaque Pourrie des pays du nord et inflige ${power} points de dommage a ${ennemi.name} il lui reste donc ${ennemi.hp}♥`)
	}
}