import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Duffel</h1>
      <h2>"getting-started"</h2>
      <a href="https://app.duffel.com/tombiliby/welcome/getting-started" className="btn">https://app.duffel.com/tombiliby/welcome/getting-started</a>
      <ul>
        <li><a target="_blank" href="./search">Search request</a></li>
        <li><a target="_blank" href="./booking">Booking flight</a></li>
        <li><a target="_blank" href="./cancel">Cancel book</a></li>
        <li><a target="_blank" href="./cancel/confirm">Confirm Cancellation</a></li>
      </ul>
    </div>
  );
}

export default App;
