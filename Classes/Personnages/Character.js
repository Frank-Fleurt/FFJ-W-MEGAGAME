export class Character {
	strength = 10;
	hp = 100;
	class = ["NPC"]
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

	attack(ennemi){
        ennemi.hp -= this.strength
        console.log(`${this.nom} lance son attaque de fou et inflige ${this.dammage} points de dommage a ${ennemi}`)
    }
}