export class Monstres {
    constructor(name = "GobeHipo", hp = 100, dammage = 5){
        this.name = name;
        this.hp = hp;
        this.dammage = dammage;
    }

    attack(ennemi){
        ennemi.hp -= this.dammage
        console.log(`GobeHipo lance son attaque Pourrie des pays du nord et inflige ${this.dammage} points de dommage a ${ennemi}`)
    }
}