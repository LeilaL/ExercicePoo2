// var constructeur = {
//   name: "Xena",
//   attack: 7,
//   defense: 8,
//   health: 10,
//   combat : function() {
//
//   }
// }


function person(name, attack, defense, health) {
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
console.log("Vie Xena" + ":" + this.combat);
console.log("Vie Alti" + ":" + this.combat);
