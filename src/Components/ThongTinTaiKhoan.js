import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { layThongTinNguoiDungDatVe } from '../Redux/const/QuanLyNguoiDungAction';
import { layHinhAnhPhimChoTTTaiKhoan } from '../Redux/const/QuanLyPhimAction';
export default function ThongTinTaiKhoan() {
    const userInfo = useSelector(state => state.QuanLyNguoiDungReducer.values);
    const userDetail = useSelector(state => state.QuanLyNguoiDungReducer.userDetail);
    // const hinhAnhChiTietPhim = useSelector(state => state.QuanLyNguoiDungReducer.hinhAnhChiTietPhim);
    const dispatch = useDispatch();
    console.log("userInfo", userInfo);
    useEffect(() => {
        dispatch(layThongTinNguoiDungDatVe(userInfo.taiKhoan))
    }, [])
    useEffect(() => {
        dispatch(layHinhAnhPhimChoTTTaiKhoan())
    }, [])
    console.log("userDetail", userDetail)
    return (
        <div>

            <div>
                <ul className=" d-flex justify-content-center text-center nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li style={{ fontSize: "25px" }} className=" text-center nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Thông Tin Cá Nhân</a>
                    </li>
                    <li style={{ fontSize: "25px" }} className=" text-center nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Lịch Sử Đặt Vé</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: "100vh", opacity: 0.9, background: "url('https://www.elleman.vn/wp-content/uploads/2016/04/07/batmanvsuperman-elleman8.jpg')", backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                            <div style={{ width: "100%", height: "70%", backgroundColor: "#9494", color: "white" }}>
                                <div className="row d-flex justify-content-center align-items-center" >
                                    <div className="col-6">
                                        <div className="m-5 p-5">
                                            <p className="d-flex"><span >Email: </span> <span style={{ color: "orange" }} className="mx-1"> {userInfo.email}</span></p>
                                            <p className="d-flex"><span>Họ Tên: </span> <span style={{ color: "orange" }} className="mx-1"> {userInfo.hoTen}</span></p>
                                            <p className="d-flex"><span>Số Điện thoại:</span> <span style={{ color: "orange" }} className="mx-1"> {userInfo.soDT}</span></p>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="m-5 p-5">
                                            <p className="d-flex"><span>Tài Khoản:</span> <span style={{ color: "orange" }} className="mx-1"> {userInfo.taiKhoan}</span></p>
                                            <p className="d-flex"><span>Mật Khẩu:</span> </p>
                                            {/* <span className="mx-1"> {userInfo.matKhau}</span> */}
                                            <p></p>
                                        </div>
                                        <button className="btn btn-success">Cập Nhật</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" container tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="lichSuFilm mx-3">
                            {userDetail.thongTinDatVe?.map((dsghe, index) => {
                                return dsghe.danhSachGhe?.map((ds, index) => {
                                    return <div className="lichSuFilm01 row" key={index}>
                                        <div className="col-4">
                                            <h3>{dsghe.tenPhim}</h3>
                                        </div>
                                        <div className="col-8">
                                            <p>{ds.tenHeThongRap}</p>
                                            <div>ngày đặt: <span> {dsghe.ngayDat}</span>-<span>{ds.tenRap}</span>-ghế:<span>{ds.tenGhe}</span></div>
                                        </div>

                                    </div>
                                })
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
