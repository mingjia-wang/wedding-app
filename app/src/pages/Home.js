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
    </div>
    
  );
}

export default App;
