import ReactDOM from "react-dom/client";

import App from "./App.jsx";
// The App function is imported from the App.jsx file.
import "./index.css";
// The index.css file is imported to style the app.

const entryPoint = document.getElementById("root");
// The entry point is the HTML element where the React app will be rendered.
// In this case, it is the div element with the ID "root" in the index.html file.
ReactDOM.createRoot(entryPoint).render(<App />);
// The App function is rendered into the entry point.
// The createRoot function is used to create a root for the React app.
// The render function is used to render the App function into the entry point.
// The App function is the main function of the React app. Discussed in the App.jsx file.