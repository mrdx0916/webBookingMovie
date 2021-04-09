import React from "react";
import { useSelector } from "react-redux";
import ChiTietPhimLichChieuThoiGianChieu from "./ChiTietPhimLichChieuThoiGianChieu";
import ChiTietPhimPosterChitiet from "./ChiTietPhimPosterChitiet";
import TabMenu from "../Components/TabMenu";
import MenuHeThongRap from "../Components/MenuHeThongRap";
import MenuMobi from "../Components/MenuMobi";

export default function ChiTietPhimLichChieu(props) {
  let chiTietDetail = props.chitietPhim;
  const renderLeftMenu = () => {
      return (
        chiTietDetail?.heThongRapChieu?.map((ds, index) => {
            let active = index === 0 ? "active" : "";
            return <a key={index} className={"d-flex pb-4 nav-link align-items-center justify-content-center justify-content-xl-start " + active} id="v-pills-home-tab" data-toggle="pill" href={`#${ds.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                <img style={{ width: 50, height: 50 }} src={ds.logo} alt={ds.logo} />
                <span className="px-2 d-none d-xl-block" style={{ color: 'black', fontWeight: "700" }}>{ds.tenHeThongRap}</span>
            </a>
        }))
  }
  const renderRightMenu = () => {
    return chiTietDetail?.heThongRapChieu?.map((ds, index) => {
        let active = index === 0 ? "active" : "";
        return <div className={"tab-pane w-100 fade show " + active} id={ds.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
            <ChiTietPhimLichChieuThoiGianChieu chiTietDetail={chiTietDetail} ds={ds} index={index} />
        </div>
    })
  };
  const renderMobiMenu = () => {
    return (
        chiTietDetail?.heThongRapChieu?.map((ds, index) => {
      return (
          <>
            <MenuMobi logo={ds.logo} tenHeThongRap={ds.tenHeThongRap} collapseMenu={<ChiTietPhimLichChieuThoiGianChieu chiTietDetail={chiTietDetail} ds={ds} index={index} />}/>
            {/* <p>
                <a class="d-flex pb-4 nav-link align-items-center" data-bs-toggle="collapse" href={`#${ds.maHeThongRap}-mobi`} role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img style={{ width: 50, height: 50 }} src={ds.logo} alt={ds.logo} />
                    <span className="px-2 d-none d-xl-block" style={{ color: 'black', fontWeight: "700" }}>{ds.tenHeThongRap}</span>
                </a>
             </p>
            <div class="collapse multi-collapse" id={ds.maHeThongRap+"-mobi"}>
                <div class="card card-body">
                
                </div>
            </div> */}
        </>
      )}))
  }
  return (
    <div className="ChiTietPhimLichChieu01 pt-3">
      <div
        style={{ background: `url(${chiTietDetail.hinhAnh})` }}
        className=" ChiTietPhimLichChieu02 py-5"
      >
        <ChiTietPhimPosterChitiet chiTietDetail={chiTietDetail} />
      </div>
      <div style={{ backgroundColor: "#0a2029" }}>
        <TabMenu content={[{title:"Lịch chiêu",href:"lichChieu",menuContent:<MenuHeThongRap menuLeft={renderLeftMenu()} menuRight={renderRightMenu()} menuMobi ={renderMobiMenu()}/>},
                            {title:"Thông tin",href:"thongTin",menuContent:"Thông tin"},
                            {title:"Đánh giá",href:"danhGia",menuContent:"Đánh giá"}
                        ]} 
        />
      </div>
    </div>
  );
}
