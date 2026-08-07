const { cpfs } = require('../base');
console.log(cpfs);

const cpfRegExp = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g;
const cpfRegExp2 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const cpfRegExp3 = /(\d{3}\.){2}\d{3}-\d{2}/g;

console.log(cpfs.match(cpfRegExp));
console.log(cpfs.match(cpfRegExp2));
console.log(cpfs.match(cpfRegExp3));
