import React from 'react'

function PokemonCard({pokemonData}) {
  return (
    <li className='  md:w-[calc(25vw-40px)] md:min-h-[calc((25vw-40px)*1.2)] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-white rounded-[0.2rem] p-4 relative pokemon-card' >
        <figure className='relative w-full flex justify-center  ' >
            <img className=' w-[60%] h-[8vw]' src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
        </figure>
        <h1 className='text-[2vw] font-bold text-center mt-[3vh]' >{pokemonData.name}</h1>
        <div className='flex justify-center items-center mb-[2.5vw] mt-[2vh]' >
          <p className='bg-[#2ecc71] px-3 py-[0.15vh] rounded-lg text-white font-bold capitalize text-[1vw]' >
            {
              pokemonData.types.map((type) => type.type.name).join(', ')
            }
          </p>
        </div>
        <div className="grid grid-cols-3 text-[1vw] justify-center gap-3 mb-5">
        <p className="pokemon-info">
          <span> Height:</span> {pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {pokemonData.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {pokemonData.stats[5].base_stat}
        </p>
      </div>

      <div className="grid grid-cols-3 text-[1vw] justify-center gap-3">
        <div className="pokemon-info">
          <p>{pokemonData.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
      
    </li>
  )
}

export default PokemonCard
