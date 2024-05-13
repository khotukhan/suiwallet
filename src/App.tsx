// src/App.tsx
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import StyledButton from './styled/StyledButton'; // Import the StyledButton

function App() {
  const handleHeroButtonClick = () => {
    console.log('Hero button clicked!');
  };

  return (
    <div className="App">
      <Hero
        title="Welcome to Our Service"
        subtitle="We offer solutions to your problems"
        imageUrl="https://example.com/hero-image.jpg"
        onButtonClick={handleHeroButtonClick}
      />
      <StyledButton onClick={handleHeroButtonClick}>Click Me!</StyledButton>
    </div>
  );
}

export default App;
