const Person = require("./basics6");

class Pet extends Person
{
    constructor(firstName, lastName)
    {
        super(firstName, lastName);
    }
}

let pet = new Pet('tom', 'Jerry');
pet.fullname();

