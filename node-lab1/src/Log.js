//crear modulo o libreria
const log = {
    info: (info)=>{
        console.log(`info ${info}`);
    },
    warnign: (warnign)=>{
        console.log(`info ${warnign}`);
    },
    error: (error)=>{
        console.log(`info ${error}`);
    },
};

module.exports = log