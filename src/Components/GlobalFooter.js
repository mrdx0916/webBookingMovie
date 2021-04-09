import React from 'react'
// import data from '../assets/data.json';
import data from './assets/Data.json';
import logo2 from './img/logo2.png';
import zalo from './img/zalo-logo.png';
import facebook from './img/facebook-logo.png';
import logo5 from './img/logo5.png';
import logo6 from './img/logo6.png';
import logo7 from './img/logo7.png';
import logo8 from './img/logo8.jpg';
import logo9 from './img/logo9.png';
import logo10 from './img/logo10.png';
// import logo11 from './img/logo2.png';
// import logo12 from './img/logo2.png';
// import logo13 from './img/logo2.png';
// import logo14 from './img/logo2.png';
// import logo15 from './img/logo2.png';
// import logo16 from './img/logo2.png';
// import logo17 from './img/logo2.png';
// import logo18 from './img/logo2.png';
// import logo19 from './img/logo2.png';


export default function GlobalFooter() {
    console.log('data', data);
    return (
        <div className="footerContent py-5 text-left">
            <div className="footerIntroResponsive d-block d-md-none">
                <div className="row container flex-wrap text-center ">

                    <div className="col-6 text-center text-md-left" style={{ color: "white", fontSize: 12 }}>
                        <p style={{ color: "black" }}>   </p>
                        <p>Thỏa Thuận Sử Dụng</p>
                        <p>Chính Sách Bảo Mật</p>
                    </div>
                    <div className="col-6" style={{ color: "white", fontSize: 12 }}>
                        <div>
                            <a className="mr-1" target="_blank" href="https://www.facebook.com/tix.vn/">
                                <img style={{ width: 40, height: 40 }} src={facebook} />
                            </a>
                            <a className="mr-1" target="_blank" href="https://zalo.me/tixdatve">
                                <img style={{ width: 40, height: 40 }} src={zalo} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="lineFooter" />
                <div className="row container d-block text-center ">
                    <div className=" text-center">
                        <img style={{ width: "20%" }} src="https://tix.vn/app/assets/img/icons/zion-logo.jpg" alt="https://tix.vn/app/assets/img/icons/zion-logo.jpg" />
                    </div>

                    <div className="" style={{ color: "white", fontSize: 12 }}>
                        <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                        <span className="text d-block mt-2">Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                        <span className="text d-block mt-1">Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</span>
                        <span className="text d-block mt-1">đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</span>
                        <span className="text d-block mt-1">Số Điện Thoại (Hotline): 1900 545 436</span>
                        <p>Email: <span>support@tix.vn</span></p>
                    </div>

                    <div className="">
                        <a className="mr-1" target="_blank" href="https://zalo.me/tixdatve">
                            <img style={{ width: 100, height: 50 }} src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="footerIntro d-none d-md-block">
                <div className="row container flex-wrap text-center ">
                    <div className="col-2" style={{ color: "white", fontSize: 12 }}>
                        <p>123Phim</p>
                        <p>FAQ</p>
                        <p>Brand Guidelines</p>
                        <img style={{ width: 50, height: 50 }} src={logo2} alt="" />
                    </div>
                    <div className="col-2 text-center text-md-left" style={{ color: "white", fontSize: 12 }}>
                        <p style={{ color: "black" }}>   </p>
                        <p>Thỏa Thuận Sử Dụng</p>
                        <p>Qui Chế Hoạt Động</p>
                        <p>Chính Sách Bảo Mật</p>
                        <p>Quyền Lợi Thành Viên</p>
                    </div>
                    <div className="col-4" style={{ color: "white", fontSize: 12 }}>
                        <p>ĐỐI TÁC</p>
                        <div className="row ">
                            {data.map((ds, index) => {
                                return <div style={{ width: "20%", height: 50 }} className=" mt-1 pr-2" key={index}>
                                    <a style={{ width: "100%" }} target="_blank" href={ds.url}><img style={{ width: "100%", height: 30 }} src={(ds.logo)} alt={ds.logo} /></a>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-2" style={{ color: "white", fontSize: 12 }}>
                        <p>MOBILE APP</p>
                        <div>
                            <a className="mr-1" target="_blank" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                                <img style={{ width: 40, height: 40 }} src="https://tix.vn/app/assets/img/icons/apple-logo.png"></img>
                            </a>
                            <a target="_blank" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                                <img style={{ width: 40, height: 40 }} src="https://tix.vn/app/assets/img/icons/android-logo.png"></img>
                            </a>
                        </div>


                    </div>
                    <div className="col-2" style={{ color: "white", fontSize: 12 }}>
                        <p>SOCIAL</p>
                        <div>
                            <a className="mr-1" target="_blank" href="https://www.facebook.com/tix.vn/">
                                <img style={{ width: 40, height: 40 }} src={facebook} />
                            </a>
                            <a className="mr-1" target="_blank" href="https://zalo.me/tixdatve">
                                <img style={{ width: 40, height: 40 }} src={zalo} />
                            </a>


                        </div>
                    </div>
                </div>
                <hr className="lineFooter" />
                <div className="row container ">
                    <div className="col-2">
                        <img style={{ width: "100%", height: 50 }} src="https://tix.vn/app/assets/img/icons/zion-logo.jpg" alt="https://tix.vn/app/assets/img/icons/zion-logo.jpg" />
                    </div>
                    <div className="col-8" style={{ color: "white", fontSize: 12 }}>
                        <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                        <span className="text d-block mt-2">Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                        <span className="text d-block mt-1">Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</span>
                        <span className="text d-block mt-1">đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</span>
                        <span className="text d-block mt-1">Số Điện Thoại (Hotline): 1900 545 436</span>
                        <p>Email: <span>support@tix.vn</span></p>
                    </div>
                    <div className="col-2">
                        <a className="mr-1" target="_blank" href="https://zalo.me/tixdatve">
                            <img style={{ width: 100, height: 50 }} src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
