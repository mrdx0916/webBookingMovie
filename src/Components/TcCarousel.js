import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "antd";
import { BsPlayFill } from "react-icons/bs";
import Slider from "react-slick";
export default function TcCarousel() {
  const dsCarousel = useSelector((state) => state.QuanLyPhimReducer.dsCarousel);
  const [isOpen, setOpen] = useState(false);
  const [idTraiLer, setIdtraiLer] = useState();
  const contentStyle = {
    height: "650px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const renderTraiLer = () => {
    return dsCarousel.map((TraiLer, index) => {
      return (
        <div className="div1Carousel" key={index}>
          <h3 className="h3Carousel position-relative" style={contentStyle}>
            {" "}
            <img className="imgCarousel"
              style={{ width: "100%", height: "100%" }}
              src={TraiLer.hinhAnh}
              alt={TraiLer.hinhAnh}
            />
            <button
              className=" btn-primary playVideo"
              onClick={() => {
                setOpen(true);
                setIdtraiLer(TraiLer.traiLer);
              }}
            >
              <BsPlayFill />
            </button>
          </h3>
        </div>
      );
    });
  };
  return (
    <div className="TCcarousel">
      <Carousel >
        <Slider {...settings}>
          {renderTraiLer()}
        </Slider>

      </Carousel>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={idTraiLer}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
