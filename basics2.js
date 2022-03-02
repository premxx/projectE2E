var marks = Array(6)
var marks = new Array( 35, 56, 48, 86, 78, 95 );


var marks = [ 35, 56, 004, 86, 78, 95 ];
marks.sort((a,b) => b-a)
console.log(marks);

let even = marks.filter(final => final%2 == 0).map(final => final/4).reduce((sum, val)=> sum+val, 0);
// console.log(even);


// var even = [ ];
// for(let i=0; i<marks.length; i++)
// {
//     if(marks[i]%2 == 1)
//     even.push(marks[i]);
// }
// console.log(even);

// let total = marks.reduce((sum, final)=> sum+final, 0);
// console.log(total);

// var scores = [ 20, 15, 36, 48, 55 ];


var fruits = [ "orange", "apple", "banana", "mango", "pomagranate" ];
// console.log(fruits.reverse());