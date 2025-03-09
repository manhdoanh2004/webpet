import section1bg8 from "../../assets/Img/section-1_bg8.svg"
import section1bg1 from "../../assets/Img/section-1_bg1.svg"
import section1bg2 from "../../assets/Img/section-1_bg2.svg"
import section1bg7 from "../../assets/Img/section-1_bg7.svg"
import section1bg3 from "../../assets/Img/section1_bg3.svg"
import section1bg4 from "../../assets/Img/section-1_bg4.svg"
import section1bg5 from "../../assets/Img/section-1_bg5.svg"
import section1bg6 from "../../assets/Img/section-1_bg6.svg"
import section1Main1 from "../../assets/Img/section1_Image-1.png"
import section1Main2 from "../../assets/Img/section-1_Image_main2.png"
export const HomeSection1=()=>
{
    return(
        <>
           <div className="section-1">
      <div className="container">
        <div className="section-1__wrap"><img className="section-1__bg8" src={section1bg8} alt=""/>
        <img className="section-1__bg1" src={section1bg1} alt=""/>
          <div className="section-1__content">
            <h1 className="section-1__title">Thêm Một Bạn</h1>
            <h2 className="section-1__subtitle">Thêm Ngàn Niềm Vui!</h2>
            <p className="section-1__desc">Có một con thú cưng đồng nghĩa với việc bạn có thêm niềm vui mới. Chúng tôi có hơn 200 con thú cưng khác nhau có thể đáp ứng nhu cầu của bạn!</p>
            <div className="section-1__buttons"><a className="button button--outline" href="#">
                 Giới Thiệu <i className="fa-regular fa-circle-play"></i></a><a className="button" href="#">Khám Phá Ngay</a></div>
          </div>
          <div className="section-1__image"><img className="section-1__bg7" src={section1bg7} alt=""/>
          <img className="section-1__bg3" src={section1bg3} alt=""/>
          <img className="section-1__image-main" src={section1Main1} alt=""/>
          <img className="section-1__image-main2" src={section1Main2}/>
          <img className="section-1__bg4" src={section1bg4} alt=""/>
          <img className="section-1__bg5" src={section1bg5} alt=""/>
          <img className="section-1__bg6" src={section1bg6} alt=""/>
          </div>
          <img className="section-1__bg2" src={section1bg2} alt=""/>
        </div>
      </div>
    </div>
        </>
    )
}