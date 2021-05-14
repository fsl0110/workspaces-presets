import React, { FC, useState } from 'react';
import './app.scss';

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const handleIncrement = () => {
    if (error) {
      setError(false);
    }
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setError(true);
    }
  };

  return (
    <div data-test="component-app" className="app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={handleIncrement}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={handleDecrement}>
        Decrement counter
      </button>
      {error && (
        <p data-test="error" className="error">
          Negative counts are not possible!
        </p>
      )}
    </div>
  );
};

export default App;
