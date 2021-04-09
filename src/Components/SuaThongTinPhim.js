import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { layHinhAnhPhimChoTTTaiKhoan, layThongTinLichChieuPhim, suaThongTinPhimUploadApi } from '../Redux/const/QuanLyPhimAction';
export default function SuaThongTinPhim({ film }) {
    // const hinhAnhChiTietPhim = useSelector((state) => state.QuanLyPhimReducer.hinhAnhChiTietPhim);
    const [state, setState] = useState({
        hinhAnh: null,
        maPhim: film.maPhim,
        tenPhim: film.tenPhim,
        trailer: film.trailer,
        moTa: film.moTa,
        maNhom: 'GP01'
    })
    // console.log("props.film", film);
    const [chooseFile, setChooseFile] = useState("chooseFile...");
    const dispatch = useDispatch();
    // useEffect(async () => {
    //     dispatch(await layHinhAnhPhimChoTTTaiKhoan(props.maPhim))
    // }, [props.maPhim])
    // console.log("hinhAnhChiTietPhim", hinhAnhChiTietPhim);
    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "hinhAnh") {
            setState({ ...state, [name]: e.target.files[0] })
            if (e.target.files[0]?.name) {
                setChooseFile(e.target.files[0]?.name)
            }
        } else {
            setState({ ...state, [name]: value })
        }

        // console.log("value", e.target.files[0]["name"])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        for (let key in state) {
            form_data.append(key, state[key])
        }
        dispatch(suaThongTinPhimUploadApi(form_data))
    }
    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <p>Mã Phim</p>
                        <input placeholder={film.maPhim} onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="maPhim" />

                    </div>
                    <div className="form-group">
                        <p>Tên Phim</p>
                        <input placeholder={film.tenPhim} onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="tenPhim" />

                    </div>
                    <div className="form-group">
                        <p>TraiLer</p>
                        <input placeholder={film.trailer} onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="traiLer" />

                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <p>Ngày Khởi Chiếu</p>
                        <input placeholder={film.ngayKhoiChieu} onChange={(e) => { handleChange(e) }} className="form-control" type="date" name="ngayKhoiChieu" />

                    </div>
                    <div className="form-group">
                        <p>Đánh Giá</p>
                        <input placeholder={film.danhGia} onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="danhGia" />

                    </div>
                    <div className="form-group mb-3">
                        <p>Hình Ảnh</p>
                        <div className="custom-file">
                            <input value={null} name="hinhAnh" onChange={(e) => { handleChange(e) }} type="file" className="custom-file-input" id="inputGroupFile02" />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                                {chooseFile}
                            </label>
                        </div>

                    </div>
                </div>



            </div>
            <div class="row">
                <div className=" col-12 d-flex justify-content-center">
                    <button onClick={() => {

                    }} className="btn btn-primary ">Upload</button>
                </div>
            </div>
        </form>
    )
}
