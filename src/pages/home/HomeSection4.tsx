import section4Image1 from "../../assets/Img/section-4_Image1.png"
export const HomeSection4=()=>
{
    return (
        <>
          <section className="section-4">
      <div className="container">
        <div className="box-head">
          <div className="section-4__iteamleft">
            <div className="section-4__title">Có thể bạn đã biết?</div>
            <h2 className="section-4__subtitle">Kiến thức thú cưng hữu ích</h2>
          </div>
          <div className="section-4__itemright"><a className="button button--outline" href="#">Xem thêm <i className="fa-solid fa-angle-right"></i></a></div>
        </div>
        <div className="section-4__wrap">
         
        <div className="product-item">
            <div className="section-4__image"><a href="#">
                <img src={section4Image1} alt=""/>
                </a>
               </div>
            <div className="section-4__content">
              <div className="section-4__tag">Kiến thức thú cưng</div>
              <div className="section-4__suggest">Pomeranian là gì? Cách nhận biết chó Pomeranian</div>
              <div className="section-4__desc"> Pomeranian hay còn gọi là chó Pomeranian (chó Pom) luôn nằm trong top những thú cưng dễ thương nhất. Không chỉ vậy, giống chó xiếc nhỏ nhắn, đáng yêu, thông minh, thân thiện và khéo léo.</div>
            </div>
          </div>


          <div className="product-item">
            <div className="section-4__image"><a href="#">
                <img src={section4Image1} alt=""/>
                </a>
               </div>
            <div className="section-4__content">
              <div className="section-4__tag">Kiến thức thú cưng</div>
              <div className="section-4__suggest">Pomeranian là gì? Cách nhận biết chó Pomeranian</div>
              <div className="section-4__desc"> Pomeranian hay còn gọi là chó Pomeranian (chó Pom) luôn nằm trong top những thú cưng dễ thương nhất. Không chỉ vậy, giống chó xiếc nhỏ nhắn, đáng yêu, thông minh, thân thiện và khéo léo.</div>
            </div>
          </div>


          <div className="product-item">
            <div className="section-4__image"><a href="#">
                <img src={section4Image1} alt=""/>
                </a>
               </div>
            <div className="section-4__content">
              <div className="section-4__tag">Kiến thức thú cưng</div>
              <div className="section-4__suggest">Pomeranian là gì? Cách nhận biết chó Pomeranian</div>
              <div className="section-4__desc"> Pomeranian hay còn gọi là chó Pomeranian (chó Pom) luôn nằm trong top những thú cưng dễ thương nhất. Không chỉ vậy, giống chó xiếc nhỏ nhắn, đáng yêu, thông minh, thân thiện và khéo léo.</div>
            </div>
          </div>

        </div>
        <div className="section-4__button-bottom-sc4"><a className="button button--outline" href="#">Xem thêm <i className="fa-solid fa-angle-right"></i></a></div>
      </div>
    </section>

        </>
    )
}