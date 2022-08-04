const { query } = require("express");

const arrayData = [{ id: 1, name: "Karan" }];

module.exports={
    getAll:(callback) => { //(data)=>{ res.send(data)}
        callback(arrayData);
    },
    createNew:(data, callback) => {//3
        let obj = { id: arrayData.length + 1, name: data.name }
        arrayData.push(obj);     
        callback({data:obj,message:"New data added successfully"})
    }
}


function hello(a,callback) {
    callback(a);
}

hello(1,(d)=>{ console.log(d)});





