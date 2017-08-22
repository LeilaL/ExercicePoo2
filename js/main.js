// var constructeur = {
//   name: "Xena",
//   attack: 7,
//   defense: 8,
//   health: 10,
//   combat : function() {
//
//   }
// }


function guerrier(name, attack, defense, health) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.combat = function(attaquer) {
      this.health -=attaquer.attack
console.log("Il reste à" + " " + this.name + " " + this.health + " points de santé");
    };

}
var firstWarrior = new guerrier("Xena", 7, 8, 100);
var secondWarrior = new guerrier("Alti", 6, 7, 100);

firstWarrior.combat(secondWarrior);
secondWarrior.combat(firstWarrior);

// for (let i=0; i <  ; i++) {
// } CREER LOOP POUR GUERRIERS SATTAQUENT CHACUN LEUR TOUR  

function personnage(name, attack, defense, health, mana) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.mana = mana;
    this.soin = function(soigner) {

    };
  }
  var magicien = new personnage("Him", 5, 6, 10, 30);
