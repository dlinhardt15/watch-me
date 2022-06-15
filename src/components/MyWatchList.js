import React from 'react';
import ShowCard from "./ShowCard";

function MyWatchList({watchListShow, addWatchListShow}) {

    return(
        <div className="watch-list-container">
            {watchListShow.map(show => {
               return <ShowCard key={show.id} show={show} addWatchListShow={addWatchListShow}/>  
            })}
        </div>
    )
}

export default MyWatchList;