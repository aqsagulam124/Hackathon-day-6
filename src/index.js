import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app"; // Ensure this line is importing the App component

// Root DOM element select karna
const root = ReactDOM.createRoot(document.getElementById("root"));

// App component ko render karna
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
