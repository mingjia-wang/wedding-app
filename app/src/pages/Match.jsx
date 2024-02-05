import { useState, useEffect } from 'react';
import { ring } from 'ldrs';
import Venue from '../components/Venue';
import './Match.css';

function Match() {
    
    const [ isLoading, setIsLoading ] = useState(true);
    const [ theme, setTheme ] = useState('');
    const [ capacity, setCapacity ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ budget, setBudget ] = useState('');
    const [ recommendations, setRecommendations ] = useState([]);

    const options = [
            {
                name: 'La Jolla Cove Rooftop',
                location: 'La Jolla',
                capacity: 200,
                price: 1995
            },
            {
                name: 'Winchester Estate',
                location: 'Meadow Vista',
                capacity: 150,
                price: 5895
            },
            {
                name: 'The Sanctuary',
                Location: 'Long Beach',
                capacity: 300,
                price: 4495
            }
    ];

    const registerRing = () => {
        ring.register('loading-icon');
    };

    const findVenues = () => {
        const queryParameters = new URLSearchParams(window.location.search);
        const themeParam = queryParameters.get('theme');
        const capacityParam = queryParameters.get('capacity');
        const locationParam = queryParameters.get('location');
        const budgetParam = queryParameters.get('budget');
        console.log(themeParam);
        console.log(capacityParam);
        console.log(locationParam);
        console.log(budgetParam);
        setTheme(themeParam);
        setCapacity(capacityParam);
        setLocation(locationParam);
        setBudget(budgetParam);
        setRecommendations(options);
    }

    useEffect(() => {
        registerRing();
        findVenues();
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        
    }, []);

  return (
    <>
      <div className="match-page">
        
        {
            isLoading ? 
            <>
                <h3 className='match-header'>AI DO is finding the perfect venues for you...</h3>
                <div aria-live="polite" aria-busy={isLoading}>
                    <loading-icon></loading-icon>
                </div>
            </>
            :
            <>
                <h3 className='match-header'>Here you go!</h3>
                <div className='venue-list'>
                   {
                    recommendations.map(v => {
                        return <Venue />
                    })
                   }
                </div>
            </>
        }
      </div>
      {/* <div className='match-form'></div> */}
    </>
    
  );
}

export default Match;