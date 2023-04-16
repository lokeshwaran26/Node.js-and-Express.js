const EventEmitter =require('events');

const customEmitter = new EventEmitter;

customEmitter.on("response", (name, id)=>{
    console.log(`Data recieved Name : ${name} with the id : ${id}`);
})

customEmitter.emit("response", "lokesh", 19);