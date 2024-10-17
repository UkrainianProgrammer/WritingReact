/*
    Given a list of fruits and a search input,
    display a dynamically filtered list as the user types the fruit name
*/

import React from 'react';
import { useState } from 'react';

export const InputQuestion = () => {
    const fruits = [
        "Apple",
        "Apricot",
        "Banana",
        "Blueberry",
        "Cherry",
        "Date",
        "Fig",
    ];

    const [fruitsData, setFruitsData] = useState(fruits);
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    const fruitsDataFiltered = fruitsData.filter((fruit) =>
        fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input type='text' placeholder='Search here' onChange={handleInputChange} />
            {fruitsDataFiltered.map((fruit) => {
                return <p>{fruit}</p>
            })}
        </div>
    );
};

