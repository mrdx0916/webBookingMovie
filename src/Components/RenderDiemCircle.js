import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

export default function RenderDiemCircle(props) {
    const renderDiemCircle = () => {
        let borderColor, corner;
        if (props.danhGia >= 0 && props.danhGia < 5) {
            borderColor = '#3a3a3a';
            corner = `${360 - (5 - props.danhGia) * 36}deg`;
        } else {
            borderColor = '#7ed321';
            corner = `${props.danhGia * 36}deg`;
        }
        return (
            <div className="bar" style={{ border: `.06em solid ${borderColor}`, transform: `rotate(${corner})` }}></div>
        )
    }
    const renderStar = (a) => {
        let mystar = [];
        let diem = a / 2;
        for (let j = 0; j < 5; j++) {
            if (j <= diem - 1) {
                mystar.push(<AiFillStar />);
            } else if (a % 2 !== 0 && j < diem) {
                mystar.push(<BsStarHalf />);
            } else {
                mystar.push(<AiOutlineStar />);
            }
        }
        return mystar;
    };

    return (
        <div className=" text-center  col-4">
            <div className="d-flex justify-content-end">
                <div id="circlePercent" className="c100">
                    <div className="circleBorder"></div>
                    <span className="ng-binding text-light">{props.danhGia}</span>
                    <div className="slice">
                        {renderDiemCircle()}
                        <div className="fill"></div>
                    </div>
                </div>
            </div>

            <div className="pt-3"> <p>{renderStar(props.danhGia)}</p></div>
            <div>38 người đánh Giá</div>

        </div>
    )
}
