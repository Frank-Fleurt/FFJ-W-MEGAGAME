export class Character {
	#strenght = 10;
	name = name;
	#hp = 100;
	class = ["NPC"]
	constructor(name) {
	}

	getCharacter() {
		return {name: this.name, hp: this.#hp, strenght: this.#strenght, class: this.class[0]};
	}

	displayCharacter() {
		console.log(`----------------[ ${this.name} ]---------------- \n
			Point de vies: ${this.#hp}
		`)
		console.log(``)
	}
}