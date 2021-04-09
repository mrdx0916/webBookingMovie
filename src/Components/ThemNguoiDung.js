import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { themNguoiDungApiAction } from '../Redux/const/QuanLyNguoiDungAction';
import ComponentThem from './ComponentThem';
export default function ThemNguoiDung(props) {
    const dispatch = useDispatch();
    const handleSubmit = (value) => {
        console.log("stateNd", value);
        dispatch(themNguoiDungApiAction(value))
    }
    return (
        <div>
            <ComponentThem handleOnsubmit={handleSubmit} />
        </div>
    )
}
