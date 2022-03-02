module.exports = class Person
{
    name = 'Prem';
    age = 26;

    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullname()
    {
        console.log(this.firstName + this.lastName);
    }

}






