import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Route";

function App() {
  return (
    <div className="max-w-screen-3xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
