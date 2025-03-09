import { ProductFillter } from "./ProductFillter"
import {Products} from "./Products"
export const ProductSection2=()=>
{
    return (
        <>
            <section className="sp-section-1">
                <div className="container">
                    <div className="sp-section-1__wrap">
                        <ProductFillter/>
                        <Products/>
                    </div>
                </div>
            </section>

        </>
    )
}