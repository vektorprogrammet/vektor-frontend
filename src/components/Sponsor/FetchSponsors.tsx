import React from 'react'



const FetchSponsors = () => {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );

    return(
        <div>
            list of sponsors
        </div>
    )

}

export default FetchSponsors;