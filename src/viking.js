// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let saxonVictim = Math.floor(Math.random() * (this.saxonArmy.length));
    let damageResult = this.saxonArmy[saxonVictim].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].attack());
    if(this.saxonArmy[saxonVictim].health <= 0) {
      this.saxonArmy.splice(saxonVictim);
    }
    return damageResult;
  }
  
  saxonAttack() {
    let vikingVictim = Math.floor(Math.random() * (this.vikingArmy.length));
    let damageResult = this.vikingArmy[vikingVictim].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].attack());
    if(this.vikingArmy[vikingVictim].health <= 0) {
      this.vikingArmy.splice(vikingVictim);
    }
    return damageResult;
  }

  showStatus() {
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else {
      return "Saxons have fought for their lives and survived another day...";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}