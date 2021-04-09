import Title from "antd/lib/skeleton/Title";
import React, { useState } from "react";
import DangKy from "../Pages/DangKy";
import DangNhap from "../Pages/DangNhap";
import LienHe from "../Pages/LienHe";
import Modal from "./Modal";

const DangKyWithModal = new Modal("Đăng ký", DangKy);
const DangNhapWithModal = new Modal("Đăng nhập", DangNhap);
export default function DemoHOC(props) {
  const [state, setState] = useState("DK");
  const renderModal = () => {
    if (state === "DK") {
      return DangKyWithModal;
    } else {
      return DangNhapWithModal;
    }
  };
  return (
    <div>
      <button
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          setState("DK");
        }}
      >
        Mở form đăng ký
      </button>
      <button
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          setState("DN");
        }}
      >
        Mở form đăng nhập
      </button>
      {renderModal()}
    </div>
  );
}
