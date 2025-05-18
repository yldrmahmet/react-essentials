import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// uygulama başlangıç noktası
// application entry point
// index.html dosyasında id'si root olan div elemanını işaret eder
// it points to the div element with id root in index.html file
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
