const alumno = {
    id: 1,
    nombre: "roman",
    apellido: "maydana"
}

const generateAleatrio = ()=>{
    return Math.trunc(Math.random()*10);
}

const Index = () =>(
    <div>
        <h1>Titulo</h1>
        <hr/>
        <p>Contenido del titulo, codigo jsx</p>
        <p>Calculando 2018 + 1 = {2018 + 1}</p>
        <p>Alumno : {alumno.nombre} {alumno.apellido}</p>
        <p>Numero de la suerte : {generateAleatrio()}</p>
        <p>La Hora es: {new Date().toLocaleTimeString()}</p>
    </div>
);

export default Index;