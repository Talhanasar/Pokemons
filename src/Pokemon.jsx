import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import "./Loader.css"

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=200";
    const fetchApi = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            const pokemonData = data.results.map(async (currEl) => {
                const res = await fetch(currEl.url);
                const data = await res.json();
                return data;
            })
            const dataResponse = await Promise.all(pokemonData);
            setPokemon(dataResponse);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }

    }
    useEffect(() => {
        fetchApi()
    }, []);

    const searchedData = pokemon.filter((currPokemon) => {
        return currPokemon.name?.toLowerCase().includes(search.toLowerCase());
    });    

    if (loading) {
        return (
            <div className="flex w-full h-[100vh] justify-center items-center">
                <div className="ball"></div>
            </div>
        )
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <>
            <section className='main flex flex-col items-center justify-center' >
                <header className='flex flex-col gap-10 my-10' >
                    <h2 className='text-[6vw] md:text-3xl text-center font-bold' >Let's Catch a Pokémon</h2>
                    <label htmlFor="name" className='text-[4vw] md:text-xl' >Search:
                        <input type="text" name="name" id="name" className='outline-none border-b-2 border-zinc-600 mx-2 px-2' autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </label>
                </header>
                <section className='md:p-5 p-2'>
                    <ul className=' grid grid-cols-2 md:grid-cols-4 gap-5' >
                        {
                            searchedData.map((current) => {
                                return <PokemonCard key={current.id} pokemonData={current} />
                            })
                        }

                    </ul>
                </section>

            </section>
        </>
    )
}

export default Pokemon
