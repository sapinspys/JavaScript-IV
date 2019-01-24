/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  
  GameObject.prototype.destroy = function () {;
    return `${this.name} was removed from the game.`
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  function CharacterStats(charAttributes) {
    // Connect this keyword to GameObject:
    GameObject.call(this, charAttributes); 
    this.healthPoints = charAttributes.healthPoints;
    this.name = charAttributes.name;
  }
  // Set prototype inheritance (inherit destroy()) to GameObject:
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  // Create CharacterStats prototype method:
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`;
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  function Humanoid(humanAtrributes) {
    CharacterStats.call(this, humanAtrributes);
    this.team = humanAtrributes.team;
    this.weapons = humanAtrributes.weapons;
    this.language = humanAtrributes.language;
  }
  
  Humanoid.prototype = Object.create(GameObject.prototype);
  Humanoid.prototype = Object.create(CharacterStats.prototype);
   
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function. 
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    function Villain(evilAttributes) {
      Humanoid.call(this, evilAttributes);
    }
  
    Villain.prototype = Object.create(Humanoid.prototype)
  
    Villain.prototype.fireball = function(otherObject) {
      console.log(`${this.name} launched a scorching hot fireball. Watch out ${otherObject.name}!`);
      otherObject.healthPoints -= 3;
      if (otherObject.healthPoints > 0) {
        return `${otherObject.name} barely escaped and suffered 3 dmg points. New health: ${otherObject.healthPoints}`;
      } else {
        return otherObject.destroy();
      }
    }
  
    function Hero(pureAttributes) {
      Humanoid.call(this, pureAttributes);
    }
  
    Hero.prototype = Object.create(Humanoid.prototype)
  
    Hero.prototype.entFlood = function(otherObject) {
      console.log(`${this.name} and Merry direct more ents to enter the area. Massive damage is on the way!`);
      otherObject.healthPoints -= 25;
      if (otherObject.healthPoints > 0) {
        return `${otherObject.name} retreats further and ${otherObject.team} suffers major casualties. New health: ${otherObject.healthPoints}`;
      } else {
        return otherObject.destroy();
      }
    }
  
    const evilWizard1 = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 1,
        height: 5,
      },
      healthPoints: 100,
      name: 'Saruman',
      team: 'Isengard',
      weapons: [
        'Staff of Power',
      ],
      language: 'Black Speech',
    });
  
    const hobbit1 = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Pippin',
      team: 'The Shire',
      weapons: [
        `Troll's Bane`, 'Ents'
      ],
      language: 'Common Tongue',
    });
  
  console.log(evilWizard1.name);
  console.log(hobbit1.name);
  console.log(evilWizard1.fireball(hobbit1))
  console.log(hobbit1.entFlood(evilWizard1))
  console.log(evilWizard1.fireball(hobbit1))
  console.log(hobbit1.entFlood(evilWizard1))
  console.log(hobbit1.entFlood(evilWizard1))
  console.log(evilWizard1.fireball(hobbit1))
  console.log(hobbit1.entFlood(evilWizard1))
  
  // Thank you Lambda!