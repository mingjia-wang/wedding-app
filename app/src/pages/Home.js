// import logo from './logo.svg';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

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
    <div className='home-page'>
      <div className="App">
        <h1>AI DO</h1>
        <p className='tagline'>Crafting Dream Weddings with AI Precision</p>
        <p className='description'>Experience stress-free wedding planning with AI Do! Our AI-driven chat platform curates personalized, budget-friendly weddings, seamlessly pairing you with the perfect vendors</p>
        <div className='button-container'>
          <button className='gs-button' onClick={showForm}>Get Started</button>
        </div>
      </div>
      <div className='form' id='form' ref={formRef}>
        <div className='form-panel'>
          <div className='form-container'>
            <div className='input-box'>
              <h6 className='q-label'>Theme</h6>
              <p className='question'>What's your dream wedding theme?</p>
              <input type='text' onChange={(e) => {setTheme(e.target.value)}}></input>
            </div>
            <div className='input-box'>
            <h6 className='q-label'>Number of Guests</h6>
              <p className='question'>How many people are you inviting?</p>
              <input type='text' onRateChange={(e) => {setCapacity(e.target.value)}}></input>
            </div>
            <div className='input-box'>
              <h6 className='q-label'>Location</h6>
              <p className='question'>Where in California?</p>
              <input type='text' onChange={(e) => {setLocation(e.target.value)}} placeholder='blank = any'></input>
            </div>
            <div className='input-box'>
              <h6 className='q-label'>Budget</h6>
              <p className='question'>What's your price range?</p>
              <input type='text' onChange={(e) => setBudget(e.target.value)}></input>
            </div>
          </div>
          <div className='button-div'>
            <Link to={generateMatchURL()}><button id='submit'>Let's go!</button></Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
