import React, { useState} from 'react';
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA") 
    const [animal, setAnimal] = useState("dog")

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" 
                    value={location} 
                    placeholder="Location" 
                    onChange={event => setLocation(event.target.value)} />

                </label> 
                <label htmlFor="animal">
                    Animal 
                    <select 
                        id="animal"
                        value={animal}
                        onChange={event => setAnimal(event.target.value)}
                        onBlur={event => setAnimal(event.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => {
                            return <option value={animal}>{animal}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default SearchParams; 