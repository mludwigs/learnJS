function Human() {
  this.legs = 2;
}

// Soldier class
function Soldier(name) {
  this.name = name;
  Human.call(this);
}

Soldier.prototype = {
  gun: 'M4',
  shoot: function () {
    console.log('Shooting!');
  }
};

// Soldier.prototype = new Human();

//Soldier.prototype.gun = 'M4';
//
//Soldier.prototype.shoot = function () {
//  console.log('Bang Bang');
//};

// Gunner class
function Gunner(name) {
  Soldier.call(this, name);
}

Gunner.prototype = {
  gun: 'M249',
  shoot: function () {
    console.log(this.name + ' ' + this.gun + ' ' + 'rapid fire!')
  }
};

// Rifleman class
function Rifleman(name) {
  Soldier.call(this, name);
}

Rifleman.prototype = {
  gun: 'M16',
  shoot: function () {
    console.log(this.name + ' ' + this.gun + ' ' + 'three round burst!');
  }
};

// Shotgun class
function Shotgun(name) {
  Soldier.call(this, name);
}

Shotgun.prototype = {
  gun: 'Combat Shoot Gun',
  shoot: function () {
    console.log(this.name + ' ' + this.gun + ' ' + 'Shot gun blast!');
  }
};

/* Doing things!
======================= */

var nameChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];

function ClassBuilder(array) {
  this.nameBuilder = array;
}

ClassBuilder.prototype = {

  randomName: function () {
    var nameLetters = [],
        name,
        i;

    for (i = 0; i < 7; i++) {
      nameLetters.push(this.nameBuilder[Math.floor(this.nameBuilder.length * Math.random())]);
      name = nameLetters.join('');
    }

    return name;
  },

  randomClass: function () {
    var classes = [Rifleman, Gunner, Shotgun],
        clas = [],
        obj = [],
        j,
        i;

    for (i = 0; i < 50; i++) {
      clas.push(new classes[Math.floor(classes.length * Math.random())](this.randomName()));
      for (j = 0; j < clas.length; j++) {
        if (clas[j] instanceof Rifleman) {
          obj.push('Rileman');
        } else if (clas[j] instanceof Gunner) {
          obj.push('Gunner');
        } else if (clas[j] instanceof Shotgun) {
          obj.push('Shotgun')
        } else {
          throw new Error('Invalid type: needs to be object');
        }
      }
    }

    return obj;
  }

};

var classs = new ClassBuilder(nameChar);
console.log(classs.randomClass());