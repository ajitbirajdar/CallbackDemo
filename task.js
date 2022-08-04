

let hello=(a,callback) =>{
    callback(a,a);
}

hello(12,(d,t)=>{ console.log(d+t)});

console.log(typeof(hello));