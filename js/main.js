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


function personnage(name, attack, defense, health, mana) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.mana = mana;

    this.soin = function(soigner) {
if (mana>10) {
  this.mana-=10;
  this.health+=10;
}
    };

    this.combat = function(attaquer) {
      this.health -=attaquer.attack
console.log("Il reste à" + " " + this.name + " " + this.health + " points de santé");
    };

  }
  var magicien = new personnage("Him", 5, 6, 100, 30);

  var i = 0;

while (firstWarrior.health>0 || secondWarrior.health>0 || magicien.health>0 ) {
  if (i===0) {
  firstWarrior.combat(magicien);
  secondWarrior.combat(magicien);
  magicien.combat(firstWarrior);
  magicien.combat(secondWarrior);
}
else {
  magicien.soin(magicien);
}
i++;
}
