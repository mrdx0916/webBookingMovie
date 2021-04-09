import React from "react";

export default function MenuHeThongRap({menuLeft, menuRight, menuMobi}) {
  return (
    <div
      className="container-fluid tab-content"
      id="myTabContent"
    >
        <div className="row d-none d-md-flex">
            <div class="nav flex-column nav-pills col-2 col-xl-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {menuLeft}
            </div>
            <div class="tab-content col-10 col-xl-7" id="v-pills-tabContent">
                {menuRight}
            </div>
        </div>
        <div className="d-block d-md-none">
            {menuMobi}
        </div>
    </div>
  );
}
