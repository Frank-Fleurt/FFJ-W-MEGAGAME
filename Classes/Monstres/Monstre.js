export class Monstres {
    constructor(name = "GobeHipo", hp = 100, dammage = 5){
        this.name = name;
        this.hp = hp;
        this.dammage = dammage;
    }

	display() {
        console.log(`Un GobeHipo est apparut avec ${this.hp}♥ et ${this.dammage} point de dégats`)
	}

    attack(ennemi){
	    console.log(ennemi)
        ennemi.hp -= this.dammage
        console.log(`GobeHipo lance son attaque Pourrie des pays du nord et inflige ${this.dammage} points de dommage a ${ennemi}`)
    }
}