
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greeting(){
		console.log(`Hi my name is ${this.name} and I'm ${this.age} yrs old.`);
	}
}

module.exports = Person;
