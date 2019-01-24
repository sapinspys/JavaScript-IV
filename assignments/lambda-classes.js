// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(wiseAttributes) {
      super(wiseAttributes);
      this.specialty = wiseAttributes.specialty;
      this.favLanguage = wiseAttributes.favLanguage;
      this.catchPhrase = wiseAttributes.catchPhrase;
    }

    demo(subject) {
      console.log(`Today we are learning about ${subject}.`)
    }

    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}!`)
    }
  }

class Student extends Person {
    constructor(learningAttributes) {
        super(learningAttributes);
        this.previousBackground = learningAttributes.previousBackground;
        this.favSubjects = learningAttributes.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
      super(pmAttributes);
      this.gradClassName = pmAttributes.gradClassName;
      this.favInstructor = pmAttributes.favInstructor;
    }

    debugsCode(student,subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!.​​​​​`);
    }
  }

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies!`
});

const pebbles = new Student({
    name: 'Pebbles',
    location: 'Bedrock',
    age: 7,
    gender: 'Female',
    previousBackground: 'Python',
    favSubjects: ['Data Analytics', 'Python', 'IoT']
});

const wilma = new ProjectManager({
    name: 'Wilma',
    location: 'Bedrock',
    age: 35,
    gender: 'Female',
    favLanguage: 'SQL',
    specialty: 'Back-End',
    catchPhrase: `Keep your hubby happy.`,
    gradClassName: `WEB17`,
    favInstructor: 'Josh Knell'
});

console.log(fred);
console.log(pebbles);
console.log(wilma);
pebbles.speak();
fred.demo('JavaScript II');
fred.grade(pebbles, 'JavaScript');
pebbles.listsSubjects();
pebbles.PRAssignment('Advanced CSS');
pebbles.sprintChallenge('JavaScript');
wilma.debugsCode(pebbles,'JavaScript III')
wilma.demo('JavaScript III')
wilma.standUp('WEB17')