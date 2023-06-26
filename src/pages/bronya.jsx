import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import flagUzb from "../images/1200px-Flag_of_Uzbekistan.png";
import editIcon from "../images/edit.png";
import profileImage from "../images/Ellipse 1.png";
import eyeIcon from "../images/eye.png";
import britianFlag from "../images/GB.png";
import notificationIcon from "../images/notification.png";
import uzbRegion from "../images/region.png";
import ruRegion from "../images/RU.png";
import deleteIcon from "../images/trash.png";
// redux-toolkit
import { useSelector, useDispatch } from "react-redux";
import { getBookings, deleteBooking } from "../store/features/bookingSlice";
// components
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";

function Bronya() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);
  const isLoading = useSelector((state) => state.booking.isLoading);

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  if (isLoading) {
    console.log("Loading...");
  }

  return (
    <>
        <Sidebar />
      <div className="task">


        <div className="mainMargin">
          <Search />

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="panelUprText">Бронь</h2>
            </div>
            <div className="miniSearchDivaffloDour">
              <div className="miniIonIconSearch">
                <ion-icon
                  className="md hydrated miniSearchIconInput"
                  name="search-outline"
                  role="img"
                  aria-label="search outline"
                />
              </div>
              <input
                placeholder="Поиск по бронированию"
                className="miniInputSdelka5"
                type="text"
              />
            </div>
          </div>

          <div className="bronyaData">
            <div className="jkMiniData2">
              <div className="checkboxDivInput">
                <input className="checkBoxInput" type="checkbox" />
              </div>
              <div className="checkboxDivInput">№</div>
              <div className="bronyaFio">Ф.И.О</div>
              <div className="bronyaTelefon">Телефон</div>
              <div className="checkboxDivTextInput3 srokDeystvieBronya">
                Срок действия
              </div>
              <div className="checkboxDivTextInput">Предоплата</div>
              <div className="checkboxDivTextInput4 bronyaDeystvie">
                Действиe
              </div>
            </div>
            <div></div>
            {bookings &&
              bookings.map((booking) => {
                return (
                  <div key={booking.id} className="jkMiniData mb-1">
                    <div className="checkboxDivInput">
                      <input className="checkBoxInput" type="checkbox" />
                    </div>
                    <div className="checkboxDivInput">1</div>
                    <div className="bronyaFio">
                      {/* Клиентов Клиент <br /> Клиентович */}
                      {booking.full_name}
                    </div>
                    <div className="bronyaTelefon">+998 {booking.phone}</div>
                    <div className="bronyaActivniy">
                      {booking.status ? "Активный" : "Не Активный"}
                    </div>
                    <div className="checkboxDivTextInput">
                      {booking.prepayment}$
                    </div>
                    <div className="checkboxDivTextInput4">
                      <NavLink to={`/seeBron/${booking.id}`} className="seaDiv">
                        <img
                          style={{ marginTop: 4 }}
                          width={25}
                          height={25}
                          src={eyeIcon}
                          alt="Eye"
                        />
                      </NavLink>
                      <div className="seaDiv">
                        <img
                          className="mt-1"
                          width={20}
                          height={20}
                          src={editIcon}
                          alt="Edit"
                        />
                      </div>
                      <div className="seaDiv">
                        <img
                          className="mt-1"
                          width={20}
                          height={20}
                          src={deleteIcon}
                          alt="Trash"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bronya;
