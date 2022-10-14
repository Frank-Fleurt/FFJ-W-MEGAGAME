export class Character {
	strength = 10;
	hp = 100;
	class = ["NPC"];
	actions=[];

	constructor(name) {
		this.name = name;
	}


	displayCharacter() {
		console.log(`----------------[ ${this.name} ]---------------- \n
			Point de vies: ${this.hp}
		`)
		console.log(``)
	}


	attack(ennemi, action){
        ennemi.hp -= this.strength
		console.log(`${this.name} lance son attaque Pourrie des pays du nord et inflige ${this.strength} points de dommage a ${ennemi.name} il lui reste donc ${ennemi.hp}♥`)
	}
}