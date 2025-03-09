import { Outlet } from "react-router-dom"
import { ProductList } from "./productList/ProductList"

export const Product=()=>
{
    return (
        <>
       <Outlet/>
        </>
    )
}