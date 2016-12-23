var names = ['Ali', 'Shafiq', 'Touq'];

// names.forEach(function (name) {
//   console.log('forEach', name)
// });
//
// names.forEach((name) => {
//   console.log('arrow', name)
// });
//
// names.forEach( (name) => console.log(name) );

// var returnMe = (name) => name + '!';
// console.log(returnMe('Shafiq'));

// var p = {
//   name: 'Shafiq',
//   greet: function(){
//     names.forEach( (name) => console.log(this.name + ' says hi to ' + name) );
//   }
// };
//
// p.greet();

//Challenge Area

// function add (a, b){
//   return a+b;
// }

//addStatement
var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(4,7));

//addExp
var addExp = (a,b) => a+b;
console.log(addExp(2,3));

// console.log(add(1,2));
