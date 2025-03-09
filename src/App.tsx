import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import {Homepage} from "./pages/home/Homepage"
import {LayoutDefault} from "./layouts/LayoutDefault"
import {ProductList} from "./pages/product/productList/ProductList"
import {Error} from "./pages/error/Error"
import { ProductDetail } from "./pages/product/productdeital/ProductDetail";
import { Product } from "./pages/product/Product";
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault/>}>
        <Route path="/" element={<Homepage/>}/>

          <Route path="product" element={<Product/>}>
                <Route index element={<ProductList/>} /> 
              <Route path=":productId" element={<ProductDetail/>} /> 
        </Route>  
       
        </Route>
        <Route path="*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
