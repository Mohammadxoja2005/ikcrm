import React from "react";
import { NavLink } from "react-router-dom";
import flagUzb from "../images/1200px-Flag_of_Uzbekistan.png";
import profileImage from "../images/Ellipse 1.png";
import britianFlag from "../images/GB.png";
import notificationIcon from "../images/notification.png";
import uzbRegion from "../images/region.png";
import ruRegion from "../images/RU.png";
import userImageX from "../images/user-x.png";
import verifed from "../images/Verifed.png";
// components
import DealBoard from "../components/DealBoard";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";

function Sdelka() {
  return (
    <div>
      <div className="task">
        <Sidebar />

        <div className="mainMargin">
          <Search />

          <div
            className="d-flex justify-content-between"
            style={{ zIndex: 120 }}
          >
            <div className="d-flex">
              <div className="d-flex">
                <h2 className="panelUprText">Сделки</h2>
                <NavLink to={"/sold"} className="plus2">
                  +
                </NavLink>
              </div>
            </div>
          </div>

          <div
            className="d-flex justify-content-center"
            style={{ zIndex: 110, marginTop: "-70px", marginBottom: 20 }}
          >
            <div className="d-flex">
              <div className="userXOval">
                <img src={userImageX} alt="user-x" />
              </div>
              <div className="userXText">Не реализован</div>
            </div>
            <div className="d-flex">
              <div className="VerifedOval">
                <img src={verifed} alt="user-x" />
              </div>
              <div className="VerifedText">Завершить</div>
            </div>
          </div>

          <DealBoard />

        </div>
      </div>
    </div>
  );
}

export default Sdelka;
