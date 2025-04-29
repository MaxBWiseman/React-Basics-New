import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Header() {
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      {/* The above image is imported from the assets folder above. */}
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  // The App() function is the container for all the modular react code you create.
  // App() is then inserted into the HTML template within a chosen element marked with an ID or Class.
  return (
    <div>
      <Header></Header>
      {/* The above Header() function is inserted into the App() function to serve as, you guessed it, a header.
          You can also write this as a self closing tag like - <Header/>
          An important note is that all React functions must be named with a capital letter,
          if the name is longer than one word, CamelCase must be used. You must also always return the JSX.*/}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
