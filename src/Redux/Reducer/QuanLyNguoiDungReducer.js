let userLogin;
if (localStorage.getItem("USER_LOGIN")) {
    userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"))
}

const stateDefault = {
    values: userLogin,
    listGheDangDat: [],
    userDetail: [],
    danhSachNguoiDungPhanTrang: [],
    danhSachTimKiemNguoiDungPhanTrang: [],

}
export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "NGUOI_DUNG_LOGIN": {
            state.values = action.values;
            return { ...state }
        }
        case "LOG_OUT": {
            localStorage.removeItem("ACCESSTOKEN");
            localStorage.removeItem("USER_LOGIN");
            state.values = undefined;
            return { ...state };
        }
        case "GHE_DANG_DAT": {

            let listGheDangDats = [...state.listGheDangDat];
            let indexghe = listGheDangDats?.findIndex(ghes => ghes.maGhe === action.gheDat?.maGhe)
            if (indexghe !== -1) {
                listGheDangDats.splice(indexghe, 1)
            } else {
                listGheDangDats.push(action.gheDat)
            }
            // state.listGheDangDat = listGheDangDats;
            state.listGheDangDat = listGheDangDats;
            return { ...state };

        }
        case "CASE_VÉ_SUCCESS": {
            return { ...state };
        }
        case "THONG_TIN_NGUOI_DUNG": {
            state.userDetail = action.userDetail;
            return { ...state }
        }
        case "LAY_DANH_SACH_NGUOI_DUNG": {
            state.danhSachNguoiDung = action.danhSachNguoiDung;
            return { ...state }
        }
        case "LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG": {
            state.danhSachNguoiDungPhanTrang = action.danhSachNguoiDungPhanTrang;
            return { ...state }
        }
        case "LAY_DANH_SACH_TIM_KIEM_NGUOI_DUNG_PHAN_TRANG": {
            // state.danhSachTimKiemNguoiDungPhanTrang = action.danhSachTimKiemNguoiDungPhanTrang;
            state.danhSachNguoiDungPhanTrang = action.danhSachNguoiDungPhanTrang
            return { ...state }
        }
        default: return { ...state };
    }
}