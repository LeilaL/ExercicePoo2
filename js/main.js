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
      this.health=attaquer-this.attack;
    };

}
var firstWarrior = new person("Xena", 7, 8, 10);
var secondWarrior = new person("Alti", 6, 7, 10);
console.log("Vie Xena" + ":" + secondWarrior.combat);
console.log("Vie Alti" + ":" + firstWarrior.attaquer);

function personnage(name, attack, defense, health, mana) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.mana = 30;
    this.soin = function(soigner) {
      
    };
  }
  var magicien = new personnage("Xena", 7, 8, 10);
