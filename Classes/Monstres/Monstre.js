export class Monstres {
    constructor(name = "GobeHipo", hp = 100, dammage = 50){
        this.name = name;
        this.hp = hp;
        this.dammage = dammage;
    }

    attaquer(ennemi){
        ennemi.hp -= this.dammage
        console.log(`GobeHipo lance son attaque Pourrie et inflige ${this.dammage} points de dommage a ${ennemi}`)
    }
}