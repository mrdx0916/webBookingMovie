import React from 'react';
import moment from "moment";
// import { NavLink } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Muave from '../Pages/Muave';
export default function ChiTietPhimLichChieuThoiGianChieu(props) {
    return (
        <>

            {props.ds.cumRapChieu.map((detail, index) => {
                return <div className="d-block d-md-flex">
                    <div className="d-flex d-md-block">
                        <img style={{ width: 50, height: 50 }} src={props.chiTietDetail.hinhAnh} />
                        <a className="px-2 d-block d-md-none" style={{ color: 'blue', fontWeight: "700" }} href={`#${detail.maCumRap}`} aria-expanded="false" data-toggle="collapse">{detail.tenCumRap}</a>
                    </div>
                    <div className="123 ms-2 ">
                        <a className="px-2 d-none d-md-block" style={{ color: 'blue', fontWeight: "700" }} href={`#${detail.maCumRap}`} aria-expanded="false" data-toggle="collapse">{detail.tenCumRap}</a>
                        <span style={{ color: "orange" }}>{detail.lichChieuPhim[0].thoiLuong}<span>phut</span> <span>{`123phim NumBer :${detail.lichChieuPhim[0].maRap}`}</span></span>
                        <div className=" row collapse show mt-5 mb-3" id={`${detail.maCumRap}`}>
                            {detail.lichChieuPhim.slice(0, 8).map((detail2, index) => {
                                return <NavLink to={"/muave/" + detail2.maLichChieu} key={index} className='col-3'>
                                    <button className="mt-2 btn btn-success">{moment(detail2.ngayChieuGioChieu).format("hh:mm A")}</button>
                                </NavLink>
                            })}
                        </div>
                    </div>
                </div>
            })}




        </>
    )
}
