import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Username from "./components/Username";
import Register from "./components/Register";
import Password from "./components/Password";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";

// root routes
const router = createBrowserRouter([
  { path: "/", element: <Username /> },
  { path: "/register", element: <Register /> },
  { path: "/password", element: <Password /> },
  { path: "/recovery", element: <Recovery /> },
  { path: "/profile", element: <Profile /> },
  { path: "/reset", element: <Reset /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
