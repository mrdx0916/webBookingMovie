import React, { useEffect, useRef, useState } from 'react'

export default function MenuMobiTrangChuCumRap({menuTitle,collapseMenu}) {
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
            <div onClick={handleCollapse}>
                {menuTitle}
            </div>
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
