function Human() {

  this.legs = 2;

}

// Solider Class
function Soldier(name) {
  this.name = name;
  this.type = "soldier"
}

Soldier.prototype = new Human();

Soldier.prototype = {
  gun: '',

  shoot: function () {
   if (this.type === "soldier") {
     console.log('bang');
   } else if (this.type === "gunner") {
     console.log('Rapid fire bang bang');
   } else {
     console.log(this.type);
   }
  }
};

// Gunner Class
function Gunner(name) {
  this.type = "gunner";
}

Gunner.prototype = new Soldier();

Gunner.prototype = {
  gun: 'Machine Gun'
};

var soldier = new Soldier('matt');
var gunner = new Gunner('bill');

soldier.shoot();
console.log(gunner.name);

