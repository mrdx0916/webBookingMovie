import Password from 'antd/lib/input/Password';
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { dangNhapNguoiDungAction } from '../Redux/const/QuanLyNguoiDungAction';

export default function DangNhap() {
    const dispatch = useDispatch();
    const [values, setValue] = useState({});
    const [error, setError] = useState({});
    const handleChange = (e) => {
        let { name, value } = e.target;
        setValue({ ...values, [name]: value });
        // let type = e.target.getAttribute()
    }
    const handleOnBlur = (e) => {
        let { name, value, placeholder } = e.target;
        let type = e.target.getAttribute("type")
        if (value === "") {
            setError({ ...error, [name]: `${placeholder} không được để trống!!!` })
        } else {
            setError({});
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        values.maNhom = "GP01";
        let valid = true;
        for (let tenThuocTinh in values) {
            if (!tenThuocTinh) {
                valid = false;
            }
        }
        for (let tenThuocTinh in error) {
            if (tenThuocTinh !== "") {
                valid = false;
            }
        }
        if (!valid) {
            return;
        }
    }
    return (
        <div>
            <form onSubmit={() => { handleSubmit() }}
                className="card "
            >
                <div className="card-header bg-dark text-light font-weight-bold">
                    <h2>Đăng Nhập</h2>
                </div>
                <div className="card-body">
                    <div class="row">
                        <div className="col-12">
                            <div className="form-group">
                                <span>Tên Đăng Nhập</span>
                                <input className="form-control" type="text" name="taiKhoan" placeholder="Tài Khoản" onChange={(e) => handleChange(e)} onBlur={(e) => handleOnBlur(e)} />

                            </div>
                            <div className="form-group">
                                <span>mật khẩu</span>
                                <input className="form-control" type="password" name="matKhau" placeholder="Mật Khẩu" onChange={(e) => handleChange(e)} onBlur={(e) => handleOnBlur(e)} />

                            </div>





                            <button className="btn btn-success" type="submit"
                                onClick={(event) => {
                                    event.preventDefault();
                                    let valid = true;
                                    for (let item in values) {

                                        if (item = "") {
                                            valid = false;
                                            // console.log("valid2", valid);
                                            // swal.fire("thông báo", "Đăng ký không thành công ", "error")
                                            return;
                                        }
                                    }
                                    for (let item in error) {
                                        if (item) {
                                            valid = false;
                                            console.log("valid", valid);
                                            // swal.fire("thông báo", "Đăng ký không thành công ", "error")
                                            return;
                                        }
                                    }
                                    dispatch(dangNhapNguoiDungAction(values))

                                }}
                            >Log In</button>

                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
