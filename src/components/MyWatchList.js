import React from 'react';
import ShowCard from "./ShowCard";

function MyWatchList({watchShows, deleteFromWatchList}) {

    return(
        <div className="watch-list-container">
            {watchShows.map(show => {
                return <ShowCard key={show.id} show={show} onClick={deleteFromWatchList}/>
            })}
        </div>
    )
}

export default MyWatchList;