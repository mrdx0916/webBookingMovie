import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { dangXuatAction } from "../Redux/const/QuanLyNguoiDungAction";
import { GiHamburgerMenu } from "react-icons/gi";
export default function GlobalHeader() {
  const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.values);
  const dispatch = useDispatch();
  const [toggleMobi, setToggleMobi] = useState(false)
  // console.log("userLogin", userLogin)
  const renderButtonLogin = () => {
    if (!userLogin) {
      return <div className="nutClick d-block d-md-flex ">
        <NavLink to="/dangnhap">
          <a className="nutNhap py-2" href="#">
            Đăng Nhập
          </a>
        </NavLink>
        <NavLink to="/dangky">
          <a className="nutNhap py-2 ">
            Đăng Ký
          </a>
        </NavLink>
      </div>
    } else {
      return <div className="nutClick  d-flex ">
        <div className="dropdown">
          <a className="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {userLogin.taiKhoan}
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
            <NavLink to="/thongtintaikhoan" className="px-2 d-block" >Thông tin tài khoản</NavLink>
            <a className=" px-2 d-block" onClick={() => {
              dispatch(dangXuatAction())
            }} >
              Đăng xuất
        </a>

          </div>
        </div>
      </div >
    }
  }
  return (
    <>
      <header className="position-fixed w-100 z-index-100">
        <div id="headerGeneral" >
          <div className="headerContainer position-relative container-fluid d-flex justify-content-between align-items-center">
            <img className="headerGeneral__img" style={{ width: 80, height: 80 }} src="https://i.pinimg.com/236x/63/fb/15/63fb1537a5772e9ed175172e2b78a659.jpg" alt="" />
            <div className="portion1 d-none d-md-flex justify-content-center">
              <a href="#section2">Trang Chủ</a>

              <a href="#">Liên Hệ</a>

              <a href="#">Tin tức</a>

              <a className="portion1UngDung" href="#">Ứng Dụng</a>
            </div>
            <div className="d-none d-md-flex justify-content-center">
              {renderButtonLogin()}
            </div>
            <div className="d-block d-md-none">
              <button className="btn" onClick={() => { setToggleMobi(!toggleMobi) }}><GiHamburgerMenu /></button>
            </div>
          </div>

        </div>
        {
          toggleMobi &&
          <div className="position-absolute header-mobi bg-white d-block d-md-none">
            <div className=" w-100 py-2">
              {renderButtonLogin()}
              <div className="w-100 py-2">
                <a href="#section2">Trang Chủ</a>
              </div>
              <div className="w-100 py-2"><a href="#">Liên Hệ</a></div>
              <div className="w-100 py-2"><a href="#">Tin tức</a></div>
              <div className="w-100 py-2"><a className="portion1UngDung" href="#">Ứng Dụng</a></div>
            </div>
          </div>
        }
      </header>
      {toggleMobi && <div className="display-hide d-block d-md-none" onClick={() => { setToggleMobi(false) }}></div>}
    </>
  );
}
