import React, { useState, useMemo } from 'react';
import './style.css';
import { initialItems } from './utils.js';

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(initialItems);

  //----------- Slow down all Application --------------
  // const selectedItem = data.find((item) => item.isSelected);
  // console.log(selectedItem);

  //----------- using the useMemo hook  --------------
  const selectedItemMeomo = useMemo(() => {
    return data.find((item) => item.isSelected);
  }, [data]);

  //----------- using the useMemo hook  with dependency value--------------
  // const selectedItemMeomo = useMemo(() => {
  //   return data.find((item) => item.id === count);
  // }, [count, data]);
  return (
    <div>
      <h4>useMemo Hooks Fundametal !</h4>
      <div className="main">
        <h2>count - {count} </h2>
        <h2>Data - {selectedItemMeomo?.id} </h2>
        <button onClick={() => setCount(count + 1)}>Increment </button>
      </div>
    </div>
  );
}
