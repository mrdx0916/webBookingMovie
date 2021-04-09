


import { suaLichChieuApiAction } from "../Redux/const/QuanLyPhimAction";


import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export default function ModalTaoLichChieu(props) {
    const lichChieu = props.lichChieu;
    const dispatch = useDispatch()
    return (
        <>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button onClick={() => { dispatch(suaLichChieuApiAction(lichChieu)) }} type="button" className="btn btn-success">Tạo Lịch Chiếu</button>
        </>
    )
}




