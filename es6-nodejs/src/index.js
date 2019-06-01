const fs = require('fs');

const paises = JSON.parse(fs.readFileSync('./src/data/paises.json', 'utf8'));

console.log(` numero de registros : ${paises.length}`);

const subAmerica = paises.filter((pais) => { return pais.subregion === 'South America'; });

console.log(` numero de subAmerica : ${subAmerica.length}`);

subAmerica.forEach(pais => { console.log(`${pais.name} - ${pais.population} - capital: ${pais.capital}`); });

let poblaciones = [];

subAmerica.forEach(pais => {
    poblaciones.push(
        {
            nombre: pais.name,
            capital: pais.capital,
            poblacion : pais.population
        }
    );
});

fs.writeFile('./src/data/sub-america.json', JSON.stringify(poblaciones, null, 2), error => {
    if (error) console.log(error); else console.log(` ${new Date().getMilliseconds()} : archivo creado con exito `);
});