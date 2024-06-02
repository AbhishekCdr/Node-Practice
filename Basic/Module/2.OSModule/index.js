const os = require("node:os");

const user = os.userInfo();

console.log(user);

const nameOfOS = os.type();

console.log(nameOfOS);

const noOfCPU = os.cpus();

// console.log(noOfCPU);

const totalMemory = os.totalmem();

console.log(totalMemory);

const platform = os.platform();

console.log(platform);

//Refer for More: https://www.w3schools.com/nodejs/ref_os.asp
