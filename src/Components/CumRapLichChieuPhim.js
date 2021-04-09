import { Divider } from 'antd';
import React, { useEffect, useState } from 'react'
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachCumRapApiAction, layThongTinLichChieuPhim, layThongTinPhimApiAction } from '../Redux/const/QuanLyPhimAction';
import moment from "moment";
import ThoiLuongPhim from './thoiLuongPhim';
export default function CumRapLichChieuPhim(props) {
    let ListFilm = props.stateCumRap;
    const [stateCumRapLichChieu, setStateCumRapLichChieu] = useState(ListFilm);
    // useEffect(() => {
    //     setStateCumRapLichChieu(ListFilm)
    // }, [ListFilm]);
    // console.log("stateCumRapLichChieu", stateCumRapLichChieu)


    return (
        <div className="px-5  py-3 ">
            {ListFilm?.danhSachPhim?.map((film, index) => {
                return <div className="d-flex mb-3 border-bottom border-warning" key={index}>
                    <div >
                        <img className="mr-3 " style={{ width: 50, height: 50 }} src={film.hinhAnh} alt={film?.hinhAnh} />
                    </div>
                    <div>
                        <p style={{ fontWeight: "700", color: "orange" }}>{film.tenPhim}</p>
                        <ThoiLuongPhim maPhim={film.maPhim} />
                        <div class="row">
                            {film?.lstLichChieuTheoPhim?.slice(0, 6).map((gio, index) => {
                                return <div className="col-3 py-2" style={{ color: "green" }} key={index}>{moment(gio.ngayChieuGioChieu).format("hh:mm A")}</div>
                            })}
                        </div>

                    </div>
                </div>
            })}
        </div>

    )
}

