import { useState, useEffect } from 'react';
import { ring } from 'ldrs';
import './Match.css';

function Match() {
    
    const [ isLoading, setIsLoading ] = useState(true);
    const options = {
        
    };

    const registerRing = () => {
        ring.register('loading-icon');
    };

    const findVenues = () => {

    }

    useEffect(() => {
        registerRing();
        
        findVenues();
        setIsLoading(false);
    }, []);

  return (
    <>
      <div className="match-page">
        <h1>Match Page</h1>
        <div aria-live="polite" aria-busy={isLoading}>
            {isLoading && <loading-icon></loading-icon>}
        </div>
      </div>
      {/* <div className='match-form'></div> */}
    </>
    
  );
}

export default Match;