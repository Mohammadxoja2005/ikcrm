import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import flagUzb from '../images/1200px-Flag_of_Uzbekistan.png'
import editIcon from '../images/edit.png'
import profileImage from '../images/Ellipse 1.png'
import eyeIcon from '../images/eye.png'
import britianFlag from '../images/GB.png'
import notificationIcon from '../images/notification.png'
import uzbRegion from '../images/region.png'
import ruRegion from '../images/RU.png'
// components
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
// react-redux 
import { useSelector, useDispatch } from "react-redux";
import { getAllInstallmentPlans } from '../store/features/installmentPlanSlice'

function Rassrochka() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllInstallmentPlans());
  }, [])

  const { isLoading, installmentPlan } = useSelector((state) => state.installmentPlan);

  return (
    <>
        <Sidebar />
      <div className="task">


        <div className="mainMargin">
          <Search />

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="panelUprText">Рассрочка</h2>
            </div>
            <div className="miniSearchDiv6">
              <div className='miniIonIconSearch'>
                <ion-icon
                  className="md hydrated miniSearchIconInput"
                  name="search-outline"
                  role="img"
                  aria-label="search outline"
                />
              </div>
              <input
                placeholder="Поиск по клиентам"
                className="miniInputSdelka5"
                type="text"
              />
            </div>
          </div>

          <div className="sdelkaData">
            <div className="jkMiniData2">
              <div className="checkboxDivInput checkingInputRassrochkaChecked">
                <input className="checkBoxInput" type="checkbox" />
              </div>
              <div className="checkboxDivInput checkingInputRassrochkaChecked">№</div>
              <div className="bronyaFio bronyaFioRassrochka">Ф.И.О Покупателя</div>
              <div className="checkboxDivTextInput2">Номер квартиры</div>
              <div className="sdlekaPriceJk">Сумма</div>
              <div className="rassrochkaPokazatStatus">Период</div>
              <div className="rassrochkaPokazatStatus">Статус</div>
              <div className="checkboxDivTextInput4">Действиe</div>
            </div>
            {isLoading ? installmentPlan.map((plan) => {
              return (
                <div key={plan.id} className="jkMiniData mb-1">
                  <div className="checkboxDivInput checkingInputRassrochkaChecked">
                    <input className="checkBoxInput" type="checkbox" />
                  </div>
                  <div className="checkboxDivInput checkingInputRassrochkaChecked">{plan.id}</div>
                  <div className="bronyaFio">
                    {plan.client_full_name}
                  </div>
                  <div className="checkboxDivTextInput2">{plan.flat_number}</div>
                  <div className="sdlekaPriceJk">{plan.price} $</div>
                  <div className="rassrochkaPokazatStatus">{plan.period} месяц</div>
                  <div className="rassrochkaPokazatStatusGreen">Показать статус</div>
                  <div className="checkboxDivTextInput4">
                    <div className="seaDiv"
                      onClick={() => navigate(`/newCredit/${plan.id}`)}
                    >
                      <img
                        style={{ marginTop: 4 }}
                        width={25}
                        height={25}
                        src={eyeIcon}
                        alt="Eye"
                      />
                    </div>
                    {/* <div className="seaDiv">
                      <img
                        className="mt-1"
                        width={20}
                        height={20}
                        src={editIcon}
                        alt="Edit"
                      />
                    </div> */}
                  </div>
                </div>
              )
            })

              : <div>Loading...</div>}

          </div>
        </div>
      </div>

    </>
  )
}

export default Rassrochka