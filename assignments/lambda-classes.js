// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
        this.pronoun = options.pronoun
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructOptions) {
        super(instructOptions);
        this.specialty = instructOptions.specialty;
        this.favLanguage = instructOptions.favLanguage;
        this.catchPhrase = instructOptions.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) { //student object, subject string
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    
}

class Student extends Person {
    constructor(studOptions) {
        super(studOptions);
        this.previousBackground = studOptions.previousBackground;
        this.className = studOptions.className;
        this.favSubjects = studOptions.favSubjects; //an array
    }
    listsSubjects() {
        return  `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

}

class ProjectManager extends Instructor {
    constructor(pmOptions) {
        super(pmOptions);
        this.gradClassName = pmOptions.gradClassName;
        this.favInstructor = pmOptions.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const john = new Instructor({
    'name': 'John',
    'age': '32',
    'location': 'San Francisco',
    'gender': 'Male',
    'specialty': 'UI/UX',
    'favLanguage': 'Javascript',
    'catchPhrase': 'Script it right',
    'pronoun': 'his'
});


const jane = new ProjectManager({
    'name': 'Jane',
    'age': '28',
    'location': 'Oakland',
    'gender': 'Female',
    'specialty': 'People Management',
    'favLanguage': 'Python',
    'catchPhrase': 'keep the people happy',
    'gradClassName': 'web19',
    'favInstructor': 'Cool Dude',
    'pronoun': 'her'
});


const tim = new Student({
    'name': 'Tim',
    'age': '21',
    'location': 'Reno',
    'gender': 'Male',
    'previousBackground': 'worked at grocery store',
    'className': 'Web22',
    'favSubjects': ['Science', 'Math', 'English'],
    'pronoun': 'his'
});


