import {Link } from "react-router-dom"
import frame from "../../assets/Img/Frame.svg"
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
export const Header=()=>
{
    return (
        <>
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__button-menu"><AiOutlineMenu /></div>
          <div className="header__logo">
            <Link to="/">
            <img alt="Monito" src={frame}/></Link></div>
          <nav className="header__menu">
            <ul>
              <li>
                <Link to={"/"}>
                    Trang chủ
                 </Link>
              </li>
              <li>
                <Link to={"/product"}>
                    Danh muc
                 </Link>
              </li>
              <li>
                <Link  to="/about">Giới thiệu</Link>
                </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
          </nav>
          <form className="header__search" action=""><FaSearch />
            <input placeholder="Nhập từ khóa...." type="text"/>
          </form><a className="button" href="#">tham gia cộng Đồng</a>
          <div className="header__button-search"><FaSearch /></div>
        </div>
      </div>
    
    </header>

        </>
    )
}