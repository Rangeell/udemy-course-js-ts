const { ips } = require('../base');
console.log(ips);

/*
Ranges:
    250 - 255 -> 25[0-5]
    200 - 249 -> 2[0-4]\d
    100 - 199 -> 1\d{2}
    10 - 99 -> [1-9]\d
    0 - 9 -> \d]
*/
const ipRegExp = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;

console.log(ips.match(ipRegExp));