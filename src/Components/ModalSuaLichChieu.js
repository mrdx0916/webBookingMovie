import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachCumRapApiAction, layDSRapApiAction, layThongTinLichChieuHeThongRapAllApiAction, layThongTinLichChieuPhim, layThongTinPhimApiAction, suaLichChieuApiAction } from "../Redux/const/QuanLyPhimAction";
import moment from 'moment';
import ModalTaoLichChieu from "./ModalTaoLichChieu";

export default function ModalSuaLichChieu(props) {
    const dsRap = useSelector((state) => state.QuanLyPhimReducer.dsRap);
    const dsThongTin = useSelector((state) => state.QuanLyPhimReducer.dsThongTin);
    const dsThongTinAll = useSelector((state) => state.QuanLyPhimReducer.dsThongTinAll);
    const dsCumRap = useSelector((state) => state.QuanLyPhimReducer.dsCumRap);
    const danhSachLichChieu = useSelector((state) => state.QuanLyPhimReducer.danhSachLichChieu);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    useEffect(async () => {
        dispatch(await layDSRapApiAction())
        dispatch(await layThongTinLichChieuHeThongRapAllApiAction())
    }, []);
    const [stateMaHeThongRap, setStateMaHeThongRap] = useState();
    const [stateMaCumRap, setStateMaCumRap] = useState();
    const [stateMaRap, setStateMaRap] = useState();
    const [numberone, setNumberone] = useState(1);
    const [lichChieu, setLichChieu] = useState({
        maPhim: props.maPhim,
        ngayChieuGioChieu: "",
        maRap: 0,
        giaVe: 0
    })
    useEffect(async () => {
        dispatch(await layThongTinPhimApiAction(stateMaHeThongRap));
        dispatch(await layDanhSachCumRapApiAction(stateMaHeThongRap))
    }, [stateMaHeThongRap]);

    let findCumRap = dsCumRap[0]?.cumRap?.find(tenCumRap => tenCumRap.maCumRap = stateMaCumRap);
    // console.log("danhSachLichChieu", danhSachLichChieu);
    let arrTabble = [];
    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "maHeThongRap") {
            setStateMaHeThongRap(value);
            if (!value) {
                arrTabble = []
            }
        } else if (name === "maCumRap") {
            setStateMaCumRap(value)
            if (!value) {
                arrTabble = []
            }
        } else {
            setLichChieu({ ...lichChieu, [name]: value });
            if (name === 'ngayChieuGioChieu') {
                setLichChieu({ ...lichChieu, [name]: moment(value).format("DD/MM/yyyy HH:mm:ss") });

            }
            if (name === 'maRap') {
                setStateMaRap(value)
                if (!value) {
                    arrTabble = []
                }

            }

        }

    }
    const handleChangePage = (pageNumber) => {
        setPage(pageNumber)
    }
    const PreviousNext = (paraNumber) => {
        if (paraNumber) {
            setPage(page + 1)
        } else {
            setPage(page - 1)
        }
    }
    let findOne = dsThongTinAll.find(item => item.maHeThongRap === stateMaHeThongRap);
    let findOne01 = findOne?.lstCumRap?.find(item => item.maCumRap === stateMaCumRap);
    let findOne02 = findOne01?.danhSachPhim.find(item => item.maPhim === props.maPhim);
    let arrmang = Math.ceil(findOne02?.lstLichChieuTheoPhim?.length / 5);
    const renderPaginatiom = () => {
        let arrayPage = [];
        // let findOne = dsThongTinAll.find(item => item.maHeThongRap === stateMaHeThongRap);
        // let findOne01 = findOne?.lstCumRap?.find(item => item.maCumRap === stateMaCumRap);
        // let findOne02 = findOne01?.danhSachPhim.find(item => item.maPhim === props.maPhim);
        // console.log('findOne02', findOne02);
        // let arrmang = Math.ceil(findOne02?.lstLichChieuTheoPhim?.length / 5);
        // console.log('arrmang', arrmang);
        if ((page - 4 > 0)) {
            for (let i = page - 4; i < (page + 6); i++) {
                let active = i === page ? "active" : "";
                if (i <= arrmang) {
                    arrayPage.push(<li key={i} className={"page-item " + active}><a className="page-link" onClick={() => {
                        setPage(i)
                        setNumberone(i * 5)

                    }}>{i}</a></li>)
                } else {
                    let indexs = i - arrmang;
                    arrayPage.splice(indexs - 1, 0, <li key={indexs} className={"page-item " + active}><a className="page-link" onClick={() => handleChangePage(indexs)}>{indexs}</a></li>)
                }
            }
        } else {
            for (let i = 0; i <= 10; i++) {
                let active = i === page ? "active" : "";
                if (i <= arrmang) {
                    arrayPage.push(<li onClick={() => { setNumberone(i * 5) }} key={i} className={"page-item " + active} > <a className="page-link" onClick={() => handleChangePage(i)}>{i}</a></li >)
                }// else {
                //     let indexs = i - danhSachFilmPhanTrang.totalPages;
                //     arrayPage.splice(indexs, 0, indexs)
                // }
            }
        }
        return arrayPage
    }

    const renderTable = (numberone, numbertwo) => {
        let arrdsPhim = []
        if (stateMaHeThongRap) {
            // console.log('dsThongTinAll', dsThongTinAll);
            let findOne = dsThongTinAll.find(item => item.maHeThongRap === stateMaHeThongRap);
            let findOne01 = findOne?.lstCumRap?.find(item => item.maCumRap === stateMaCumRap);
            let findOne02 = findOne01?.danhSachPhim.find(item => item.maPhim === props.maPhim);
            console.log('findOne02', findOne02);
            let arrmang = Math.ceil(findOne02?.lstLichChieuTheoPhim?.length / 5);
            console.log('arrmang', arrmang);
            arrdsPhim = findOne02?.lstLichChieuTheoPhim?.filter((item, index) => {
                return item.maRap === stateMaRap
            })
        }
        return arrdsPhim?.slice(numberone, numbertwo)
            .map((item, index) => {
                console.log("arrdsPhim", arrdsPhim)
                return (

                    <tr key={index}>
                        <td>{item.maLichChieu}</td>
                        <td>{findOne.tenHeThongRap}</td>
                        <td>{findOne01.tenCumRap}</td>
                        <td>{item.ngayChieuGioChieu}</td>
                        <td>{item.giaVe}</td>
                        <td></td>
                    </tr>
                )

            })

        // return arrdsPhim?.slice(numberone, numbertwo)

    }
    return (
        // <div style={{ width: "700px" }} className="modal-content">
        //     <div className="modal-header">
        //         <h4 className="modal-title" id={`exampleModalLabel${props.index}`}>{`Thông Tin Lịch Chiếu Phim Của Phim ${props.film.tenPhim}`}</h4>
        //         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //             <span aria-hidden="true">×</span>
        //         </button>
        //     </div>
        //     <div className="modal-body">
        <>
            <div className="row">
                <div className="col-5">
                    <div className="form-group w-100">
                        <label htmlFor />
                        <select onChange={(e) => { handleChange(e) }} name="maHeThongRap" style={{ width: "100%" }} className="form-control" >
                            <option value="">Chọn hệ thống rạp</option>
                            {dsRap.map((htRap, index) => {
                                return <>
                                    <option value={htRap.maHeThongRap}>{htRap.tenHeThongRap}</option>
                                </>
                            })}

                        </select>
                    </div>
                    <div className="form-group w-100">
                        <label htmlFor />
                        <select onChange={(e) => { handleChange(e) }} name="maCumRap" style={{ width: "100%" }} className="form-control" >
                            <option value="">Chọn Cụm rạp</option>
                            {dsThongTin[0]?.lstCumRap ? dsThongTin[0]?.lstCumRap.map((htCumRap, index) => {
                                return <>
                                    <option value={htCumRap.maCumRap}>{htCumRap.tenCumRap}</option>
                                </>
                            }) : ""}

                        </select>
                    </div>
                    <div className="form-group w-100">
                        <label htmlFor />
                        <select onChange={(e) => { handleChange(e) }} name="maRap" style={{ width: "100%" }} className="form-control" >
                            <option value="">Chọn Rạp</option>
                            {findCumRap?.danhSachRap?.map((htTenRap, index) => {
                                return <>
                                    <option value={htTenRap.maRap}>{htTenRap.tenRap}</option>
                                </>
                            })}

                        </select>
                    </div>
                </div>
                <div className="col-7">
                    <form>
                        Chọn ngày chiếu và giờ chiếu: <input onChange={(e) => { handleChange(e) }} type="datetime-local" name="ngayChieuGioChieu" />
                        {/* <input type="submit" defaultValue="Send" /> */}
                    </form>
                    <div className="form-group ">
                        <label htmlFor />
                        <h5 className="mt-3">chọn thời lượng Phim</h5>
                    </div>
                    <div className="form-group ">
                        <label htmlFor />
                        <h5 className="mt-3">Mã Nhóm mặc định</h5>
                    </div>
                    <div className="form-group ">
                        <span className="mx-3">Giá Vé</span>
                        <input onChange={(e) => { handleChange(e) }} className="text-center " name="giaVe" type="number" />
                    </div>

                </div>

            </div>
            <div className="row">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Mã Lịch Chiếu</th>
                            <th scope="col">Hệ Thống Rạp</th>
                            <th scope="col">Cụm Rạp</th>
                            <th scope="col">Ngày giờ chiếu </th>
                            <th scope="col">Giá Vé </th>
                            <th scope="col">Thời Lượng Phim </th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(numberone, numberone + 5)}
                    </tbody>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={() => { dispatch(suaLichChieuApiAction(lichChieu)) }} type="button" className="btn btn-success">Tạo Lịch Chiếu</button>
                    </div>

                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <a onClick={() => PreviousNext(false)} className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                        </li>
                        {renderPaginatiom()}

                        <li className={`page-item ${page === arrmang ? 'disabled' : ''}`}>
                            <a onClick={() => PreviousNext(true)} className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
        //     </div>
        // </div>

    )
}
