import React, { useState, useEffect } from 'react';


export default function ComponentThem({ user, handleOnsubmit }) {
    // console.log("person", user);
    const [stateNd, setStateNd] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
    })
    useEffect(() => {
        if (user) {
            setStateNd({
                taiKhoan: user.taiKhoan,
                matKhau: user.matKhau,
                email: user.email,
                soDt: user.soDt,
                maNhom: "GP01",
                maLoaiNguoiDung: user.maLoaiNguoiDung,
                hoTen: user.hoTen,
            })
        }
    }, [user])
    const handleChange = (e) => {
        let { name, value } = e.target;
        setStateNd({ ...stateNd, [name]: value })
        // console.log("value", value);
    }
    return (
        <form onSubmit={(e) => { e.preventDefault(); handleOnsubmit(stateNd) }} >
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <p>Tài Khoản</p>
                        <input value={stateNd.taiKhoan} onChange={(e) => { handleChange(e) }} required className="form-control" type="text" name="taiKhoan" />

                    </div>
                    <div className="form-group">
                        <p>mật Khẩu</p>
                        <input value={stateNd.matKhau} onChange={(e) => { handleChange(e) }} required className="form-control" type="text" name="matKhau" />

                    </div>
                    <div className="form-group">
                        <p>Họ Tên</p>
                        <input value={stateNd.hoTen} onChange={(e) => { handleChange(e) }} required className="form-control" type="text" name="hoTen" />

                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <p>Email</p>
                        <input value={stateNd.email} onChange={(e) => { handleChange(e) }} required className="form-control" type="text" name="email" />

                    </div>
                    <div className="form-group">
                        <p>Số Điện Thoại</p>
                        <input value={stateNd.soDt} onChange={(e) => { handleChange(e) }} required className="form-control" type="text" name="soDt" />

                    </div>
                    <div className="form-group mb-3">
                        <p>Mã Loại Người Dùng</p>
                        <select value={stateNd.maLoaiNguoiDung} onChange={(e) => { handleChange(e) }} name="maLoaiNguoiDung" className="form-control">
                            <option>KhachHang</option>
                            <option>QuanTri</option>
                        </select>

                    </div>
                </div>
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}
