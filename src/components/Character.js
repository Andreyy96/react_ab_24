import './Character.css'

// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів

const Character = ({character}) => {
    return (
        <div className='person'>
            <img src={character.image} alt={character.image}/>
            <p>id: {character.id}</p>
            <h4>name: {character.name}</h4>
            <p>species: {character.species}</p>
            <p>gender: {character.gender}</p>
            <p>status: {character.status}</p>
        </div>
    );
};

export {Character};
