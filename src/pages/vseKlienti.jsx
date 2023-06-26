import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import flagUzb from "../images/1200px-Flag_of_Uzbekistan.png";
import callIcon from "../images/Call.png";
import profileImage from "../images/Ellipse 1.png";
import britianFlag from "../images/GB.png";
import mailIcon from "../images/Mail.png";
import notificationIcon from "../images/notification.png";
import uzbRegion from "../images/region.png";
import ruRegion from "../images/RU.png";
import deleteIcon from "../images/trash.png";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { getAllClients, deleteAllClient } from "../store/features/clientSlice";
// components
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
// hooks
import { useDeleteClient } from "../hooks/useDeleteClient";
import { useAtom } from "jotai";

function VseKlienti() {
  const dispatch = useDispatch();
  const locationWindows = document.getElementById("locationWindows");
  const [allClientId, setAllClientId] = useState(null);
  const [isDeleted, setIsDeleted] = useAtom(useDeleteClient);

  const ref = useRef(null);

  useEffect(() => {
    dispatch(getAllClients())
  }, [isDeleted]);

  const deleteClient = () => {
    dispatch(deleteAllClient(allClientId))
      .then(() => {
        setIsDeleted(!isDeleted);
      })
  }

  const allClients = useSelector((state) => state.client.allClients);
  const isLoading = useSelector((state) => state.client.isLoading);

  return (
    <div>
      <>
        <div className="d-flex aad">
          <Sidebar />

          <div className="mainMargin">
            <Search />

            <div
              className="d-flex justify-content-between"
            >
              <div className="d-flex">
                <h2 className="panelUprText">Все Клиенты</h2>
                <NavLink to={"/newUser"} className="plus2">
                  +
                </NavLink>
              </div>
              <div className="miniSearchDiv">
                <ion-icon
                  className="miniSearchIconInput"
                  name="search-outline"
                />
                <input
                  placeholder="Поиск по сделкам"
                  className="miniInputSdelka"
                  type="text"
                />
              </div>
            </div>

            <div>
              <NavLink to={"/lidi"} className="cdelki_c_klientamiBlue2">
                Сделки c клиентами
              </NavLink>
              <NavLink to={"/allClients"} className="cdelki_c_klientami2">
                Bce клиенты
              </NavLink>
            </div>

            <div className="sdelkaData">
              <div className="jkMiniData2">
                <div className="checkboxDivInput">
                  <input className="checkBoxInput" type="checkbox" />
                </div>
                <div className="checkboxDivInput spisokMarginRight7">№</div>
                <div className="checkboxDivTextInput vseClientiVaqtinchaWith  spisokMarginRight7">
                  Ф.И.О. Клиентов
                </div>
                <div className="vseClientiStatus spisokMarginRight7">
                  Статус
                </div>
                <div className="spisokCheckImia spisokMarginRight7">
                  Последняя активность
                </div>
                <div className="checkboxDivTextInput4">Действиe</div>
              </div>

              {allClients.length === 0 ?
                <div>Тут еще ничего нету</div>
                : isLoading ? (

                  allClients.map((client) => {
                    return (
                      <div key={client.id} className="jkMiniData mb-1">
                        <NavLink
                          to={"/informatsiyaKlienti"}
                          className="jkMiniData mb-1"
                        >
                          <div className="checkboxDivInput">
                            <input className="checkBoxInput" type="checkbox" />
                          </div>
                          <div className="checkboxDivInput spisokMarginRight7">
                            {client.id}
                          </div>
                          <div className="checkboxDivTextInput vseClientiVaqtinchaWith  spisokMarginRight7">
                            {client.last_name} {client.first_name}
                            {client.middle_name}
                          </div>
                          <div className="vseClientiStatus dataSdelkaJkPinkNthChild dataSdelkaJkPinkNthChild spisokMarginRight7" style={{ background: `${client.status ? 'green' : 'red'}` }}>
                            {client.status ? "Актив" : "Не Актив"}
                          </div>
                          <div className="spisokCheckImia spisokMarginRight7">
                            {client.last_active}
                          </div>
                        </NavLink>
                        <div className="checkboxDivTextInput4 vseClientLinkRight">

                          <a href="tel:+998977503565" className="seaDiv">
                            <img
                              className="mt-1"
                              width={20}
                              height={20}
                              src={callIcon}
                              alt="Trash"
                            />
                          </a>
                          <a href="mailto:apple@icloud.com" className="seaDiv">
                            <img
                              className="mt-1"
                              width={20}
                              height={20}
                              src={mailIcon}
                              alt="Trash"
                            />
                          </a>
                          <div className="seaDiv" style={{ cursor: "pointer" }} onClick={() => setAllClientId(client.id)}>
                            <img
                              data-toggle="modal"
                              data-target="#exampleModalLong"
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
                  })
                ) : (
                  <div>Loading...</div>
                )}

            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ border: "none" }}>
              <div className="modal-body">
                <h2 className="modalVideystvitelno">
                  Вы действительно хотите удалить
                </h2>
                <div className="d-flex justify-content-center mt-5">
                  <button
                    className="modalVideystvitelnoDa"
                    data-dismiss="modal"
                    onClick={deleteClient}
                  >
                    Да
                  </button>
                  <button
                    className="modalVideystvitelnoNet"
                    data-dismiss="modal"
                  >
                    Нет
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default VseKlienti;
