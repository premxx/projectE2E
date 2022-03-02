
const Person = require('./basics6');

let day = 'sundays and saturdays are holidays';
let value = day.indexOf('day')
let count  = 0;
while(value !== -1)
{
    count++;
    value = day.indexOf('day', value+1);
}

let person = new Person('John', 'Doe');
person.fullname();

