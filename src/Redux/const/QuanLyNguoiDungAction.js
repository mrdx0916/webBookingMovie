import Axios from "axios";
import swal from "sweetalert2";
import { history } from "../../Util/history";
export const dangKyNguoiDungApiAction = (values) => {
    // console.log("valuesaxios", values)
    return (dispatch) => {
        var promise = Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            method: "POST",
            data: values
        })
        promise.then((res) => {
            swal.fire("Thông báo", "Thêm người dùng thành công!", "success");
        })
        promise.catch((err) => {
            swal.fire("thông báo", `Đăng ký không thành công ${err.response?.data} `, "error")
        })
        // try {
        //     let result = await 
        //     swal.fire("Thông báo", "Thêm người dùng thành công!", "success");
        // } catch (err) {
        //     console.log(err)
        //     swal.fire("thông báo", "Đăng ký không thành công ", "error")
        // }
    }

}
export const dangNhapNguoiDungAction = (values) => {
    return (dispatch) => {
        let promise = Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method: "POST",
            data: values
        })
        promise.then((res) => {
            localStorage.setItem("USER_LOGIN", JSON.stringify(res.data))
            localStorage.setItem("ACCESSTOKEN", res.data.accessToken)
            // console.log(" res.data.accessToken", res.data)
            swal.fire("Thông báo", "đăng nhập thành công!", "success");
            dispatch({
                type: "NGUOI_DUNG_LOGIN",
                values: res.data
            })
            // history.push("/");
            history.goBack();
        })
        promise.catch((err) => {
            swal.fire("Thông báo", "đăng nhập không thành công!", "error");
        })
    }

}
export const dangXuatAction = () => {
    return {
        type: "LOG_OUT",

    }
}
export const datVeApiAction = (maLichChieu) => {
    return (dispatch) => {
        let promise = Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            method: "POST",
            data: maLichChieu,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("ACCESSTOKEN") }
        })
            .then((res) => {
                swal.fire("Thông báo", "Đặt vé thành công!", "success");
                dispatch({ type: "CASE_VÉ_SUCCESS" });
            })
            .catch((err) => {
                console.log("fail")
                swal.fire("Thông báo", "đặt vé không thành công!", "success");
            })
    }
}
export const layThongTinNguoiDungDatVe = (taiKhoan) => {
    return (dispatch) => {
        let promise = Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            method: "POST",
            data: { taiKhoan: taiKhoan }
        })
        promise.then((res) => {
            dispatch({
                type: "THONG_TIN_NGUOI_DUNG",
                userDetail: res.data
            })
        })
        promise.catch((err) => {
            console.log(err)
        })
    }
}
export const layDanhSachNguoiDungApi = () => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
                method: "GET"
            })
                .then(res => {
                    dispatch({
                        type: "LAY_DANH_SACH_NGUOI_DUNG",
                        danhSachNguoiDung: res.data
                    })
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
        catch (err) {
            console.log(err);
        }
    }
}
export const themNguoiDungApiAction = (list) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
                method: "POST",
                data: list,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem("ACCESSTOKEN") }
            })
                .then(res => {
                    console.log("success");
                }).catch(err => {
                    console.log(err.response)
                })
        } catch (err) {
            console.log(err);
        }


    }
}
export const suaThongTinNguoiDungApiAction = (info) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: "PUT",
                data: info,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem("ACCESSTOKEN") }
            })
                .then(res => {
                    swal.fire("Thông báo", "Sửa thành công!", "success");
                })
                .catch(err => {
                    console.log(err.response);
                })

        } catch (err) {
            console.log(err);
        }
    }
}
export const danhSachNguoiDungPhanTrangApiAction = (pagenumber) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                // url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=${pagenumber}&soPhanTuTrenTrang=10`,
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${pagenumber}&soPhanTuTrenTrang=10`,
                method: "GET"
            })
                .then(res => {
                    console.log("success");
                    dispatch({
                        type: "LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG",
                        danhSachNguoiDungPhanTrang: res.data
                    });
                })
                .catch(err => {
                    console.log(err.response);
                })
        } catch (err) {
            console.log(err);
        }

    }
}
export const xoaNguoiDungApiAction = (pageNumber, taiKhoan) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: "DELETE",
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem("ACCESSTOKEN") }
            })
            swal.fire("Thông báo", result.data, "success");
            dispatch(await danhSachNguoiDungPhanTrangApiAction(pageNumber))
        } catch (err) {
            console.log(err.response.data);
            swal.fire("Thông báo", err.response.data, "error");

        }
    }
}
export const timKiemNguoiDungPhanTrangApiAction = (pagenumber, tuKhoa) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=${pagenumber}&soPhanTuTrenTrang=10`,
                // url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soPhanTuTrenTrang=10`,
                method: "GET"
            })
                .then(res => {
                    console.log("success");
                    dispatch({
                        type: "LAY_DANH_SACH_TIM_KIEM_NGUOI_DUNG_PHAN_TRANG",
                        // danhSachTimKiemNguoiDungPhanTrang: res.data
                        danhSachNguoiDungPhanTrang: res.data
                    });
                })
                .catch(err => {
                    console.log(err.response);
                })
        } catch (err) {
            console.log(err);
        }

    }
}