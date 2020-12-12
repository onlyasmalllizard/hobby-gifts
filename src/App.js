import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';

import data from './testdata.js';

function App() {
  const [display, setDisplay] = useState('Create');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const changeLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
    setDisplay('About');
  };

  const evaluateDisplay = () => {
    switch (display) {
      case 'About':
        return <About />;
      case 'Create':
        return <CreateAccount />;
      case 'Login':
        return <Login changeLoginStatus={changeLoginStatus} />;
      case 'Lists':
        return <Lists />;
      default:
        return <About />;
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>HobbyGifts</h1>
      </header>
      <main>
        <DisplaySelector isLoggedIn={isLoggedIn} setDisplay={setDisplay} />
        {evaluateDisplay()}
        {isLoggedIn && (
          <button class='btn' onClick={changeLoginStatus}>
            Log Out
          </button>
        )}
      </main>
    </div>
  );
}

const DisplaySelector = ({ isLoggedIn, setDisplay }) => {
  const handleDisplayChange = (e) => {
    setDisplay(e.target.value);
  };

  return (
    <section id='display-selector'>
      <button class='btn' value='About' onClick={handleDisplayChange}>
        About
      </button>
      <button class='btn' value='Create' onClick={handleDisplayChange}>
        Create Account
      </button>
      {isLoggedIn && (
        <button class='btn' value='Lists' onClick={handleDisplayChange}>
          My Lists
        </button>
      )}
      {!isLoggedIn && (
        <button class='btn' value='Login' onClick={handleDisplayChange}>
          Log In
        </button>
      )}
    </section>
  );
};

const About = () => {
  return <section class='content'>This is the sample about.</section>;
};

const CreateAccount = () => {
  return (
    <section class='content'>
      <h2>Create New Account</h2>
      <form action=''>
        <label for='display-name'>Display Name</label>
        <input name='display-name' type='text' required />
        <label for='email'>Email</label>
        <input name='email' type='email' required />
        <label for='password' placeholder='Password'>
          Password
        </label>
        <input type='password' name='password' required />
        <input type='submit' class='btn' />
      </form>
    </section>
  );
};

const Login = ({ changeLoginStatus }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    changeLoginStatus();
  };

  return (
    <section class='content'>
      <form action={handleSubmit}>
        <label for='email'>Email</label>
        <input type='email' name='email' required />
        <label for='password'>Password</label>
        <input type='password' name='password' required />
        <input type='submit' class='btn' />
      </form>
    </section>
  );
};

const Lists = () => {
  return (
    <section class='content'>
      {data.map((list) => (
        <article key={new Date().getTime().toString()} class='hobby'>
          {list.hobbyName}
          <button class='btn list-btn'>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </article>
      ))}
    </section>
  );
};

export default App;
