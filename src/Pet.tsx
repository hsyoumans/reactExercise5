import { useState } from "react";

interface Pet {
    name: string;
    type: string;
    id: number;
}

function Pets() {
    const petArray = [
        {name: "Suzy", type: "dog", id: 1},
        {name: "Kachina", type: "cat", id: 2},
        {name: "Toak", type: "dog", id: 3},
        {name: "Ralph", type: "dog", id: 4},
        {name: "Pudge", type: "cat", id: 5},
        {name: "Scrappy", type: "cat", id: 6},
        {name: "Bandit", type: "dog", id: 7},
        {name: "Cheena", type: "cat", id: 8},
        {name: "Suzy2", type: "dog", id: 9},
        {name: "Heather", type: "dog", id: 10},
        {name: "Max", type: "dog", id: 11},
        {name: "Remington", type: "dog", id: 12},
        {name: "Coco", type: "dog", id: 13},
        {name: "Pete", type: "chicken", id: 14},
        {name: "Pam", type: "horse", id: 15},
        {name: "PJ", type: "horse", id: 16},
        {name: "Rose", type: "horse", id: 17},
        {name: "McKeever", type: "goat", id: 18}
    ];

    const [pets, setPets] = useState<Pet[]>(petArray);

    function removePet(index:number) {
        setPets(prevPets => [...prevPets.slice(0, index), ...prevPets.slice(index + 1)]);
    }

    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
            {
                pets.map((pet, index) => {
                    return (
                        <tr key={pet.id}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><button onClick={()=> removePet(index)}>Adopted</button></td>
                        </tr>
                    )
                })
            }
        </table>
    )

}

export default Pets