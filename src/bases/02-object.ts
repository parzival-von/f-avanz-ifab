
export const persona = {
    cognomen: 'Stark',
    aeta: 45,
    ubiHabitat: {
        urbs:'New York',
        zip: 3456,
        lat: 145678,
        lng: 45678
    }
}
//persona.aeta =55; como acceder a la variable

//const persona2 = persona; cambia el apellido en este caso en las dos constantes creadas
const persona2 = {...persona} //no cambia el apellido de persona, hace un duplicado 


persona2.cognomen = 'Parker';

console.log(persona)
console.log(persona2)