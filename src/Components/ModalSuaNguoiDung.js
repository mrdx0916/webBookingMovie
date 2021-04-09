import { info } from 'node-sass';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from '../HOC/Modal';
import { suaThongTinNguoiDungApiAction } from '../Redux/const/QuanLyNguoiDungAction';
import ComponentThem from './ComponentThem';
export default function ModalSuaNguoiDung() {
    const dispatch = useDispatch();
    const handleSubmit = (info) => {
        dispatch(suaThongTinNguoiDungApiAction(info))
    }
    return (
        <>
            <ComponentThem handleOnsubmit={handleSubmit} />
        </>
    )
}
