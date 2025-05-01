import React, { useState } from "react";
import reactLogo from "./assets/react-core-concepts.png";
// Import the image used in the header from the assets folder.
// This is the standard way to use images in React.Reference the image in the
// JSX code using the variable name reactLogo.
import componentsImg from "./assets/components.png";
import "./App.css";
// Import the CSS file used to style the app. index.css is used for global styles,
// while App.css is used for component-specific styles.
import { CORE_CONCEPTS } from "./data.js";
// the CORE_CONCEPTS array is imported from the data.js file in the workspace.
// This is the standard way to import data in React and will be used for the
// core concepts cards within the app. More below in the App function.

// It is seen as a good practice to keep the component functions you create
// in a folder called "components" within seperate files, such as Header.jsx,
// CoreConcept.jsx etc. This is not done here for simplicity, but is a good practice
// to follow in larger projects. When importing components, you dont need to use
// curly braces, as you do with data. e.g import Header from './Header.jsx'.
// It can also be good practice to pair these component files with
// its nessessary styles in a CSS file of the same name, such as Header.css.

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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {/*The "props" parameter is how react parses custom props set inside
      the components tag within the App function. This allows for dynamic data.
      These dot notation accessed props are defined below inside the App function. */}
    </li>
  );
}

function Header() {
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      {/* The above image is imported from the assets folder explained above. */}
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

  const [buttonChoice, setButtonChoice] = useState("Please click a button");
  // The above variables are used to store the value of the button clicked.
  // React components can only execute once, so you cannot use a normal
  // variable to hold a changed value, like in vanilla JavaScript
  // or any of language for that matter. so to change the value of a variable
  // you must use the useState hook. This is a built in react function that
  // allows you to create state variables. The useState function takes an initial
  // value as an argument and returns an array with two elements.
  // The first element is the current value of the state variable and the second
  // element is a function that can be used to update the value of the state variable.

  function TabButton(props) {
    // document.querySelector('button').addEventListener('click', () => {
    //   console.log('Button clicked!');
    // });
    // The above code adds an event listener to the button element in vanilla JS.
    // This is not the way to do it in React, as React has its own way of handling events.
    // The above code is commented out as it is not needed in React.
    // The below code is the React way of handling events.
    
    function handleClick() {
      console.log(`${props.children} button clicked!`);
      setButtonChoice(props.children);
      // This code is the React way of handling events.
      // This function is called when the button is clicked.
      // You can add any code you want to run when the button is clicked here.
      // Notice that parentheses are not used when passing the function to the onClick
      // this is because we want react to call the function, not the user which would
      // happen if we used parentheses e.g onClick={handleClick()}.
      // This is a common mistake made by new React developers.
      // This is a function within a function, which is a common pattern in React.
    }

    return (
      <li>
        <button onClick={handleClick}>{props.children}</button>
      </li>
    );
    // The button above is what triggers the handleClick function when clicked.
    // This is what is shown in the TabButton function in the App function.
  }
  /* The props.children above is a parameter that react always parses secretley
    to any custom component, that provides information on what is between the
    components tag within the App function. Example - <Header> INFO HERE  </Header>
    (not possible with a self closing tag such as <Header />). See the TabButton
    tag within App(). This could have also been done with the "label" prop like 
    <TabButton label="button label" /> with a self closing tag. Although "children"
    is a nifty built in way to impress your friends. */
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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            {/* React calls the above parameters inside the custom component "Props".
          Inside the CoreConcept function, a parameter is placed, typically called props again,
          for react to use for placing the above prop parameters into the function itself as
          an object of all the props added e.g title, description, image etc.
          Bare in mind you can add any descriptive word you like as a prop. Just reference
          it with dot notiation within the related function, as seen above. */}
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            {/* A different method has been used above to populate the CoreConcept
            card, an array of data has been parsed from the data.js file in
            this workspace, imported at the top of the file, and being a 2D array
            we can access the different sets of data by indexing through the array.   */}
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              {...CORE_CONCEPTS[3]}
              // The above is a shorthand way of passing all the props from the
              // CORE_CONCEPTS array to the CoreConcept function.
              // This is called the "spread operator ..." and is a shorthand way
              // of passing all the key-value pairs from an object to a function.
              // This is a common pattern in React and is used to make the code
              // more readable and easier to maintain.
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
      {buttonChoice}
    </div>
  );
}

export default App;
