import {useEffect, useState} from 'react'
import {allSearchTours} from '../components/SearchTrip/tripData'
import { useLocation } from "react-router-dom";
import {ResultsContainer, ResultsTitle, ResultsParaghraph} from './DestinationElement'
import SearchResults from './SearchResults'


const Destination = () => {
    const [infos, setInfos] = useState({})
    const location = useLocation();

    useEffect(() => {
		if (location.state) {
			const { info } = location.state;
            console.log(info);
			setInfos(info);
		}
	}, [location]);

    console.log(infos);

    const filteredTour = allSearchTours.filter(tour => {
        if(infos.destination === 'Rome'){
            return tour.place === 'Italy'
        }
        if(infos.destination === 'Barcelona'){
            return tour.place.includes('Spain') || tour.place.includes('Barcelona')
        }
        if(infos.destination === 'Europe'){
            return tour.place !== 'Japan'
        }
        return tour.place === infos.destination || tour.place.includes(infos.destination)
    });
    
    
     return (
        <>
            <ResultsContainer> 
                <ResultsTitle>Search Results</ResultsTitle>
                <ResultsParaghraph>{filteredTour.length} tour found</ResultsParaghraph>
                {filteredTour.map((tour) => <SearchResults key={tour.id} {...tour}/>)}
            </ResultsContainer>
        </>
    )
    
}  

export default Destination
