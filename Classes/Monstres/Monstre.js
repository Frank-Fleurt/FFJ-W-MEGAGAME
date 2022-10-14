export class Monstres {
    constructor(name ,hp , dammage ){
        this.name = name;
        this.hp = hp;
        this.dammage = dammage;
    }

	display() {
        console.log(`Un ${this.name} est apparut avec ${this.hp}♥ et ${this.dammage} point de dégats`)
	}

    attack(ennemi){
        ennemi.hp -= this.dammage
        console.log(`${this.name} lance son attaque Pourrie des pays du nord et inflige ${this.dammage} points de dommage a ${ennemi.name} il lui reste donc ${ennemi.hp}♥`)
    }


}

export function randomMonster() {
	let monstersNames = ["GobeHipo", "Dargus", "Ominto", "Dargelus"]
	let monsters = {
		"GobeHipo": new Monstres('GobeHipo', 100, 5),
		"Dargus": new Monstres('Dargus', 250, 15),
		"Ominto": new Monstres('Ominto', 50, 75),
		"Dargelus": new Monstres('Dargelus', 175, 10)
	}
	let key = Math.floor(Math.random() * monstersNames.length)
	let monster = monstersNames[key]
	return monsters[monster]
}

randomMonster();