// Import do router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import das páginas
import Home from "./pages/Home";
import RegisterAndLogin from "./pages/RegisterAndLogin"
import Product from "./pages/Product";
import Error from "./pages/Error";
import Layout from "./components/global/Layout";
import Search from "./pages/Search"

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegisterAndLogin />} />
          <Route path="product" element={<Product />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
