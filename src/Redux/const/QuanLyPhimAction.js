import ExportTypography from "antd/lib/typography/Typography";
import Axios from "axios";
import swal from "sweetalert2";
export const layDanhSachPhimApiAction = () => {
  return (dispatch) => {
    var promise = Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
    promise.then((res) => {
      dispatch(layDanhSachPhimApi(res.data));
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};
export const layDanhSachPhimApi = (dataPhim) => {
  return {
    type: "LAY_DANH_SACH_PHIM_ACTION",
    dsPhim: dataPhim,
  };
};
export const layDSRapApiAction = async () => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
      dispatch({
        type: "LAY_DANH_SACH_RAP",
        dsRap: result.data,
      });
    } catch (err) {
      // console.log(err);
    }
  };
};
export const layDanhSachCumRapApiAction = async (maHeThongRap) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_DANH_SACH_CUM_RAP",
        dsCumRap: result.data,
        ma: maHeThongRap,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};
export const layThongTinPhimApiAction = async (maHeThongRap) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
        method: "GET"
      })
      dispatch({
        type: "LAY_THONG_TIN_RAP_&_LICH_CHIEU",
        dsThongTin: result.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const layThongTinLichChieuHeThongRapAllApiAction = async () => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
        method: "GET"
      })
      dispatch({
        type: "LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_ALL",
        dsThongTinAll: result.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const layThongTinLichChieuPhim = async (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET"
      })
      dispatch({
        type: "LAY_THONG_TIN_LICH_CHIEU",
        danhSachLichChieu: result.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const layChiTietPhimApiAction = async (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET"
      })
      dispatch({
        type: "LAY_CHI_TIET_PHIM",
        chitietPhim: result.data
      })
    } catch (err) {
      console.log(err);
    }
  }
}
export const layDSRapApi = (dataRap) => {
  return {
    type: "LAY_DANH_SACH_RAP",
    dsRap: dataRap,
  };
};
export const layThongTinPhongDatVe = async (maLichChieu) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET"
      })
      dispatch({
        type: "THONG_TIN_PHONG_VE",
        danhSachPhongVe: result.data
      })
    } catch (err) {
      console.log(err);
    }
  }
}
export const layThongTinHeThongRapMuaVeApiAction = async () => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
        method: "GET"
      })
      dispatch({
        type: "LAY_THONG_TIN_RAP_MUA_VE",
        dsRapMuaVe: result.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const layHinhAnhPhimChoTTTaiKhoan = (tenPhim) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`,
        method: "GET"
      })
      result.then((res) => {
        dispatch({
          type: "HINH_ANH_PHIM_THEO_TEN_PHIM",
          hinhAnhChiTietPhim: res.data
        })
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const layDanhSachPhimPhanTrang = (page) => {
  return (dispatch) => {
    try {
      let result = Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=5`,
        method: "GET"
      })
        .then(res => {
          dispatch({
            type: "LAY_DS_FILM_PHAN_TRANG",
            danhSachFilmPhanTrang: res.data
          })
        })

    } catch (err) {
      console.log("errpt", err)
    }
  }
}
export const themPhimAction = (list) => {
  return (dispatch) => {
    try {
      let result = Axios({
        url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
        method: "POST",
        data: list
      })
      result.then(res => {
        // dispatch({
        //   type: "THEM_PHIM",
        //   listThemPhim: res.data
        // })
        console.log("themxong", res.data)
      })
    }
    catch (err) {
      console.log(err)
    }
  }
}
export const suaLichChieuApiAction = (list) => {
  console.log(list);
  return (dispatch) => {
    try {
      let result = Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
        method: "POST",
        data: list,
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("ACCESSTOKEN") }
      })
        .then(res => {
          console.log("thành công")
        })
        .catch(err => {
          console.log(err.response)
        })
    } catch (err) {
      console.log();
    }
  }
}
export const suaThongTinPhimUploadApi = (list) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
        method: "POST",
        data: list,
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("ACCESSTOKEN") }
      })
        .then(res => {
          console.log("thanh cong");
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
export const deletePhimApi = (maPhim) => {
  return async (dispatch) => {
    let result = await Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem("ACCESSTOKEN") }
    })
      .then(res => {
        swal.fire("Thông báo", "xoa thành công!", "success");
      })
      .catch(err => {
        swal.fire("Thông báo", err.response.data, "error");
      })
  }
}