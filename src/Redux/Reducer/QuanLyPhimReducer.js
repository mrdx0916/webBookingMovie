const stateDefault = {
  dsPhim: [],
  dsCarousel: [
    { hinhAnh: "./img/tt.jpg", traiLer: "SefkmMcA-0E" },
    { hinhAnh: "./img/5.jpg", traiLer: "WDkg3h8PCVU" },
    { hinhAnh: "./img/1.webp", traiLer: "u5A2oCP3l44" },
    { hinhAnh: "./img/7.jpg", traiLer: "XW2E2Fnh52w" },
  ],
  dsRap: [],
  dsCumRap: [],
  dsThongTin: [],
  dsThongTinAll: [],
  danhSachLichChieu: [],
  chitietPhim: [],
  danhSachPhongVe: [],
  dsRapMuaVe: [],
  hinhAnhChiTietPhim: [],
  danhSachFilmPhanTrang: [],
  listThemPhim: [],
};


// let newDsCumRap=[];
export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM_ACTION": {
      state.dsPhim = action.dsPhim;
      return { ...state };
    }
    case "LAY_DANH_SACH_RAP": {
      state.dsRap = action.dsRap;
      return { ...state };
    }
    case "LAY_DANH_SACH_CUM_RAP": {
      let newCumRap = {
        maHeThongRap: action.ma,
        cumRap: action.dsCumRap
      };
      // newDsCumRap.push(newCumRap)
      // state.dsCumRap=newDsCumRap;
      let newDsCumRap = [...state.dsCumRap]
      newDsCumRap.push(newCumRap)
      state.dsCumRap = newDsCumRap
      return { ...state };
    }
    case "LAY_THONG_TIN_RAP_&_LICH_CHIEU": {
      state.dsThongTin = action.dsThongTin;
      return { ...state }
    }
    case "LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_ALL": {
      state.dsThongTinAll = action.dsThongTinAll;
      return { ...state }
    }
    case "LAY_THONG_TIN_LICH_CHIEU": {
      let danhSachLichChieus = { ...state.danhSachLichChieu }
      danhSachLichChieus = action.danhSachLichChieu;
      state.danhSachLichChieu = danhSachLichChieus;
      return { ...state }
    }
    case "LAY_CHI_TIET_PHIM": {
      let chiTietPhims = { ...state.chitietPhim }
      chiTietPhims = action.chitietPhim;
      state.chitietPhim = chiTietPhims
      console.log(" state.chitietPhim", state.chitietPhim)
      return { ...state }
    }
    case "THONG_TIN_PHONG_VE": {
      state.danhSachPhongVe = action.danhSachPhongVe;
      return { ...state }

    }
    case "LAY_THONG_TIN_RAP_MUA_VE": {
      state.dsRapMuaVe = action.dsRapMuaVe;
      return { ...state }
    }
    case "HINH_ANH_PHIM_THEO_TEN_PHIM": {
      state.hinhAnhChiTietPhim = action.hinhAnhChiTietPhim
      return { ...state }
    }
    case "LAY_DS_FILM_PHAN_TRANG": {
      state.danhSachFilmPhanTrang = action.danhSachFilmPhanTrang;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
