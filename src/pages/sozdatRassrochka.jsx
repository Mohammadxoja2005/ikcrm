import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import jkSize3d from '../images/m_b36a3adc8277086c6618f837ba24a5ce 1.png'
import leftArrowIcon from '../images/icons/arrow-left.png'
// components
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { getAllInstallmentSingle } from "../store/features/installmentPlanSlice";
// headless ui 
import { Listbox, Transition } from '@headlessui/react'

function SozdatRassrochka() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInstallmentSingle());
  }, [])

  const { isLoading, installmentPlanSingle } = useSelector((state) => state.installmentPlan);
  const [selectedStatus, setSelectedStatus] = useState('');

  const [statuses, setStatuses] = useState([
    {
      id: 1,
      name: "Оплачена"
    },
    {
      id: 2,
      name: "Не Оплачена"
    },
    {
      id: 3,
      name: "Отменена"
    }
  ]);

  console.log(selectedStatus);

  return (
    <>
      <Sidebar />
      <div className="task">

        <div className="mainMargin">
          <Search />

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <NavLink
                to={'/rassrochka'}
                className="plus2 profileMaxNazadInformatsiyaKlient"
              >
                <img src={leftArrowIcon} alt="" />
              </NavLink>
              <h2 className="panelUprText">Рассрочка</h2>
            </div>
          </div>

          <div className="sozdatRassrochkaData">
            {isLoading
              ?
              <form>
                <div style={{ width: "100%" }} className="d-flex">
                  <div>
                    <div className="sozdatImyaSpsok">
                      <h3 className="sozdatImyaSpisokH3">Ф.И.О. Клиента</h3>
                      <div className="sozdatImyaSpisokInput1272">
                        {installmentPlanSingle.client_full_name}
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="lidiMarginRight1272">
                        <div className="sozdatImyaSpsok">
                          <h3 className="sozdatImyaSpisokH3">Телефон</h3>
                          <div className="sozdatImyaSpisokInputTel1272">
                            {installmentPlanSingle.phone}
                          </div>
                        </div>
                        <div className="sozdatImyaSpsok">
                          <h3 className="sozdatImyaSpisokH3">Email</h3>
                          <div className="sozdatImyaSpisokInputMail1272">
                            {installmentPlanSingle.email}
                          </div>
                        </div>
                        <div className="sozdatImyaSpsok">
                          <h3 className="sozdatImyaSpisokH3">Паспортные данные</h3>
                          <div className="sozdatImyaSpisokInputPasport1272">
                            {installmentPlanSingle.passport}
                          </div>
                        </div>
                        <div className="sozdatImyaSpsok">
                          <h3 className="sozdatImyaSpisokH3">Дата начала договора</h3>
                          <div className="sozdatImyaSpisokInputPasport1272">
                            {installmentPlanSingle.contract_start_date}
                          </div>
                        </div>
                      </div>
                      <div className="lidiMarginRight1272">
                        <div className="sozdatImyaSpsok">
                          <h3 className="sozdatImyaSpisokH3">Квартира</h3>
                          <div className="sozdatImyaSpisokInputKvartira1272">{installmentPlanSingle.flat_number}</div>
                        </div>
                        <div className="sozdatImyaSpsok">
                          <h3 className="sozdatImyaSpisokH3">Предоплата</h3>
                          <div className="sozdatImyaSpisokInputPredoplata1272">
                            {installmentPlanSingle.prepayment}
                          </div>
                        </div>
                        <div className="sozdatImyaSpsok">
                          <h3 className="sozdatImyaSpisokH3RassrochkaSozdat">
                            Первоночальный взнос
                          </h3>
                          <div className="sozdatImyaSpisokInputPredoplata1272">
                            {installmentPlanSingle.initial_fee}
                          </div>
                        </div>
                        <div className="sozdatImyaSpsok">
                          <h3 className="sozdatImyaSpisokH31272">
                            Период рассрочки <br />{" "}
                            <span className="sozdatImyaSpisokH31272mini">
                              месяцев
                            </span>
                          </h3>
                          <div className="sozdatImyaSpisokInputKvartira1272">{installmentPlanSingle.period}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginLeft: "-100px" }}>
                    <p className="sozdatBronImya">
                      Ответсвенный: <br /> {installmentPlanSingle.responsible}
                    </p>
                    <img
                      className="homeSozdatImage1272"
                      src={jkSize3d}
                      alt="House"
                    />
                  </div>

                </div>
              </form>
              : <div>Loading...</div>}
          </div>

          <div className="sozdatRassrochkaData1272">

            <div className="sozdatRassrochkaDataUae">
              <div className="checkboxDivInput">№</div>
              <div className="checkboxDivTextInput3565">Статус</div>
              <div className="checkboxDivTextInput3565">Сумма</div>
              <div className="checkboxDivTextInput3565">Дата оплаты</div>
            </div>

            {isLoading ?
              installmentPlanSingle.statuses?.map((planStatus) => {
                return (
                  <Listbox value={selectedStatus} onChange={setSelectedStatus}>
                    <div className="sozdatRassrochkaDataUae2">
                      <div className="checkboxDivInput">{planStatus.id}</div>

                      <div>
                        <Listbox.Button className="checkboxDivTextInput3565 dataSdelkaJkGreenNthChild">
                          <div>
                            {planStatus.status == '0' ? 'Оплачено' : null}
                            {planStatus.status == '1' ? 'Не Оплачено' : null}
                            {planStatus.status == '2' ? 'Отменено' : null}
                          </div>
                        </Listbox.Button>

                        <Listbox.Options
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            background: "white",
                            zIndex: "999",
                            position: "relative"
                          }}
                        >
                          {statuses && statuses.map((status) => {
                            return (
                              <Listbox.Option
                                key={status.id}
                                value={status.id}
                                style={{ listStyle: 'none' }}
                              >
                                <div className="checkboxDivTextInput3565 dataSdelkaJkGreenNthChild">
                                  {status.name}
                                </div>
                              </Listbox.Option>
                            )
                          })}
                        </Listbox.Options>

                      </div>

                      <div className="checkboxDivTextInput3565">{planStatus.price}</div>
                      <div className="checkboxDivTextInput3565">{planStatus.date}</div>
                    </div>
                  </Listbox>
                )
              })
              : <div>Loading...</div>}
          </div>

        </div >
      </div >
    </>
  )
}

export default SozdatRassrochka