

const jokeUrl = 'https://api.chucknorris.io/jokes/random#';

/*
ESTE CODIGO FUNCIONA PERO SE CONVIERTE EN PROMESAS HELL
fetch(jokeUrl).then(resp => {
    //Le decimos a la respuesta que extraiga el body en formato JSON
    //Podemos desestrucutrar el data asi evitat colocar data.id / data.value => ({id, value})
    resp.json().then(({id, value}) =>{
        console.log(id);
    });
});

*/

//PRO TIP SIMPLICAR CODIGO DE ARRIBA

fetch(jokeUrl)
    .then(resp=> resp.json())
    .then(({id, value}) =>{
        console.log(id,value);
     });