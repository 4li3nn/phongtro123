import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login } from "./containers/public";
import "./App.css";
import { path } from "./utils/constant";

const router = createBrowserRouter([
  {
    path: path.HOME,
    element: <Home />,
    children: [
      {
        path: path.LOGIN,
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
