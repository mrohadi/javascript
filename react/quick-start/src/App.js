import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const name = "Muhammad Rohadi";
let isTrue = true;
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonContainer />
        {isTrue && <DisplayName />}
        <ListProducts />
      </header>
    </div>
  );
}

const ListProducts = () => {
  const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>
  );

  return <ul>{listItems}</ul>;
}

function DisplayName() {
  return <h1>{name}</h1>
}

const ButtonContainer = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

function MyButton({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick} className="my-btn">ClickMe</button>
      <p>{count}</p>
    </div>
  )
}

export default App;
