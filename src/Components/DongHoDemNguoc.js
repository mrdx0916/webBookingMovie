import React, { useEffect } from 'react'
import swal from "sweetalert2";
import { NavLink } from "react-router-dom";
export default function DongHoDemNguoc(props) {
    var h = 0; // Giờ
    var m = 5; // Phút
    var s = 0; // Giây

    var timeout; // Timeout

    // function start() {
    //     // Code
    // }

    function stop() {
        clearTimeout(timeout);
    }
    useEffect(() => {

        return () => {
            stop()
        }
    }, [])
    const start = () => {
        /*BƯỚC 1: LẤY GIÁ TRỊ BAN ĐẦU*/
        // if (h === null) {
        //     h = parseInt(document.getElementById('h_val').value);
        //     m = parseInt(document.getElementById('m_val').value);
        //     s = parseInt(document.getElementById('s_val').value);
        // }

        /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
        // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
        //  - giảm số phút xuống 1 đơn vị
        //  - thiết lập số giây lại 59
        if (s === -1) {
            m -= 1;
            s = 59;
        }

        // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
        //  - giảm số giờ xuống 1 đơn vị
        //  - thiết lập số phút lại 59
        if (m === -1) {
            h -= 1;
            m = 59;
        }

        // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
        //  - Dừng chương trình
        if (h == -1) {
            clearTimeout(timeout);
            swal.fire({
                icon: 'info',
                title: 'hết giờ đặt vé...',
                text: 'bạn cần đặt vé lại ',
                footer: '<a href>Đặt vé lại</a>',
                showConfirmButton: false
            })
            return false;
        }

        /*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/
        // document.getElementById("h").innerHTML = h;
        document.getElementById("m").innerHTML = m;
        document.getElementById("s").innerHTML = s;

        /*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
        timeout = setTimeout(function () {
            s--;
            start();
        }, 1000);
    }
    useEffect(() => {
        start();
    }, [])
    return (
        <div>

            <div style={{ fontSize: 30, color: "blue" }}>

                {/* <span id="h">Giờ</span> : */}
                <span id="m">Phút</span> :
                <span id="s">Giây</span>
                {/* {start()} */}
            </div>
        </div>

    )
}
