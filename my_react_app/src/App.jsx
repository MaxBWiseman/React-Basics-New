import reactLogo from './assets/react.svg'
// Import the image used in the header from the assets folder.
import './App.css'
// Import the CSS file used to style the app. index.css is used for global styles,
// while App.css is used for component-specific styles.

const reactDescriptions = [
  "A JavaScript library for building user interfaces",
  "A JavaScript library for creating single-page applications",
  "A JavaScript library for creating reusable UI components",
  "A JavaScript library for creating complex UIs from simple components",
  "A JavaScript library for creating interactive UIs",
  "A JavaScript library for creating dynamic UIs",
  "A JavaScript library for creating responsive UIs",
];

function RandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
  // The above function returns a random integer between 0 and the max value.
}

function Header() {
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      {/* The above image is imported from the assets folder above. */}
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[RandomInt(reactDescriptions.length - 1)]}
        {/*The above function returns a random description from the reactDescriptions array.
          The RandomInt function is used to get a random index from the array.
          The length of the array is used to get the maximum index.
          The -1 is used to get a random index between 0 and the length of the array due
          to zero indexing. You can only parse JavaScript code into curly braces like this {}
          if the expression directley produces a value.*/}
      </p>
    </header>
  );
}

function App() {
  // The App() function is where you will import all the other functions you create.
  // App() is inserted on runtime into the index.jsx file,
  // and from there gets imported into the index.html file.
  // within a chosen entry point, decalred in the index.jsx file
  // and usually marked with an ID of "root".
  // The App() function is the main function of your React app.
  return (
    <div>
      <Header></Header>
      {/* The above Header() function is inserted into the App() function to serve as,
          you guessed it, a header. You can also write this as a self closing
          tag like - <Header/>.An important note is that all React functions
          must be named with a capital letter,
          if the name is longer than one word, CamelCase must be used.
          You must also always return the JSX.*/}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
