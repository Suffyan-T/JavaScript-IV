// CODE here for your Lambda Classes
class Person {
    constructor(user){
        this.name = user.name;
        this.age = user.age;
        this.location = user.location;
        this.gender = user.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}