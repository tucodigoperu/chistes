const jokeUrl = 'https://api.chucknorris.io/jokes/random#';

const obtenerChiste = async () =>{

    try {

        const respuesta = await fetch(jokeUrl);

        if(!respuesta.ok) throw 'No se pudo realizar la petición';

        //const chiste = await respuesta.json(); => Esto se puede simplificar
        
        //Requiero solo obtener ciertos valores de mi body

        const {icon_url, id, value} = await respuesta.json();

        return  {
            icon_url, 
            id, 
            value
        };
        
    } catch (error) {

        throw error

    }


}

export{
    obtenerChiste,
}