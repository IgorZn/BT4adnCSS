const Bus = require('./classes')
let b = new Bus('Igor')

b.foo(); // foo
b.bar(); // bar
b.baz(); // baz
b.showTitle(); // title
console.log(b)