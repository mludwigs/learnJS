function Human() {

}

// Soldier class
function Soldier(name) {
  this.name = name;
  Human.call(this);
};

// Soldier.prototype = new Human();


// Gunner class
function Gunner(name) {
  Soldier.call(this, name);
}

var g = new Gunner('hello');

console.log(g.name);