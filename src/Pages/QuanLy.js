import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { history } from "../Util/history";
import { deletePhimApi, layDanhSachPhimPhanTrang } from "../Redux/const/QuanLyPhimAction";
import { NavLink } from 'react-router-dom';
import { MdCreateNewFolder, MdDelete } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import ModalTaoLichChieu from '../Components/ModalTaoLichChieu';
import ModalSuaLichChieu from '../Components/ModalSuaLichChieu';
import Modal from '../HOC/Modal';
import Swal from "sweetalert2";
import SuaThongTinPhim from '../Components/SuaThongTinPhim';
export default function QuanLy(props) {
    const userLogin = useSelector((state) => state.QuanLyNguoiDungReducer.values);
    const danhSachFilmPhanTrang = useSelector(state => state.QuanLyPhimReducer.danhSachFilmPhanTrang)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimPhanTrang(1))
    }, [])
    const [page, setPage] = useState(1)
    const [componentModal, setComponentModal] = useState();
    useEffect(() => {
        dispatch(layDanhSachPhimPhanTrang(page))
    }, [page])

    const deletePhim = (maPhim) => {
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
                dispatch(await deletePhimApi(maPhim))
            }
        })
    }
    const renderPageManageFilm = () => {
        if (userLogin) {
            return <div className="ml-3">
                <div>
                    <NavLink to="/admin/themphim" style={{ fontSize: "25px", color: "blue" }}>Thêm Phim</NavLink>
                </div>

                <div style={{ width: "100%" }} className="quanLyPhim00 row">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Mã Phim</th>
                                <th scope="col">Tên phim</th>
                                <th scope="col">Hình Ảnh</th>
                                <th scope="col">Mô Tả</th>
                                <th scope="col">Mã Nhóm </th>
                                <th scope="col">Ngày Khởi Chiếu </th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {danhSachFilmPhanTrang?.items?.map((film, index) => {
                                return <>
                                    <tr style={{ width: "100%" }}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{film.tenPhim}</td>
                                        <td><img style={{ width: 50, height: 50 }} src={film.hinhAnh} alt={film.hinhAnh} /></td>
                                        <td></td>
                                        <td>GP01</td>
                                        <td>{film.ngayKhoiChieu}</td>
                                        <td>
                                            <div>
                                                {/* Button trigger modal */}
                                                <button onClick={() => setComponentModal(<ModalSuaLichChieu maPhim={film.maPhim} film={film} index={index} />)} type="button" class="btn btn-primary p-0" data-toggle="modal" data-target={`#modelId`}>
                                                    <div className='p-2' data-toggle="tooltip" data-placement="bottom" title="Thêm Lich Chiếu"><MdCreateNewFolder /></div>
                                                </button>
                                                <button onClick={() => setComponentModal(<SuaThongTinPhim film={film} />)} type="button" class="btn btn-success mx-1 p-0" data-toggle="modal" data-target={`#modelId`}>
                                                    <div className='p-2' data-toggle="tooltip" data-placement="bottom" title="Sửa Lich Chiếu"><GiAutoRepair /> </div>
                                                </button>
                                                <button onClick={() => { deletePhim(film.maPhim) }} type="button" class="btn btn-danger p-0" data-toggle="modal" >
                                                    <div className='p-2' data-toggle="tooltip" data-placement="bottom" title="Xóa"><MdDelete /> </div>
                                                </button>
                                                {/* Modal */}
                                                {/* <div className="modal fade" id={`exampleModal${index}`} tabIndex={-1} aria-labelledby={`exampleModalLabel${index}`} aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <ModalSuaLichChieu Component={state} maPhim={film.maPhim} film={film} index={index} />

                                                    </div>
                                                </div> */}
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        } else {
            alert("bạn không phải admin");
            history.goBack();
        }
    }
    const renderPaginatiom = () => {
        let arrayPage = [];
        if ((page - 4 > 0)) {
            for (let i = page - 4; i < (page + 6); i++) {
                let active = i === page ? "active" : "";
                if (i <= danhSachFilmPhanTrang.totalPages) {
                    arrayPage.push(<li key={i} className={"page-item " + active}><a className="page-link" onClick={() => handleChange(i)}>{i}</a></li>)
                } else {
                    let indexs = i - danhSachFilmPhanTrang.totalPages;
                    arrayPage.splice(indexs - 1, 0, <li key={indexs} className={"page-item " + active}><a className="page-link" onClick={() => handleChange(indexs)}>{indexs}</a></li>)
                }
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                let active = i === page ? "active" : "";
                if (i <= danhSachFilmPhanTrang.totalPages) {
                    arrayPage.push(<li key={i} className={"page-item " + active}><a className="page-link" onClick={() => handleChange(i)}>{i}</a></li>)
                }
            }
        }
        return arrayPage
    }
    const handleChange = (pageNumber) => {
        setPage(pageNumber)
    }
    const PreviousNext = (paraNumber) => {
        if (paraNumber) {
            setPage(page + 1)
        } else {
            setPage(page - 1)
        }
    }
    return (
        <div>
            {renderPageManageFilm()}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                        <a onClick={() => PreviousNext(false)} className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                    </li>
                    {renderPaginatiom()}

                    <li className={`page-item ${page === danhSachFilmPhanTrang.totalPages ? 'disabled' : ''}`}>
                        <a onClick={() => PreviousNext(true)} className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            <Modal Component={componentModal} />
        </div>
    )
}
