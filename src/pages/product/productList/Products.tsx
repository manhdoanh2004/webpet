import { Link } from "react-router-dom"
import section2Product1 from "../../../assets/Img/section-2_product1.jpg"
export const Products=()=>
{
    return (
        <>
         <div className="sp-section-1__wrap-iteam">
            <div className="sp-section-1__nhan">
              <div className="sp-section-1__title-main"> Chó nhỏ</div>
              <div className="sp-section-1__option-iteam2">
                <img src="assets/Img/Filter.svg" alt=""/>
                <p>Bộ lọc </p>
              </div>
            </div>
            <div className="sp-section-1__list-iteam">
              <div className="product-item">
                <div className="sp-section-1__image"> <Link to={`/product/${1}`}>
                    <img src={section2Product1} alt=""/>
                    </Link>
                    </div>
                <div className="sp-section-1__content">
                  <h3 className="sp-section-1__ptitl">MO231 - Pomeranian Trắng</h3>
                  <div className="sp-section-1__desc">
                    <div className="sp-section-1__descleft">
                      <div className="sp-section-1__gender">Giống:</div>
                      <div className="sp-section-1__namegender">Đực</div>
                    </div>
                    <div className="sp-section-1__dos"></div>
                    <div className="sp-section-1__desc-right">
                      <div className="sp-section-1__age">Tuổi</div>
                      <div className="sp-section-1__nage">02 tháng</div>
                    </div>
                  </div>
                  <div className="sp-section-1__price">6.900.000 VND</div>
                </div>
              </div>
              <div className="product-item">
                <div className="sp-section-1__image"><Link to={`/product/${2}`}>
                    <img src={section2Product1} alt=""/>
                    </Link>
                    </div>
                <div className="sp-section-1__content">
                  <h3 className="sp-section-1__ptitl">MO231 - Pomeranian Trắng</h3>
                  <div className="sp-section-1__desc">
                    <div className="sp-section-1__descleft">
                      <div className="sp-section-1__gender">Giống:</div>
                      <div className="sp-section-1__namegender">Đực</div>
                    </div>
                    <div className="sp-section-1__dos"></div>
                    <div className="sp-section-1__desc-right">
                      <div className="sp-section-1__age">Tuổi</div>
                      <div className="sp-section-1__nage">02 tháng</div>
                    </div>
                  </div>
                  <div className="sp-section-1__price">6.900.000 VND</div>
                </div>
              </div>
            </div>
            <div className="sp-section-1__Pagination">
              <button><i className="fa-solid fa-arrow-left"></i></button>
              <button className="button--Act">1</button>
              <button>2</button>
              <button>3</button>
              <button className="button--Act2">4</button>
              <button>..</button>
              <button>28</button>
              <button><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </>
    )
}