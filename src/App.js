import './App.css';
import React, { useState } from 'react';
import { getRandomQuote } from 'inspirational-quotes';

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const refreshQuote = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
  };

  return (
    <div>
      <header>
          <h1>Muziekschool H&J</h1>
          <p>Luisterend oor voor talent!</p>
      </header>
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Over ons</a></li>
              <li><a href="#">Tarieven</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Agenda</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="" onClick={refreshQuote}>Motivatie</a></li>
          </ul>
      </nav>
      <section>
          <div id='motivation'>
            <p id='quote'>"{quote}"</p>
            <button id='click'><a href="" id='refresh' onClick={refreshQuote}>Toon inspirerende quote!</a></button>
          </div>
      </section>
      <footer>
          <p>&copy; Copyright 2025 Muziekschool H&J</p>
          <p>(Dit is een oefenopdracht, alle informatie op deze website is fictief.)</p>
      </footer>
    </div>
    )
  };

export default App;
