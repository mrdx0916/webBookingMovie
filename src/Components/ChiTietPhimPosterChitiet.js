import React, { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPlayFill, BsStarHalf } from "react-icons/bs";
// import RenderDiemCircle from './RenderDiemCircle';
import { useSelector, useDispatch } from "react-redux";
import RenderDiemCircle from "./RenderDiemCircle";
// import { layDSRapApiAction } from '../Redux/const/QuanLyPhimAction';
export default function ChiTietPhimPosterChitiet(props) {
  // const dsRap = useSelector((state) => state.QuanLyPhimReducer.dsRap);
  // console.log("dsRap", dsRap);
  // const dispatch = useDispatch();
  // useEffect(async () => {
  //     dispatch(await layDSRapApiAction())
  // }, [])
  console.log("chiTietDetail", props.chiTietDetail);
  return (
    // <div className=" row container d-flex justify-content-center py-5">
    //     <div className=" col-2">
    //         <img className=" w-100" src={props.chiTietDetail.hinhAnh} alt={props.chiTietDetail.tenPhim} />
    //     </div>
    //     <div className=" col-3"></div>
    //     <RenderDiemCircle danhGia={props.chiTietDetail.danhGia} />

    // </div>
    <div>
      <div className="ChiTietPhimLichChieuCover"></div>
      <div className=" container circles ">
        <div className="row  align-items-center circle1 d-none d-md-flex">
          <div className="col-3 circle2">
            <img style={{ width: "100%" }} src={props.chiTietDetail.hinhAnh} />
          </div>
          <div className="col-5 circle3 ">
            <div>
              <div className="circleKhoiChieu ">
                {props.chiTietDetail?.ngayKhoiChieu}
              </div>
              <div className="circletenPhim ">
                {props.chiTietDetail?.tenPhim}
              </div>
              <div>
                {props.chiTietDetail.heThongRapChieu
                  ? props.chiTietDetail.heThongRapChieu[0].cumRapChieu[0]
                      .lichChieuPhim[0].thoiLuong
                  : ""}
              </div>
              <div>{props.chiTietDetail.moTa}</div>
              <a href="#ChiTietPhimLichChieu03" className="pd-3 mt-3">
                <button className="btn btn-danger">Mua Vé</button>
              </a>
            </div>
          </div>
          <RenderDiemCircle danhGia={props.chiTietDetail.danhGia} />
        </div>
        <div>
          <h3 className="text-white">{props.chiTietDetail.tenPhim}</h3>
          <iframe
            title={props.chiTietDetail.tenPhim}
            className="w-100 d-block d-md-none"
            src={props.chiTietDetail.trailer}
            height="250px"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
