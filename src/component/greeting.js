
import React from 'react';

function Greeting({name,age,profession})  {

    return(
        <div>
            <div className='greeting'></div>
            <h1>hello, {name}</h1>
            <h2>{name} is {age} years old.</h2>
            <h3>{name} is a {profession}</h3>
        </div>
    )
}


export default Greeting;