import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import {Homepage} from "./pages/home/Homepage"
import {LayoutDefault} from "./layouts/LayoutDefault"
import {ProductList} from "./pages/product/ProductList"
import {Error} from "./pages/error/Error"
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault/>}>
        <Route path="/" element={<Homepage/>}/>
        <Route path ="productlist" element={<ProductList/>} />
       
        <Route path="*" element={<Error/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
