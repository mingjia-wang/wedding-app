// import logo from './logo.svg';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import photo from '../images/floral-couple-bg.jpeg'

function App() {
  const formRef = useRef();
  const [ theme, setTheme ] = useState('');
  const [ capacity, setCapacity ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ budget, setBudget ] = useState('');


  const showForm = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth"
    });
  }

  const generateMatchURL = () => {
    return `/match?theme=${theme}&capacity=${capacity}&location=${location}&budget=${budget}`;
  };

  return (
    <>
    <div className='home-page'>
      <div className="left-half">
        <div className='left-text'>
          <h1>AI DO</h1>
          <p className='tagline'>Crafting Dream Weddings with AI Precision</p>
          <p className='description'>Experience stress-free wedding planning with AI Do! Our AI-driven chat platform curates personalized, budget-friendly weddings, seamlessly pairing you with the perfect vendors</p>
          <div className='button-container'>
            <button className='gs-button' onClick={showForm}>Get Started</button>
          </div>
        </div>
      </div> 
      <div className='right-half'>
        <img src={photo} id='picture'></img>
      </div>
    </div>
    <div className='form-page'>
    <div className='form' id='form' ref={formRef}>
      <div className='form-panel'>
        <div className='form-container'>
          <div className='input-box'>
            <h6 className='q-label'>Theme</h6>
            <p className='question'>What's your dream wedding theme?</p>
            <input type='text' onChange={(e) => {setTheme(e.target.value)}} placeholder='blank = any'></input>
          </div>
          <div className='input-box'>
          <h6 className='q-label'>Number of Guests</h6>
            <p className='question'>How many people are you inviting?</p>
            <input type='text' onRateChange={(e) => {setCapacity(e.target.value)}} placeholder='blank = any'></input>
          </div>
          <div className='input-box'>
            <h6 className='q-label'>Location</h6>
            <p className='question'>Where in California?</p>
            {/* <input type='text' onChange={(e) => {setLocation(e.target.value)}} placeholder='blank = any'></input> */}
            <select onChange={(e) => {setLocation(e.target.value)}}>
              <option value=''>Any</option>
              <option value="La Jolla">La Jolla</option>
              <option value="Ventura">Ventura</option>
              <option value="Carlsbad">Carlsbad</option>
              <option value="Meadow Vista">Meadow Vista</option>
              <option value="Long Beach">Long Beach</option>
              <option value="San Clemente">San Clemente</option>
              <option value="Temecula">Temecula</option>
            </select>
          </div>
          <div className='input-box'>
            <h6 className='q-label'>Budget</h6>
            <p className='question'>What's your price range?</p>
            <input type='text' onChange={(e) => setBudget(e.target.value)} placeholder='blank = any'></input>
          </div>
        </div>
        <div className='button-div'>
          <Link to={generateMatchURL()}><button id='submit'>Let's go!</button></Link>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;