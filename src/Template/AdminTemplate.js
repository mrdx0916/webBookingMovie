import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Route } from "react-router-dom"
export const AdminTemplate = (props) => {
    let { Component, ...restParam } = props;
    const userLogin = useSelector((state) => state.QuanLyNguoiDungReducer.values);
    return (
        <Route {...restParam} render={(propsRoute) => {
            return (
                <>
                    <div style={{ width: "100%" }} className="container-fluid ">
                        <div style={{ width: "100%" }} className=" border admin01 row">
                            <div className="  d-flex justify-content-center align-items-center p-1 border admin01Left col-3">
                                <h3>DashBoard</h3>
                                <img style={{ width: 70, height: 70 }} src="https://i.imgur.com/lC22izJ.png" />
                            </div>

                            <div style={{ color: "blue", fontSize: "15px" }} className=" d-flex align-items-center justify-content-end  admin01Right col-9">
                                {/* <span className="mx-2">hello </span> <span> {userLogin.taiKhoan}</span> */}
                                <div className="">
                                    <a className="btn  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <div style={{ color: "blue", fontSize: "20px" }} className=" d-flex align-items-center justify-content-end  admin01Right col-9">
                                            <span className="mx-2">hello </span> <span> {userLogin?.taiKhoan}</span>
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><NavLink to="/thongtintaikhoan" className="dropdown-item" type="button">cập nhật tài khoản </NavLink></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%" }} className=" admin02 row">
                            <div style={{ width: "100%" }} className=" text-center border admin01Left col-3">
                                <div style={{ fontSize: "25px" }}>
                                    <NavLink to="/admin">Quản Lý Phim</NavLink>
                                </div>
                                <div className=" border-top" style={{ fontSize: "25px" }}>
                                    <NavLink to="/admin/quanlynguoidung">Quản Lý Người Dùng</NavLink>
                                </div>
                            </div>
                            <div className=" admin01Right col-9 ">

                                <Component {...propsRoute} />
                            </div>
                        </div>
                    </div>
                </>
            )

        }} />
    )
}
