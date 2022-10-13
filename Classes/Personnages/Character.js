export class Character {
	#strenght = 10;
	#hp = 100;
	class = ["NPC"]
	constructor(name) {
		this.name = name;
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