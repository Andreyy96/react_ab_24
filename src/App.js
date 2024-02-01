import {Character} from "./components/Character.js"
import "./App.css"

const App = () => {
    const characters = [
        {
            id: 7,
            name: "Abradolf Lincler",
            status: "unknown",
            species: "Human",
            type: "Genetic experiment",
            gender: "Male",
            origin: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            location: {
                name: "Testicle Monster Dimension",
                url: "https://rickandmortyapi.com/api/location/21"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11"
            ],
            url: "https://rickandmortyapi.com/api/character/7",
            created: "2017-11-04T19:59:20.523Z"
        },
        {
            id: 8,
            name: "Adjudicator Rick",
            status: "Dead",
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Citadel of Ricks",
                url: "https://rickandmortyapi.com/api/location/3"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            episode: ["https://rickandmortyapi.com/api/episode/28"],
            url: "https://rickandmortyapi.com/api/character/8",
            created: "2017-11-04T20:03:34.737Z"
        },
        {
            id: 81,
            name: "Crocubot",
            status: "Dead",
            species: "Animal",
            type: "Robot-Crocodile hybrid",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Worldender's lair",
                url: "https://rickandmortyapi.com/api/location/4"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/81.jpeg",
            episode: ["https://rickandmortyapi.com/api/episode/25"],
            url: "https://rickandmortyapi.com/api/character/81",
            created: "2017-11-30T14:23:41.053Z"
        },
        {
            id: 109,
            name: "Duck With Muscles",
            status: "Dead",
            species: "Alien",
            type: "Parasite",
            gender: "Male",
            origin: {
                name: "unknown",
                "url": ""
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/109.jpeg",
            episode: ["https://rickandmortyapi.com/api/episode/15"],
            url: "https://rickandmortyapi.com/api/character/109",
            created: "2017-12-26T13:17:40.686Z"
        },
        {
            id: 409,
            name: "Mr. Sneezy",
            status: "Alive",
            species: "Human",
            type: "Little Human",
            gender: "Male",
            origin: {
                name: "Interdimensional Cable",
                url: "https://rickandmortyapi.com/api/location/6"
            },
            location: {
                name: "Interdimensional Cable",
                url: "https://rickandmortyapi.com/api/location/6"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/409.jpeg",
            episode: ["https://rickandmortyapi.com/api/episode/8"],
            url: "https://rickandmortyapi.com/api/character/409",
            created: "2018-04-15T21:04:09.405Z"
        },
        {
            id: 600,
            name: "Cats Fan",
            status: "Alive",
            species: "Alien",
            type: "Soulless Puppet",
            gender: "Female",
            origin: {
                name: "Story Train",
                url: "https://rickandmortyapi.com/api/location/96"
            },
            location: {
                name: "Story Train",
                url: "https://rickandmortyapi.com/api/location/96"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/600.jpeg",
            episode: ["https://rickandmortyapi.com/api/episode/37"],
            url: "https://rickandmortyapi.com/api/character/600",
            created: "2020-08-06T11:40:42.974Z"
        }
    ]
    return (
        <div className='wrapper'>
            {characters.map(character =><Character character={character} key={character.id}/>)}
        </div>
    );
};

export {App};
