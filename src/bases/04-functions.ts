function salutate2(nomen:string){
    return `Hola ${nomen}`;
} //Pregunta de examen como convertir esta funcion en cfuncion de flecha

const salutate =(nomen:string): string =>`Hola ${nomen}`


//console.log(salutate('Asier'))

const obtieneUsoris = (uid: string) => ({
        uid,
        nomen: 'Tony001'
})

//console.log(obtieneUsoris('XYZ-456'));

const heroum = [
    {
        id: 1,
        nomen: 'Batman'
},
{
    id: 2,
    nomen: 'Superman',
    facultatem: 'Super Fuerza'
}
]

const heros = heroum.find(item => item.id === 2)
console.log(heros?.nomen);