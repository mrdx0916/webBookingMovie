import GlobalHeader from "../Components/GlobalHeader";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "../Components/TcCarousel";
import { layDanhSachPhimApiAction } from "../Redux/const/QuanLyPhimAction";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPlayFill, BsStarHalf } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import HeThongRap from "../Components/HeThongRap";
import GlobalFooter from "../Components/GlobalFooter";
import ModalVideo from "react-modal-video";
export default function TrangChu(props) {
  const dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimApiAction());
  }, []);
  const [isOpen, setOpen] = useState(false);
  const [idTraiLer, setIdtraiLer] = useState();

  const renderStar = (a) => {
    let mystar = [];
    let diem = a.danhGia / 2;
    for (let j = 0; j < 5; j++) {
      if (j <= diem - 1) {
        mystar.push(<AiFillStar />);
      } else if (a.danhGia % 2 !== 0 && j < diem) {
        mystar.push(<BsStarHalf />);
      } else {
        mystar.push(<AiOutlineStar />);
      }
    }
    return mystar;
  };

  // console.log('dsPhim', dsPhim);
  const renderPhim = (so1, so2) => {
    return dsPhim.slice(so1, so2).map((DanhSach, index) => {
      return (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 dsPhimcard" key={index}>
          <button onClick={() => {
            setOpen(true);
            setIdtraiLer(DanhSach.trailer.split("/")[4]);
          }} className="iconPlay">
            <BsPlayFill />
          </button>
          <NavLink target="_blank" className="card tiltle1 text-center" to={"/chitietphim/" + DanhSach.maPhim}>

            <img id="tiltleimgId"
              className="card-img-top tiltleimg"
              style={{ width: "100%", height: 250 }}
              src={DanhSach.hinhAnh}
              alt={DanhSach.hinhAnh}
            />
            <div className="card-body tiltlebody">
              <p className="card-title">{DanhSach.tenPhim}</p>
              <p class="card-text">{renderStar(DanhSach)}</p>
            </div>
          </NavLink>
        </div>
      );
    });
  };

  return (

    <div id="pageTrangChu" className="pageTrangChu  container-fluid">
      <Carousel />
      <ul class="nav nav-tabs d-flex justify-content-center my-5 " id="myTab" role="tablist">
        <li class="nav-item " role="presentation">
          <a
            className="nav-link active "
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Phim Đang chiếu
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Phim Đã Chiếu
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Phim Xắp Chiếu
          </a>
        </li>
      </ul>
      <div class="DanhSachPhim2 tab-content" id="myTabContent">
        <div
          class="DanhSachPhim1 tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {" "}
          <div>
            <div className="DanhSachPhim row">{renderPhim(0, 12)}</div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {" "}
          <div>
            <div className="row">{renderPhim(12, 24)}</div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          {" "}
          <div>
            <div className="row">{renderPhim(24, 36)}</div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={idTraiLer}
        onClose={() => setOpen(false)}
      />
      <HeThongRap />
      {/* <GlobalFooter /> */}
    </div>
  );
}
