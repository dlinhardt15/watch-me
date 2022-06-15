import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, addToWatchList}) {
    
    return(
        <div className="show-container">
            {shows.map(show => {
                return <ShowCard key={show.id} show={show} addToWatchList={addToWatchList} />
            })}
        </div>
    );
}

export default ShowList;