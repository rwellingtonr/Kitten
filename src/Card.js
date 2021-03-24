import React from 'react';

const Card = ( { prof, name, id } ) => {    
    return (
        <div className='bg-light-purple dib br3 pa3 ma2 grow'>
            <img alt='kittens' src={`https://robohash.org/${id}?set=set4`} />
            <div>
                <h2>{ name }</h2>
                <p>{ prof }</p>
            </div>
        </div>
    );
    
}

export default Card;