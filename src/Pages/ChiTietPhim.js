import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { layChiTietPhimApiAction } from '../Redux/const/QuanLyPhimAction';
// import data from '../assets/data.json';
import { NavLink } from "react-router-dom";
import ChiTietPhimLichChieu from '../Components/ChiTietPhimLichChieu';
import GlobalFooter from "../Components/GlobalFooter";
// import ChiTietPhimPosterChitiet from '../Components/ChiTietPhimPosterChitiet';
export default function ChiTietPhim(props) {
    let chitietPhim = useSelector((state) => state.QuanLyPhimReducer.chitietPhim);
    const dispatch = useDispatch();
    let maPhim = props.match.params.maPhim;
    useEffect(async () => {
        dispatch(await layChiTietPhimApiAction(maPhim))
    }, [maPhim])
    return (
        <div>

            {/* <p>{chitietPhim?.tenPhim}</p> */}
            <ChiTietPhimLichChieu chitietPhim={chitietPhim} />
        </div>
    )
}
