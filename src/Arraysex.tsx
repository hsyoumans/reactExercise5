import { useState } from "react";

function ArrayEx() {
    const [colors, setColor] = useState<String[]>(['red', 'orange', 'yellow']);

    function addColor(color: string): void {
        setColor(prevColor => [...prevColor, color]);
    }

    return (
        <>
            <p>
                <ol>
                    {colors.map((color, index) => <li key={index}> {color} </li>)}
                </ol>
            </p>
            <button onClick={()=> addColor("purple")}>Purple</button>
            <button onClick={()=> addColor("fuscia")}>Fuscia</button>
            <button onClick={()=> addColor("blue")}>Blue</button>
            <button onClick={()=> addColor("green")}>Green</button>
            <button onClick={()=> addColor("teal")}>Teal</button>
            <button onClick={()=> addColor("violet")}>Violet</button>
        </>
    )
}

export default ArrayEx;
