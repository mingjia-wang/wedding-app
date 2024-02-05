// import logo from './logo.svg';
import { useRef } from 'react';
import './Home.css';

function App() {
  const formRef = useRef();

  const showForm = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className='page'>
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
            <input type='text'></input>
          </div>
          <div className='input-box'>
          <h6 className='q-label'>Number of Guests</h6>
            <p className='question'>How many people are you inviting?</p>
            <input type='text'></input>
          </div>
          <div className='input-box'>
            <h6 className='q-label'>Location</h6>
            <p className='question'>Where in Orange County?</p>
            <input type='text'></input>
          </div>
          <div className='input-box'>
            <h6 className='q-label'>Budget</h6>
            <p className='question'>What's your price range?</p>
            <input type='text'></input>
          </div>
        </div>
        <button id='submit'>Let's go!</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
