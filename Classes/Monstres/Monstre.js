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
        console.log(`GobeHipo lance son attaque Pourrie des pays du nord et inflige ${this.dammage} points de dommage a ${ennemi.name}`)
    }
}

let GobeHipo = new Monstres('GobeHipo', 100, 5)
let Dargus = new Monstres('Dargus', 250, 15)
let Ominto = new Monstres('Ominto', 50, 75)
let Dargelus = new Monstres('Dargelus', 175, 10)

export let a_monstres = [GobeHipo, Dargus, Ominto, Dargelus] 