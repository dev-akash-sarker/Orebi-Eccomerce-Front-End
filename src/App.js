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
import About from "./components/layout/About";
// import NotFound from "./components/layout/NotFound";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
