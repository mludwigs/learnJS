function Human() {

}

Human.prototype = {
  legs: 2,

  talk: function() {
    console.log("Hello, world")
  }
}

function Soldier(weapon) {
  this.weapon = weapon
}

Soldier.prototype =  new Human();

Soldier.prototype.guns = {
  rile: ['M16', 'M4'],
  pistol: ['M9', 'M1911'],
  machine_gun: ['M249', 'RPK']
}

Soldier.prototype.speed = function() {
  var speed = 100;

  if (this.weapon === 'rile') {
    speed -= 10;
    return speed;
  } else if (this.weapon === 'machine gun') {
    speed -= 25;
    return speed;
  }
}



var soldier = new Soldier('rile');

console.log(soldier.speed());