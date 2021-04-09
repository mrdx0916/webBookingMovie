import React, { useEffect, useRef, useState } from 'react'

export default function MenuMobi({logo ,tenHeThongRap, collapseMenu}) {
    const [collapse, setCollapse] = useState(false);
    const wrapperRef = useRef(null);
    useEffect(() => {
        document.addEventListener("click", handleClickOutsite);
      }, []);
    const handleCollapse = () => {
        setCollapse(!collapse)
    }
    const handleClickOutsite = (event) => {
        const { target } = event;
        if (!wrapperRef.current?.contains(target)) {
            setCollapse(false);
        }
      };
    return (
        <div ref={wrapperRef}>
            <a class="d-flex pb-4 align-items-center" onClick={handleCollapse}>
                <img style={{ width: 50, height: 50 }} src={logo} alt={tenHeThongRap} />
                <span className="px-2" style={{ color: 'black', fontWeight: "700" }}>{tenHeThongRap}</span>
            </a>
            {
                collapse &&
                <div>
                    {
                        collapseMenu
                    }
                </div>
            }
        </div>
    )
}
