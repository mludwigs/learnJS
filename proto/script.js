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

var nameChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t', 'u', 'v','w', 'x', 'y', 'z'];

function ClassBuilder(array) {
  this.nameBuilder = array;
}

ClassBuilder.prototype = {

  randomName: function () {
    var nameLetters = [],
        number = Math.floor(Math.random() * 10) + 3,
        name,
        i;

    for (i = 0; i < number; i++) {
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
    }

    return clas;
  },

  objBuild: function () {
    var soldiers = {},
        obj = this.randomClass(),
        name,
        i;

    for (i = 0; i < obj.length; i++) {
      name = this.randomName();
      soldiers[obj.name] = obj[i];
    }

    return soldiers;
  },

  arrayBuild: function () {
    var soldiers = [],
        arrRanClass = this.randomClass(),
        i;

    for (i = 0; i < arrRanClass.length; i++) {
      soldiers.push([arrRanClass[i].name, arrRanClass[i]]);
    }

    return soldiers;
  }

};

var classs = new ClassBuilder(nameChar);

// Used for the random array
console.log(classs.arrayBuild());
// Used for the random object with key value pairs
//console.log(classs.randomClass());
module.exports = {

  Riflman: Rifleman

};