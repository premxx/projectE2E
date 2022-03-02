
let person = {

    firstName: 'Prem',
    lastName: 'Anand',
    age: 26,
    fullname: function()
    {
        console.log(this.firstName + this.lastName);
    }

}
person.fullname();

