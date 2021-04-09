import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinLichChieuPhim } from '../Redux/const/QuanLyPhimAction';
export default function ThoiLuongPhim(props) {
    let maPhims = props.maPhim;
    let danhSachLichChieu = useSelector((state) => state.QuanLyPhimReducer.danhSachLichChieu);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layThongTinLichChieuPhim(maPhims));
    }, []);
    return (
        <>
            <p style={{ fontWeight: "700" }}>{danhSachLichChieu.heThongRapChieu ? danhSachLichChieu.heThongRapChieu[0]?.cumRapChieu[0]?.lichChieuPhim[0]?.thoiLuong : ''} </p>
        </>
    )
}
