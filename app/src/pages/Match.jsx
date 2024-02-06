import { useState, useEffect } from 'react';
// import { ring } from 'ldrs';
import loadingGif from '../images/loader.webp';
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
                name: 'Pacific View Tower',
                location: 'Ventura',
                capacity: 250,
                price: 2295,
                url: 'https://www.wedgewoodweddings.com/pacificviewtower'
            },
            {
                name: 'Carlsbad Windmill',
                location: 'Carlsbad',
                capacity: 200,
                price: 995,
                url: 'https://www.wedgewoodweddings.com/goldengateclub'
            },
            {
                name: 'La Jolla Cove Rooftop',
                location: 'La Jolla',
                capacity: 200,
                price: 1995,
                url: 'https://www.wedgewoodweddings.com/lajollacoverooftop-1'
            },
            {
                name: 'Winchester Estate',
                location: 'Meadow Vista',
                capacity: 150,
                price: 5895,
                url: 'https://www.wedgewoodweddings.com/winchesterestate'
            },
            {
                name: 'The Sanctuary',
                location: 'Long Beach',
                capacity: 300,
                price: 4495,
                url: 'https://www.wedgewoodweddings.com/sanctuary'
            },
            {
                name: 'La Ventura',
                location: 'San Clemente',
                capacity: 500,
                price: 6000,
                url: 'https://laventuraeventcenter.com/wedding-venue/?gad_source=1&gclid=CjwKCAiAq4KuBhA6EiwArMAw1P-UGd0QDZ4DIK7w8c2UX4jkvx9KXYCUOXPYc1B3vuYKUZrRPdLgFRoCD0cQAvD_BwE'
            },
            {
                name: 'Bel Vino Winery',
                location: 'Temecula',
                capacity: 200,
                price: 2695,
                url: 'https://www.wedgewoodweddings.com/venues/southern-california/belvino-winery'
            }
    ];

    const findVenues = () => {
        const queryParameters = new URLSearchParams(window.location.search);
        const desiredLocation = queryParameters.get('location');
        const desiredPrice = queryParameters.get('budget');

        if (desiredLocation === '' && desiredPrice === '') {
            console.log('case 1: recommending all options:');
            const results = options;
            setRecommendations(results);
        }
        else if (desiredLocation !== '' && desiredPrice === '') {
            console.log('case 2 - location only:');
            const results = options.filter(v => v.location === desiredLocation);
            console.log(results);
            setRecommendations(results);
        }
        else if (desiredPrice !== '') {
            if (desiredLocation === '') {
                console.log('case 3 - price only:');
                const results = options.filter(v => (v.price < Number(desiredPrice) || v.price === Number(desiredPrice)));
                console.log(results);
                setRecommendations(results);
            }
            else {
                console.log('case 4 - both location and price:');
                
                const results = options.filter(v => {
                    console.log(v.name);
                    console.log(v.location === desiredLocation);
                console.log(v.price < Number(desiredPrice) || v.price === Number(desiredPrice));
                console.log((v.location === desiredLocation && (v.price < Number(desiredPrice) || v.price === Number(desiredPrice))));
                    return (v.location === desiredLocation && (v.price < Number(desiredPrice) || v.price === Number(desiredPrice)));
                });
                setRecommendations(results);
            }
        }


    }

    useEffect(() => {
        // registerRing();
        findVenues();
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        // console.log(theme + capacity + location + budget);
    }, []);

  return (
    <>
      <div className="match-page">
        
        {
            isLoading ? 
            <>
                <h3 className='match-header'>AI DO is finding the perfect venues for you...</h3>
                <div aria-live="polite" aria-busy={isLoading}>
                   <img src={loadingGif} className='loading-icon' alt='loading-icon'></img>
                </div>
            </>
            :
            <>
                <h3 className='match-header'>Here you go!</h3>
                <div className='venue-list'>
                   {
                    recommendations.map(v => {
                        return <Venue name={v.name} location={v.location} capacity={v.capacity} price={v.price} url={v.url}/>
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