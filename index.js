// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === 'male') {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}
const cat = new Cat('Whiskers', 'female');
console.log(cat.speak()); // Output: Whiskers says meow!

const dog = new Dog('Buddy', 'male');
console.log(dog.speak()); // Output: Buddy says woof!

const bird1 = new Bird('Polly', 'male');
console.log(bird1.speak()); // Output: It's me! Polly, the parrot!

const bird2 = new Bird('Tweety', 'female');
console.log(bird2.speak()); // Output: Tweety says squawk!
