const nombre ='Oscar';
const apellido = 'Ramirez';

const nombreCompleto= `${nombre} ${apellido} ${1+1}`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola '+nombre;
}


 console.log(getSaludo('Oscar'));