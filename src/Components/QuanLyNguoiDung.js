
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { history } from "../Util/history";
import { danhSachNguoiDungPhanTrangApiAction, layDanhSachNguoiDungApi, suaThongTinNguoiDungApiAction, timKiemNguoiDungPhanTrangApiAction, xoaNguoiDungApiAction } from '../Redux/const/QuanLyNguoiDungAction';
import { MdCreateNewFolder, MdDelete } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import Modal from '../HOC/Modal';
import { Pagination } from 'antd';
import Swal from "sweetalert2";

import ComponentThem from './ComponentThem';

export default function QuanLyNguoiDung(props) {
    const userLogin = useSelector((state) => state.QuanLyNguoiDungReducer.values);
    // const { danhSachNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    const { danhSachNguoiDungPhanTrang } = useSelector((state) => state.QuanLyNguoiDungReducer)
    const [user, setUser] = useState({});
    const [tuKhoa, setTuKhoa] = useState("")
    const [pagenumber, setPagenumber] = useState(1);

    useEffect(async () => {
        dispatch(await layDanhSachNguoiDungApi())
    }, [])
    useEffect(async () => {
        if (!tuKhoa) {
            dispatch(await danhSachNguoiDungPhanTrangApiAction(pagenumber))
        } else {
            dispatch(await timKiemNguoiDungPhanTrangApiAction(pagenumber, tuKhoa))
        }

    }, [pagenumber, tuKhoa])
    // useEffect(async () => {
    //     dispatch(await timKiemNguoiDungPhanTrangApiAction(tuKhoa))
    // }, [tuKhoa])
    console.log("danhSachNguoiDungPhanTrang", danhSachNguoiDungPhanTrang);
    const renderPageManageNguoiDung = () => {
        if (userLogin) {
            return <div className="ml-3">
                <div>
                    <NavLink to="/admin/themnguoidung" style={{ fontSize: "25px", color: "blue" }}>Thêm Nguoi Dung</NavLink>

                </div>
                <div className="form-group">
                    <p>Tìm Kiếm Người Dùng</p>
                    <input onChange={(e) => handleTimKiem(e)} className="form-control" />
                </div>
                <div style={{ width: "100%" }} className="quanLyPhim00 row ">
                    <table style={{ width: "100%" }} className="text-left table table-striped">
                        <thead style={{ width: "100%" }}>
                            <tr style={{ width: "100%" }}>
                                <th scope="col">STT</th>
                                <th scope="col">Tài Khoản</th>
                                <th scope="col">Mật Khẩu</th>
                                <th scope="col">Họ Tên</th>
                                <th scope="col">Email </th>
                                <th scope="col">Số Điện Thoại </th>
                                <th scope="col">Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody style={{ width: "100%" }}>

                            {danhSachNguoiDungPhanTrang?.items?.map((person, index) => {
                                // console.log(person);
                                return <>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{person.taiKhoan}</td>
                                        <td>{person.matKhau}</td>
                                        <td>{person.hoTen}</td>
                                        <td>{person.email}</td>
                                        <td>{person.soDt}</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button" class="btn btn-primary p-0" data-toggle="modal" data-target={`#modelId`}>
                                                    <div className='p-2' data-toggle="tooltip" data-placement="bottom" title="ghi danh"><MdCreateNewFolder /></div>
                                                </button>
                                                <button onClick={() => { setUser(person) }} type="button" class="btn btn-success mx-1 p-0" data-toggle="modal" data-target={`#modelId`}>
                                                    <div className='p-2' data-toggle="tooltip" data-placement="bottom" title="Sửa Người Dùng"><GiAutoRepair /> </div>
                                                </button>
                                                <button onClick={() => handleDelete(pagenumber, person.taiKhoan)} type="button" class="btn btn-danger p-0" data-toggle="modal" >
                                                    <div className='p-2' data-toggle="tooltip" data-placement="bottom" title="Xóa"><MdDelete /> </div>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            })}

                        </tbody>

                    </table>
                </div>
            </div>
        }
        else {
            alert("bạn không phải admin");
            history.goBack();
        }
    }
    const handleSubmit = (info) => {
        dispatch(suaThongTinNguoiDungApiAction(info))
    }
    const handleTimKiem = (e) => {
        let { name, value } = e.target;
        setTuKhoa(value)
        console.log("tuKhoa", tuKhoa);
    }
    const handleDelete = (pageNumber, taiKhoan) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(await xoaNguoiDungApiAction(pageNumber, taiKhoan))
            }
        })
    }
    const handlePagination = (page) => {
        setPagenumber(page)
    }
    return (
        <div style={{ width: "100%" }}>
            {renderPageManageNguoiDung()}
            <Pagination onChange={(page) => { handlePagination(page) }} defaultCurrent={1} total={danhSachNguoiDungPhanTrang.totalCount} />
            <Modal Component={<ComponentThem handleOnsubmit={handleSubmit} user={user} />} />
        </div>
    )
}
// danhSachNguoiDungPhanTrang.totalPages