import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(0);

  function getQuote() {
    try{
      fetch('https://api.quotable.io/random').then(
        response => response.json()
      ).then(
        (quote) => {
          console.log(quote)
          quote.author = '- ' + quote.author
          setData(quote)
        }
      )
    } catch (e){
      console.log(e)
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quotes</h1>
        <h3 id="quote">{data.content}</h3>
        <h3 id="author">{data.author}</h3>
        <button onClick={getQuote}>Get Quote</button>
      </header>
    </div>
  );
}

export default App;
