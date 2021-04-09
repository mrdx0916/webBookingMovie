import React, { useState } from 'react'
import swal from "sweetalert2";
import { useDispatch } from "react-redux"
import { dangKyNguoiDungApiAction } from '../Redux/const/QuanLyNguoiDungAction';
import { NavLink } from 'react-router-dom';
export default function DangKy() {
    const [values, setValue] = useState({});
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const handleChangeInput = (event) => {
        let { name, value, label } = event.target;
        setValue({
            ...values,
            [name]: value,
        })
        let type = event.target.getAttribute("type")
        // console.log('values', values);
    }
    const handleBlur = (e) => {
        let { name, value, placeholder } = e.target;
        let type = e.target.getAttribute("type");
        // console.log(Object.values(values));
        if (value === "") {
            setError({ ...error, [name]: `${placeholder} không được để trống!!!` });
            // console.log('error', error);
        } else {
            setError({});
        }
        // console.log("errorxxx1", error)
        if (type === "matKhau") {
            const regexPassword = /^[0-9]+$/;
            if (!regexPassword.test(value.trim())) {
                setError({ ...error, [name]: `${placeholder} không hợp lệ` })

            } else {
                setError({});
            }
        }
        // console.log("errorxxx2", error)
        if (type === "reWrite") {
            if (values.matKhau !== values.reWrite) {
                setError({ ...error, [name]: "không đúng" })
            } else {
                setError({})
            }
        }
        // console.log("errorxxx3", error)
        if (type === "email") {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value.trim())) {
                setError({ ...error, [name]: `${placeholder} không hợp lệ` })
            } else {
                setError({})
            }

        }
        // console.log("errorxxx4", error)

        // for (let item of Object.values(values)) {
        //     if (!item) {
        //         setError({ ...error, [name]: `${label} không được để trống!!!` });
        //     }
        // }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
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
            // swal.fire("thông báo", "Đăng ký không thành công ", "error")
            return;
        }
        // swal.fire("Thông báo", "Thêm người dùng thành công!", "success");
        // console.log("valid", valid)

    }
    return (
        <div style={{ width: "100%", height: "100%", opacity: 0.9, background: "url('http://techrum.vn/chevereto/images/2017/05/21/1tTOV.jpg')", backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
            <div style={{ height: "100%", opacity: 0.9 }} className="w-100 py-5 d-flex justify-content-center align-items-center" >
                <form
                    className="card w-50"
                    onSubmit={() => { handleSubmit() }} >
                    <div className="card-header bg-dark text-light font-weight-bold">
                        <NavLink to="/"><img className="mx-2" src="https://i.pinimg.com/236x/63/fb/15/63fb1537a5772e9ed175172e2b78a659.jpg" alt="" style={{ width: "80px", height: "80px", borderRadius: "5px" }} /></NavLink>
                        <span>THÔNG TIN NGƯỜI DÙNG</span>
                    </div>
                    <div className="card-body">
                        <div class="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <span>Tên Đăng Nhập</span>
                                    <input className="form-control" type="text" name="taiKhoan" placeholder="Tên Người Dùng" onChange={(e) => handleChangeInput(e)} onBlur={(e) => handleBlur(e)} />
                                    <div className='text-danger'>{error.tenNguoiDung}</div>
                                </div>
                                <div className="form-group">
                                    <span>mật khẩu</span>
                                    <input className="form-control" type="matKhau" name="matKhau" placeholder="Mật Khẩu" onChange={(e) => handleChangeInput(e)} onBlur={(e) => handleBlur(e)} />
                                    <div className='text-danger'>{error.matKhau}</div>
                                </div>
                                <div className="form-group">
                                    <span>Nhập lại mật khẩu</span>
                                    <input className="form-control" type="reWrite" name="reWrite" placeholder="Nhập lại Mật Khẩu" onChange={(e) => handleChangeInput(e)} onBlur={(e) => handleBlur(e)} />
                                    <div className='text-danger'>{error.reWrite}</div>
                                </div>
                                <div className="form-group">
                                    <span>Họ Tên Người Dùng</span>
                                    <input

                                        className="form-control"
                                        name="hoTen"
                                        onChange={(e) => handleChangeInput(e)}
                                        onBlur={(e) => handleBlur(e)}
                                    />
                                    <div className='text-danger'>{error.hoTen}</div>
                                </div>
                                <div className="form-group">
                                    <span>email</span>
                                    <input

                                        className="form-control"
                                        type="email"
                                        name="email"
                                        placeholder="email"

                                        onChange={(e) => handleChangeInput(e)}
                                        onBlur={(e) => handleBlur(e)}
                                    />
                                    <div className='text-danger'>{error.email}</div>
                                </div>
                                <div className="form-group">
                                    <span>Số điện thoại</span>
                                    <input
                                        type="phoneNumber"
                                        className="form-control"
                                        name="soDt"
                                        onChange={(e) => handleChangeInput(e)}
                                        onBlur={(e) => handleBlur(e)}
                                    />
                                    <div className='text-danger'>{error.soDt}</div>
                                </div>

                                <button className="btn btn-success" type="submit"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        let valid = true;
                                        for (let item in values) {

                                            if (item = "") {
                                                valid = false;
                                                console.log("valid2", valid);
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

                                        // swal.fire("thông báo", "Đăng ký  thành công ", "success")
                                        values.maNhom = "GP01";
                                        values.maLoaiNguoiDung = "khachHang";
                                        dispatch(dangKyNguoiDungApiAction(values))

                                    }}
                                >Đăng Ký</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
