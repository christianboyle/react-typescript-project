import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>My React and TypeScript App! {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
