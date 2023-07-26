// ! note to self, if you can't figure out why you can't get to something in an array/ object, use console.log and add a "phrase" or look at where the brackets and {} are.

/* 
?Object Methods
* functions which work on a particular object type
* have access to the global scope
* require "this" keyword to have access to the object scope
* javascript is object oriented, therefore we must define the object
* "this" is a keyword that recognizes a scope of an object.
* arrow functions do not bind to this or super
*/

let dog = {
    name: "Pierre Gassy",
    color: "brindle",
    sex: "male",
    breed: "french bulldog",

    speak(owner) {
        return `${this.name} says woof and belongs to ${owner}`
    },

    sit: function(){
        return "sat down"
    },
    beQuiet: () => {
        return `${this.name} is now quiet`
    }
}

console.log(dog.speak("Steve"));
console.log(dog.sit());
console.log(dog.beQuiet()); // shows as undefined because arrow functions do not bind to this

let toDo = {
    today: [],
    tomorrow: [],
    urgent: [],

    addToday (item) {
        return this.today.push(item)
    },
    addTomorrow (item) {
        return this.tomorrow.push(item)
    },
    addUrgent (item) {
        return this.urgent.push(item)
    },
    removeToday (item) {
        this.today = this.today.filter(i => i !== item)
    },
    clearAll () {
        this.today = [];
        this.tomorrow = [];
        this.urgent = [];
    }
}

toDo.addToday("get Milk");
toDo.addToday("get new computer")
toDo.removeToday("get Milk")
toDo.addTomorrow("get Cookies")
toDo.clearAll()
console.log(toDo);


// ? optional chaining (prevents breaks in code when digging deeper into arrays/objects when information doesn't exist.)
// *will "short circut" error into an undefined
let optChainingSample = {
    name: "John",
    dog: {
        name: "Brutus"
    },

    displayName() {
        return `The name is ${this.name}`
    }
}

// console.log(optChainingSample.cat.name); // Type Error: cannot read properties of undefined
console.log(optChainingSample.cat?.name); // returns undefined instead of breaking

console.log(optChainingSample.displayName());

// console.log(optChainingSample.displayDog()); // type error
console.log(optChainingSample.displayDog?.()) // returns undefined instead of breaking