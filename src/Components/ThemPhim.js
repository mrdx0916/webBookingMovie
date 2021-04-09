import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { themPhimAction } from '../Redux/const/QuanLyPhimAction';
export default function ThemPhim() {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        hinhAnh: {},
        maPhim: '',
        tenPhim: '',
        trailer: '',
        moTa: '',
        maNhom: 'GP01'
    })
    const [chooseFile, setChooseFile] = useState("chooseFile...");
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
    // const handleNameFile = (e) => {


    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        for (let key in state) {
            form_data.append(key, state[key])
        }
        dispatch(themPhimAction(form_data))

    }
    // const handleOnBlur = () => {

    // }

    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <p>Mã Phim</p>
                        <input required onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="maPhim" />

                    </div>
                    <div className="form-group">
                        <p>Tên Phim</p>
                        <input onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="tenPhim" />

                    </div>
                    <div className="form-group">
                        <p>TraiLer</p>
                        <input onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="traiLer" />

                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <p>Ngày Khởi Chiếu</p>
                        <input required onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="ngayKhoiChieu" />

                    </div>
                    <div className="form-group">
                        <p>Đánh Giá</p>
                        <input required onChange={(e) => { handleChange(e) }} className="form-control" type="text" name="danhGia" />

                    </div>
                    <div className="form-group mb-3">
                        <p>Hình Ảnh</p>
                        <div className="custom-file">
                            <input required name="hinhAnh" onChange={(e) => { handleChange(e) }} type="file" className="custom-file-input" id="inputGroupFile02" />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                                {chooseFile}
                            </label>
                        </div>

                    </div>
                </div>
                <button className="btn btn-primary">add</button>
            </div>
        </form>
    )
}
