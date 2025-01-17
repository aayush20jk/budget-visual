import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard, dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// layouts
import Main, { mainLoader } from "./layout/Main";

// action
import { logoutAction } from "./action/logout";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  }
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
}

export default App;
