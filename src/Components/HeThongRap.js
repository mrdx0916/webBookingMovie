import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDSRapApiAction } from "../Redux/const/QuanLyPhimAction";
import HethongRapCumRap from "./HethongRapCumRap";
export default function HeThongRap(props) {
  const dsRap = useSelector((state) => state.QuanLyPhimReducer.dsRap);
  const [stateRap, setStateRap] = useState("BHDStar");
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(await layDSRapApiAction());
  }, []);
  useEffect(() => {
    setStateRap(dsRap[0]?.maHeThongRap)
  }, [dsRap])
  return (
    <div id="heThongRapContainerId" className=" heThongRapContainer container my-5 mx-xl-5 mx-md-0 px-0 d-flex justify-content-center">
      <div style={{ width: "100%", backgroundColor: "#21252985", }} id="HeThongRapNotRespnsive" className="HeThongRapNotRespnsive mx-auto row justify-content-center container d-flex border border">
        <div style={{ height: "100px" }} className="col-sm-12 col-md-2 col-xl-1 d-flex d-md-block justify-content-center">
          {dsRap.map((rap, index) => {
            return (
              <div className="m-2 , p-1 border-bottom border-danger d-flex justify-content-center" style={{ width: "40px", height: "40px", cursor: "pointer" }} onClick={() => { setStateRap(rap.maHeThongRap) }} key={index}>
                <img
                  style={{ width: 50, height: 50 }}
                  src={rap.logo}
                  alt={rap.logo}
                />
              </div>
            );
          })}
        </div>
        <div className="col-10 col-xl-11">
          <HethongRapCumRap m={"mx-0 mx-lg-5"} maHeThongRap={stateRap} />
        </div>
      </div>
    </div>
  );
}
