import React from 'react'

const Keys = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const details = [
        {
            name: "Nishant",
            age: 26,
        },
        {
            name: "Shailesh",
            age: 29,
        },
{
            name: "Shailesh",
            age: 29
        },
        {
            name: "Abhishek",
            age: 27,
        },
        {
            name: "Mayank",
            age: 25,
        },
    ];
    return (
        <div className="App">
            <ul>
                {numbers.map((number) => {
                    return <li key={number}>{number}</li>;
                })}
            </ul>
            
            {/* FOR NOT GETTING A ERROR OF KEYS YOU CAN ALSO USE INDEX PROP BECAUSE MAP FUNCTIION IS ALWAYS RETURN A INDEX VALUE */}
            <ul>
                {details.map((detail, index) => {
                    return (
                        <div key={index}>
                            <li>{detail.name}</li>
                            <li>{detail.age}</li>
                        </div> 
    );
    })}
            </ul>
        </div>
    )
}

export default Keys
