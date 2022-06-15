import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, addWatchListShow, onShowDelete}) {
    
    return(
        <div className="show-container">
            {shows.map(show => {
                return <ShowCard key={show.id} show={show} addWatchListShow={addWatchListShow} onShowDelete={onShowDelete}/>
            })}
        </div>
    );
}

export default ShowList;