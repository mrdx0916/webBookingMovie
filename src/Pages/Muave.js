import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import DongHoDemNguoc from '../Components/DongHoDemNguoc';
import { datVeApiAction } from '../Redux/const/QuanLyNguoiDungAction';
import { layThongTinHeThongRapMuaVeApiAction, layThongTinPhongDatVe } from '../Redux/const/QuanLyPhimAction';

export default function Muave(props) {
    const danhSachPhongVe = useSelector(state => state.QuanLyPhimReducer.danhSachPhongVe);
    const dsRapMuaVe = useSelector((state) => state.QuanLyPhimReducer.dsRapMuaVe);
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.values);
    const listGheDangDat = useSelector((state) => state.QuanLyNguoiDungReducer.listGheDangDat);

    const dispatch = useDispatch();
    let maLichChieu = props.match.params.maLichChieu;
    useEffect(async () => {
        dispatch(await layThongTinPhongDatVe(maLichChieu));
    }, [listGheDangDat])
    useEffect(async () => {
        dispatch(await layThongTinHeThongRapMuaVeApiAction());
    }, [listGheDangDat])
    console.log("maLichChieu", maLichChieu);

    let tenRap = dsRapMuaVe.find((ds1) => {
        return ds1.lstCumRap.map(ds2 => {
            return ds2.tenCumRap === danhSachPhongVe?.thongTinPhim?.tenCumRap;
        })
    })
    console.log("danhSachPhongVe", danhSachPhongVe);

    return (
        <div id="muavedi" className="container-fluid mt-3">
            <div className="row">
                <div className="col-10 text-center ">
                    <div className="row">
                        <div className="container d-flex justify-content-between">
                            <div className="container d-flex align-items-center " >
                                <img className="" style={{ width: 70, height: 70 }} src={tenRap?.logo} />

                                <div className="">
                                    <div className="mx-3">{danhSachPhongVe?.thongTinPhim?.tenCumRap}</div>
                                    <div className="mx-3">
                                        <span>{danhSachPhongVe?.thongTinPhim?.ngayChieu}</span> -
                                    <span>{danhSachPhongVe?.thongTinPhim?.gioChieu}</span> -
                                    <span>{danhSachPhongVe?.thongTinPhim?.tenRap}</span>
                                    </div>


                                </div>
                            </div>
                            <div>
                                <div className="text-nowrap" style={{ fontSize: 10, color: "orange" }}>Thời gian giữ ghế</div>
                                <DongHoDemNguoc maLichChieu={maLichChieu} />
                            </div>

                        </div>
                    </div>
                    <img className="my-3" src="https://tix.vn/app/assets/img/icons/screen.png" />
                    <div className="danhSachGhe mb-5">
                        {danhSachPhongVe?.danhSachGhe?.map((ghe, index) => {
                            let classGhe = ghe.loaiGhe === "Vip" ? 'gheVip' : '';
                            let classgheDaDat = ghe.daDat ? "gheDaDat" : "";
                            let disable = ghe.daDat ? 'disabled' : '';
                            let noiDung = ghe.daDat ? 'X' : ghe.stt;
                            let findIndexGhe = listGheDangDat?.findIndex(indexGhe => ghe?.maGhe === indexGhe?.maGhe)

                            let gheDangDats = findIndexGhe !== -1 ? "gheDangDat" : "";
                            // let gheDangDats;
                            // if (findIndexGhe !== -1) {
                            //     gheDangDats = "";
                            // } else {
                            //     gheDangDats = "gheDangDat";
                            // }

                            return <>
                                <button disabled={disable} className={`ghe ${classGhe} ${classgheDaDat} ${gheDangDats} `} key={index}
                                    onClick={() => {
                                        console.log(1);
                                        dispatch({
                                            type: "GHE_DANG_DAT",
                                            gheDat: { maGhe: ghe.maGhe, giaVe: ghe.giaVe, stt: ghe.stt }
                                        })
                                    }}>{noiDung}</button>
                                {(index + 1) % 16 === 0 ? <br /> : ''}
                            </>
                        })
                        }
                    </div>
                </div>
                <div className=" detailRight  col-2">
                    <div className=" px-2 detailRightOA">
                        <div className="" style={{ color: "blue", fontSize: "20px" }}>
                            {danhSachPhongVe.thongTinPhim?.tenPhim}
                        </div>
                        <div>
                            {danhSachPhongVe.thongTinPhim?.tenCumRap}
                        </div>
                        <div>
                            <span>{danhSachPhongVe.thongTinPhim?.ngayChieu}</span>
                            <span>   {danhSachPhongVe.thongTinPhim?.gioChieu}</span>
                            <span>   {danhSachPhongVe.thongTinPhim?.tenRap}</span>
                        </div>
                    </div>
                    <div className="detailRightOB d-flex flex-nowrap justify-content-between">
                        <span style={{ color: "red" }}>Ghế:</span>
                        {listGheDangDat.map(ghe => {
                            return <span className="mx-1">{ghe.stt}  </span>
                        })}
                        <span className="">
                            {listGheDangDat.reduce((tong, ghe, index) => {
                                return tong += ghe.giaVe;
                            }, 0)}
                        đ</span>

                    </div>
                    <div className="detailRightOC">
                        <div className="detailRightOC01">
                            <span>Email:</span> <span> {userLogin.email}</span>
                        </div>
                        <div className="detailRightOC02">
                            <span>Phone:</span> <span> {userLogin.soDT}</span>
                        </div>
                    </div>
                    <div className="detailRightOD">
                        <div>
                            <h5>Hình Thức Thanh Toán</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    <img style={{ width: 40, height: 30 }} src="https://s3img.vcdn.vn/123phim/2018/12/08075f42d0c4bfc8f2063a35d5b9fca7.jpg" />
                                    <span>Thanh toán qua Zalo Pay</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                <label className=" d-flex align-items-center form-check-label" htmlFor="exampleRadios2">
                                    <img style={{ width: 40, height: 30 }} src="https://s3img.vcdn.vn/123phim/2018/12/e20d486bc2a60a2a1d7186c0ec9e177b.png" />
                                    <span> ViSa,Master,JCB</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                <label className=" d-flex align-items-center form-check-label" htmlFor="exampleRadios2">
                                    <img style={{ width: 40, height: 30 }} src="https://s3img.vcdn.vn/123phim/2018/12/784b134b515da6e0cb8779e2a33f8221.png" />
                                    <span> Thẻ ATM nội địa</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                <label className=" d-flex align-items-center form-check-label" htmlFor="exampleRadios2">
                                    <img style={{ width: 40, height: 30 }} src="https://s3img.vcdn.vn/123phim/2018/12/fa954e5ecb81ef0fdc9bb2595dfbd015.png" />
                                    <span> Thanh Toán Tại cửa hàng tiện ích</span>
                                </label>
                            </div>
                            <div>
                                <span className="detailRightODalert" style={{ color: "red" }}>!</span>
                                <span className="detailRightOD01"> Vé đã mua không thể đổi hoặc hoàn tiền
Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</span>
                            </div>
                            <div>
                                <button style={{ width: 200, height: 100 }} className="btn btn-success" onClick={() => {
                                    let objdatVe = {
                                        maLichChieu: maLichChieu,
                                        danhSachVe: listGheDangDat,
                                        taiKhoanNguoiDung: userLogin.taiKhoan
                                    }
                                    dispatch(datVeApiAction(objdatVe))
                                }} >Đặt Vé</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
