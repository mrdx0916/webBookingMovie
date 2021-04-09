import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachCumRapApiAction, layThongTinPhimApiAction } from "../Redux/const/QuanLyPhimAction";
import CumRapLichChieuPhim from "./CumRapLichChieuPhim";
import MenuMobiTrangChuCumRap from "./MenuMobiTrangChuCumRap";
// import CumRapLichChieuPhim from "./CumRapLichChieuPhim";

export default function HethongRapCumRap(props) {
  const dsThongTin = useSelector((state) => state.QuanLyPhimReducer.dsThongTin);
  const [stateCumRap, setStateCumRap] = useState(dsThongTin[0]?.lstCumRap);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(await layThongTinPhimApiAction(props.maHeThongRap));
  }, [props.maHeThongRap]);
  useEffect(() => {
    setStateCumRap(dsThongTin[0]?.lstCumRap[0]?.danhSachPhim)
  }, [dsThongTin[0]?.lstCumRap?.danhSachPhim]);

  console.log("dsThongTin", dsThongTin);
  return (
    <div className={`row ${props.m}  `}>
      <div className="col-12 col-md-5 py-3 ">
        {dsThongTin[0]?.lstCumRap?.map((rap, index) => {
          return (
            <>
            <div className='d-none d-md-flex py-2 border-bottom border-success ' onClick={() => { setStateCumRap(rap) }} key={index}>
              <div><img src={dsThongTin[0].logo} alt={dsThongTin[0]?.tenHeThongRap} width={50} height={50} /></div>
              <div><p className="pl-2">{rap?.tenCumRap}</p><p className="pl-2">{rap?.diaChi}</p></div>
            </div>
            <div className="d-block d-md-none">
            <MenuMobiTrangChuCumRap 
              menuTitle={
                <div className='d-flex py-2 border-bottom border-success ' onClick={() => { setStateCumRap(rap) }} key={index}>
                  <div><img src={dsThongTin[0].logo} alt={dsThongTin[0]?.tenHeThongRap} width={50} height={50} /></div>
                  <div><p className="pl-2">{rap?.tenCumRap}</p><p className="pl-2">{rap?.diaChi}</p></div>
                </div>
              }
              collapseMenu={<CumRapLichChieuPhim stateCumRap={stateCumRap} />}
            />
            </div>
            </>
          )
        })}
      </div>
      <div className=" col-12 col-md-7 d-none d-md-flex">
        <CumRapLichChieuPhim stateCumRap={stateCumRap} />
      </div>
    </div>

  )
}
