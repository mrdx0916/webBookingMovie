import React from "react";

export default function TabMenu({ content }) {
  return (
    <div style={{ backgroundColor: "#0a2029" }}>
      <div
        style={{ backgroundColor: "white" }}
        className="container  ChiTietPhimLichChieu03"
        id="ChiTietPhimLichChieu03"
      >
        <div className="ChiTietPhimLichChieu03in">
          <ul
            style={{ fontWeight: 800, fontSize: "15px", color: "yellow" }}
            className="ChiTietPhimLichChieu03inin justify-content-center py-3 mb-5 nav nav-tabs"
            id="myTab"
            role="tablist"
          >
            {content.map((item,index) => {
               const active = index === 0 ? "active" : "";
              return (
                <li className="nav-item" role="presentation">
                  <a
                    style={{ color: "orange" }}
                    className={`nav-link ${active}`}
                    id="home-tab"
                    data-bs-toggle="tab"
                    href={"#"+item.href}
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className=" container ChiTietPhimLichChieu03inin1 tab-content"
            id="myTabContent"
          >
            {content.map((item , index) => {
                const active = index === 0 ? "show active" : ""
                console.log(item.menuContent);
                return (
                <div
                className={`tab-pane fade ${active}`}
                id={item.href}
                role="tabpanel"
              >
                  {
                      item.menuContent
                  }
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
}
