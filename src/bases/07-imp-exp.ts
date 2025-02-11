import heroum, { dominis, Dominus } from "../data/heroum"

console.log( dominis );

console.log( heroum );


export const obtineHeroPerId = (id:number) => heroum.find( heros => heros.id === id ) ?? {} ;
//Se puede hacer de las dos maneras, esta es de una linea, la otra es para que pueda hacerlo en diferentes lineas
console.log(obtineHeroPerId(300));

const obtineHeroumPerDominus = (dominus: Dominus) => {
    return heroum.filter (heros => heros.dominus === dominus)
}
console.log(obtineHeroumPerDominus('Marvel'));