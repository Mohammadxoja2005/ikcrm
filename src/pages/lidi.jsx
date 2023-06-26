import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import flagUzb from "../images/1200px-Flag_of_Uzbekistan.png";
import profileImage from "../images/Ellipse 1.png";
import britianFlag from "../images/GB.png";
import notificationIcon from "../images/notification.png";
import uzbRegion from "../images/region.png";
import ruRegion from "../images/RU.png";
import deleteIcon from "../images/trash.png";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getDealClients, deleteDealClient } from "../store/features/clientSlice";
// components
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
// hooks
import { useDeleteClient } from "../hooks/useDeleteClient";
import { useAtom } from "jotai";

function Lidi() {
  const dispatch = useDispatch();
  const dealClients = useSelector((state) => state.client.dealClients);
  const isLoading = useSelector((state) => state.client.isLoading);
  const [isDeleted, setIsDeleted] = useAtom(useDeleteClient);
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    dispatch(getDealClients())
  }, [isDeleted]);

  const deleteClient = () => {
    dispatch(deleteDealClient(clientId))
      .then(() => {
        setIsDeleted(!isDeleted);
      })
  }


  return (
    <>
      <Sidebar />
      <div className="lidi">

        <div className="mainMargin">
          <Search />

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="panelUprText">Сделка с клиентами</h2>
              <NavLink to={"/sold"} className="plus2">
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
            <NavLink to={"/lidi"} className="cdelki_c_klientami">
              Сделки c клиентами
            </NavLink>
            <NavLink to={"/allClients"} className="cdelki_c_klientamiBlue">
              Bce клиенты
            </NavLink>
          </div>

          <div className="sdelkaData">
            <div className="jkMiniData2">
              <div className="checkboxDivInput">№</div>
              <div className="checkboxDivTextInput">Ф.И.О. Клиентов</div>
              <div className="ObjextSdelki">Объект сделки</div>
              <div className="ObjextSdelki">Сумма</div>
              <div className="dataSdelkaJk">Последнее действие</div>
              <div className="deystvieSdelka">Действиe</div>
            </div>

            <div className="lidi_list">
              {dealClients.length === 0 ?

                <div>Тут еще ничего нету</div> :

                isLoading ? (
                  dealClients.map((client) => {
                    return (
                      <div key={client.id} className="jkMiniData mb-1">
                        <NavLink
                          to={"/informatsiyaKlienti"}
                          className="d-flex lidiHrefBigLidiData"
                        >
                          <div className="checkboxDivInput">{client.id}</div>
                          <div className="checkboxDivTextInput">
                            {client.full_name}
                          </div>
                          <div className="ObjextSdelki">{client.contract_number}</div>
                          <div className="ObjextSdelki">{client.sum} у.е.</div>
                          <div className="dataSdelkaJk dataSdelkaJkYellowNthChild">
                            {client.status == '0' ? 'Первый Контакт' : null}
                            {client.status == '1' ? 'Переговоры' : null}
                            {client.status == '2' ? 'Делается сделка' : null}
                          </div>
                        </NavLink>
                        <div className="lidiDivInput48">
                          <button
                            type="button"
                            style={{ border: "none", cursor: "pointer" }}
                            className="seaDiv"
                            onClick={() => setClientId(client.id)}
                          >
                            <img
                              data-toggle="modal"
                              data-target="#exampleModalLong"
                              className="mt-1"
                              width={20}
                              height={20}
                              src={deleteIcon}
                              alt="Trash"
                            />
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>Loading...</div>
                )
              }
            </div>
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
  );
}

export default Lidi;
