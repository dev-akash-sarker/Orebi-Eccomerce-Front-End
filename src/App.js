import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home";
import Shop from "./pages/shop";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
