import { useState, useEffect } from 'react'
import axios from 'axios';

const Pokemon = (props) => {
    const [Poke, setPoke] = useState(false);

    useEffect(() => {
        if(Poke){
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => setPoke(response.data.results))}
    }, [Poke]);

    return (
        <div>
            <button disabled={Poke} onClick={()=> setPoke(true) }>Fetch Pokemon</button>
            
            {Poke.length > 0 &&
                Poke.map
                    ((Pokemon, index) =>
                        {
                            return (
                            <div key={index}><ul/>
                            <li>{Pokemon.name}</li></div>)
                        }
                    )
            }
        </div>
    );
}
export default Pokemon;
