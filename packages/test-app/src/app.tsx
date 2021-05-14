import React, { FC } from 'react';
import './app.css';
import ReactImage from '../public/img/react.png';
/* import { Main } from './main'; */

const App: FC = () => {
  const array = ['Mercedes', 'Audi', 'Porsche'];
  const arrayClone = [...array];
  console.log(arrayClone);

  return (
    <div className="app">
      <h1 data-testid="topic">Hello React App !!</h1>
      <a href="www.google.de">search</a>
      <img src={ReactImage} />
      {/*     <Main text="Hello high water" /> */}
    </div>
  );
};

export default App;
