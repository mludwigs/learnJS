function Human() {

}

Human.prototype = {
  legs: 2,
  talk: function() {
    console.log("Hello, world")
  }
}

function Soldier() {

}

Soldier.prototype = new Human();

Soldier.prototype = {

}

