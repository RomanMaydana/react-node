factorial = (num) => {
    if(num <= 0) return 1
    else return (num * factorial(num -1))
};
console.log('el factorial de 6 es');
console.log(factorial(6));

const alumno = {
    nombre : 'Marcelo',
    apellido : 'Moscoso',
    func: (num)=> {
        return `hola mundo ${num}`
    }
};
console.log(alumno.nombre);
console.log(`${alumno.nombre} ${alumno.func('i')}`);
const mensaje = () => {return 'plantillad'}
const parametro = '10%';
console.log(`el parametro es ${parametro} de la ${mensaje()}`);

const cursos = ['node', 'angular','react','mongodb','sql'];
console.log(cursos);
cursos.splice(2,0,'postgres');
console.log(cursos);

const eliminado = cursos.splice(3,1);
console.log(`${cursos} elemento eliminado ${eliminado}`);

cursos.push('ms-sqlserver');
console.log(cursos);

const curso = cursos.find(elem => elem === 'mongodb');
if(curso) console.log(`curso encontrado ${curso}`);

for(let i in cursos){
    console.log(cursos[i]);
}
console.log('-------------------- forEach');
cursos.forEach(curso => {
    console.log(curso);
});

console.log('-------------------- map');
cursos.map((curso,index)=>{
    console.log(index,curso);
});

console.log('-------------------- filter');
const cursoSinSql = cursos.filter(
    curso => curso!=='sql'
);
console.log(cursoSinSql);

console.log('-------------------- roles Map');
const roles = new Map([
    ['r1','Usuario'],
    ['r2','Invitado'],
    ['r3','AdminAdministrador'],
    
]);

console.log(roles.get('r2'));
console.log('-------------------- set Map');
const horarios = new Map();
horarios.set('0001',{cursos:'nodejs',horario:'19:00-22:00'});
horarios.set('0002',{cursos:'angular',horario:'07:00-09:00'});
horarios.set('0003',{cursos:'react',horario:'12:00-14:00'});
console.log(horarios.get('0002'));

console.log('-------------------- array');
const arr1 = [1,2,3];
const arr2 = [1,2,3];
console.log([...arr1]);

sum = (x,y,z)=>{
    return x+y+z;
};
console.log(sum(...arr1));