
// const { lokesh, lithi}= require('./4-names')
// const sayHi  = require('./5-utils')
// const data = require('./6-alternative-flavor')
// const addnum = require('./7-mind-grenade')
// // console.log(data)

// // sayHi("Peter");
// // sayHi(lokesh);
// // sayHi(lithi);

const os = require('os');
const user = os.userInfo();
console.log(user);

console.log(`The System Uptime is ${os.uptime()} secs`)

const currentOS = {
    name : os.type(),
    release : os.release,
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)