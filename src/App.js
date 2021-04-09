import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "./SCSS/main.scss";
import "antd/dist/antd.css";
import TrangChu from "./Pages/TrangChu";
import { HomeTemplate } from "./Template/HomeTemplate";
import ChiTietPhim from "./Pages/ChiTietPhim";
import Muave from "./Pages/Muave";
import DangKy from "./Components/DangKy";
import DangNhap from "./Components/DangNhap";
import ThongTinTaiKhoan from "./Components/ThongTinTaiKhoan";
import { AdminTemplate } from "./Template/AdminTemplate";
import QuanLy from "./Pages/QuanLy";
import QuanLyNguoiDung from "./Components/QuanLyNguoiDung";
import ThemPhim from "./Components/ThemPhim";
import ThemNguoiDung from "./Components/ThemNguoiDung";

function App() {
  return (
    <>
      <Switch>
        <HomeTemplate exact path="/trangchu" Component={TrangChu} />
        <HomeTemplate exact path="/chitietphim/:maPhim" Component={ChiTietPhim} />
        <HomeTemplate exact path="/" Component={TrangChu} />
        <HomeTemplate exact path="/muave/:maLichChieu" Component={Muave} />
        {/* <HomeTemplate exact path="/dangky" Component={DangKy} /> */}
        <HomeTemplate exact path="/dangnhap" Component={DangNhap} />

        <AdminTemplate exact path="/admin" Component={QuanLy} />
        <AdminTemplate exact path="/admin/quanlynguoidung" Component={QuanLyNguoiDung} />
        <AdminTemplate exact path="/admin/themphim" Component={ThemPhim} />
        <AdminTemplate exact path="/admin/themnguoidung" Component={ThemNguoiDung} />
      </Switch>
      <Route exact path="/dangky">
        <DangKy />
      </Route>
      <HomeTemplate exact path="/thongtintaikhoan" Component={ThongTinTaiKhoan} />


    </>
  );
}

export default App;
