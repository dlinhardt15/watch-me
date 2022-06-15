import React, {useState, useEffect} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [shows, setShows] = useState([])
    const [watchListShow, setWatchListShow] = useState([])

    useEffect(() => {
        fetch("http://localhost:8081/shows")
        .then(response => response.json())
        .then(data => setShows(data))
    }, [])

    function addWatchListShow (clickedShow) {
        if (watchListShow.includes(clickedShow) === false) {
            setWatchListShow([...watchListShow, clickedShow])
        } else {
            const filteredWatchList = watchListShow.filter(show => show.id !== clickedShow.id)
            setWatchListShow(filteredWatchList)
        } 
    }

    function onShowDelete (id) {
        const filteredShows = shows.filter(show => show.id !== id)
        setShows(filteredShows)
        
        fetch("http://localhost:8081/shows/" + id, {
            method: "DELETE"
        })
    }

    return (
        <>
            <MyWatchList watchListShow={watchListShow} addWatchListShow={addWatchListShow} onShowDelete={onShowDelete}/>
            <hr/>
            <ShowList shows={shows} addWatchListShow={addWatchListShow} onShowDelete={onShowDelete}/>
        </>
    );
}

export default ShowCatalog;