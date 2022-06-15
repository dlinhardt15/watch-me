import React, {useState, useEffect} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [shows, setShows] = useState([])
    const [watchShows, setWatchShows] = useState([])
    // console.log(watchShows)
     useEffect(() => {
        fetch("http://localhost:8081/shows")
        .then(response => response.json())
        .then(data => setShows(data))}, [])

    function addToWatchList (show) {
        const showClicked = watchShows.findIndex(item => show.id === item.id)
        if (showClicked === -1) {
            setWatchShows([...watchShows, show])
        } else {
            console.log("Show already on watch list...")
        }
    }
    function deleteFromWatchList() {
        console.log("deleted")
    }
    return (
        <>
            <MyWatchList watchShows={watchShows} deleteFromWatchList={deleteFromWatchList}/>
            <hr/>
            <ShowList shows={shows} addToWatchList={addToWatchList}/>
        </>
    );
}

export default ShowCatalog;