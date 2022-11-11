import ReactDOM from "react-dom/client";
import { ProvideAuth } from "./context/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ProvideAuth>
    <App />
  </ProvideAuth>
);
