import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from './Results';
import useDropdown from './useDropdown';


const SearchParams = () => {

    const [location, setLocation] = useState('Seatle, WA')
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", " ", breeds);

    const [pets, setPets] = useState([]);
    // animal = label, "dog" = defaultState, ANIMALS = options 
    // (options being the list of objects to choose)

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || [])
    }



    useEffect(() => {
        // pet.breeds("dog").then(console.log, console.error)
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({ breeds }) => {
            const BreedStrings = breeds.map(({ name }) => name);
            setBreeds(BreedStrings)
            console.log(BreedStrings);

        }, console.error);
    }, [animal]);

    // const location = "Seatle, WA";
    console.log(animal, "animal");
    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    requestPets();
                }}>
                <label htmlFor="Location">
                    Location
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={location}
                        placeholder={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button >Submit</button>
            </form>
            <Results pets={pets} />
        </div >
    );
};
export default SearchParams;