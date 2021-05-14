import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import './main.scss';

interface Props {
  text: string;
}

export const Main: FC<Props> = ({ text }) => {
  const array = ['Mercedes', 'Audi', 'Porscheeee'];
  const arrayClone = [...array];
  const first = { name: 'Tony' };
  const last = { lastName: 'Stark' };
  const person = Object.assign(first, last);
  console.log(person?.name);

  const newObject = {
    ...first,
    ...last,
  };

  console.log('--------------------', newObject);

  const testFunction = (name: string) => {
    return name;
  };

  testFunction('frank');

  Promise.allSettled([
    Promise.resolve(1),
    Promise.resolve(true),
    Promise.reject('Boooooo'),
  ])
    .then(promiseResults => console.log('Then! ', promiseResults))
    .catch(e => console.log('catch!', e));

  return (
    <main data-test="main">
      <h1 className="main"> {text}</h1>
      <h2>Hello React..................</h2>
      <div>
        {arrayClone.map((car: string) => {
          return <p key={nanoid()}>{car}</p>;
        })}
      </div>
    </main>
  );
};

export default Main;
