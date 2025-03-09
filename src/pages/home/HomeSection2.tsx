
import { Link, useSearchParams } from "react-router-dom";
import section2Product1 from "../../assets/Img/section-2_product1.jpg"
import { FaAngleRight } from "react-icons/fa6";

export const HomeSection2=()=>
{
    return (
        <>
         <section className="section-2">
      <div className="container">
        <div className="box-head">
          <div className="section-2__iteamleft">
            <div className="section-2__title">Có gì mới?</div>
            <h2 className="section-2__subtitle"> một số vật nuôi của chúng tôi</h2>
          </div>
          <div className="section-2__itemright"><a className="button button--outline" href="#">
               Xem thêm <FaAngleRight /></a></div>
        </div>
        <div className="section-2__wrap">
          <div className="product-item">
            <div className="section-2__image">  <Link to={`/product/${1}`}>
                <img src={section2Product1} alt=""/>
                </Link>
                </div>
            <div className="section-2__content">
              <h3 className="section-2__ptitl">MO231 - Pomeranian Trắng</h3>
              <div className="section-2__desc">
                <div className="section-2__descleft">
                  <div className="section-2__gender">Giống:</div>
                  <div className="section-2__namegender">Đực</div>
                </div>
                <div className="section-2__dos"></div>
                <div className="section-2__desc-right">
                  <div className="section-2__age">Tuổi</div>
                  <div className="section-2__nage">02 tháng</div>
                </div>
              </div>
              <div className="section-2__price">6.900.000 VND</div>
            </div>
          </div>
        </div>
        <div className="section-2__button-bottom"><a className="button button--outline" href="#">Xem thêm
        <FaAngleRight />
           </a>
           </div>
      </div>
    </section>

        </>
    )
}