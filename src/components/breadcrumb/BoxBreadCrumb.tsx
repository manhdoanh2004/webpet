export const BoxBreadCrumb=()=>
{
    return (
        <>
    <nav className="box-breadcrumb"> 
      <div className="container">
        <ul className="box-breadcrumb__list">
          <li className="box-breadcrumb__item"> <a className="box-breadcrumb__link" href="#">Trang chủ</a><i className="fa-solid fa-angle-right"></i> </li>
          <li className="box-breadcrumb__item"> <a className="box-breadcrumb__link" href="#">Chó</a><i className="fa-solid fa-angle-right"></i> </li>
          <li className="box-breadcrumb__item"> <a className="box-breadcrumb__link" href="#">Chó nhỏ</a><i className="fa-solid fa-angle-right"></i> </li>
        </ul>
      </div>
    </nav>
        </>
    )
}